document.addEventListener('DOMContentLoaded', (event) => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatContainer = document.getElementById('chat-container');
    const url = "http://127.0.0.1:8000/answer";

    chatForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const userInput = chatInput.value.trim();

        if (userInput) {
            addMessageToChat('user', userInput);
            chatInput.value = '';
            showLoadingSpinner();

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ input: userInput })
                });

                const data = await response.json();
                hideLoadingSpinner();

                // 응답 데이터가 유효한지 확인
                if (data && data.answer) {
                    // 출처 출력
                    const sources = [
                        data.source1 && data.source1 !== "No source available" ? createSourceHTML(data.source1, 1) : '',
                        data.source2 && data.source2 !== "No source available" ? createSourceHTML(data.source2, 2) : '',
                        data.source3 && data.source3 !== "No source available" ? createSourceHTML(data.source3, 3) : ''
                    ].filter(Boolean).join('\n\n');

                    let combinedAnswer = data.answer.replace(/\n/g, '<br>');

                    if (sources.trim() !== "") {
                        combinedAnswer += `<br><br>[출처]<br>${sources}`;
                    }

                    addMessageToChat('ai_assistant', combinedAnswer);
                } else {
                    addMessageToChat('ai_assistant', 'Failed to retrieve a valid response.'); //응답이 유효하지 않음
                }
            } catch (error) {
                console.error('Error:', error);
                hideLoadingSpinner();
                addMessageToChat('ai_assistant', 'An error occurred while receiving a response from the server.'); //서버 오류 발생
            }
        }
    });

    function createSourceHTML(source, index) {
        const fileName = source.metadata ? source.metadata.source?.split('\\').pop() : '출처 없음';
        const fileContent = source.page_content ? source.page_content.replace(/\n/g, '<br>') : '출처 내용이 제공되지 않았습니다.';
        return `
            <div class="source-container" id="source-container-${index}">
                <div class="source-title" data-index="${index}">▷ ${fileName}</div>
                <div class="source-content" id="source-content-${index}" style="display:none; background-color: white; padding: 5px; border-radius: 8px; font-size: 12px;">${fileContent}</div>
            </div>
        `;
    }

    function addMessageToChat(sender, message) {
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box', sender);

        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = sender === 'user' ? 'User' : 'AI';
        label.classList.add(sender === 'user' ? 'user-label' : 'ai-assistant-label');
        messageBox.appendChild(label);

        const text = document.createElement('div');
        if (sender === 'ai_assistant') {
            text.innerHTML = message;
        } else {
            text.textContent = message;
        }
        messageBox.appendChild(text);

        chatContainer.appendChild(messageBox);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        if (sender === 'ai_assistant') {
            attachSourceToggleEvents(messageBox);
        }
    }

    function showLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.classList.add('message-box', 'spinner', 'ai_assistant');
        spinner.innerHTML = `<div class="loader"></div>`;
        chatContainer.appendChild(spinner);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function hideLoadingSpinner() {
        const spinner = chatContainer.querySelector('.spinner');
        if (spinner) {
            chatContainer.removeChild(spinner);
        }
    }

    function attachSourceToggleEvents(container) {
        const sourceTitles = container.querySelectorAll('.source-title');
        sourceTitles.forEach(title => {
            title.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                const content = container.querySelector(`#source-content-${index}`);
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    event.target.innerHTML = `▽ ${event.target.innerHTML.slice(2)}`;
                } else {
                    content.style.display = 'none';
                    event.target.innerHTML = `▷ ${event.target.innerHTML.slice(2)}`;
                }
            });
        });
    }
});

// 수신된 응답 처리 보강. 유효성 검사 추가
// source 필드의 값이 "No source available"인 경우 빈 문자열로 처리