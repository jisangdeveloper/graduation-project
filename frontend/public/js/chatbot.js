document.addEventListener('DOMContentLoaded', (event) => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatContainer = document.getElementById('chat-container');
    const url = "http://localhost:8000/answer";


    //기본 멘트
    addMessageToChat('ai_assistant', '안녕하세요!! 강서폴리텍대학교 스마트금융과 챗봇입니다.'); // 응답이 유효하지 않음

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
                    
                    //객체형태로 저장해서 배열로 반환
                    const extract_data = extractPages(data);
                    const sources = createSourceHTML(extract_data);
                    
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

    // 동적으로 데이터를 추출하고 배열로 저장하는 함수
    function extractPages(response) {
        const result = [];
    
        // 각 페이지를 추출하는 로직
        for (let i = 1; ; i++) {
            const sourceKey = `source${i}`;
            const pageKey = `page${i}`;
            const contentKey = `page_content${i}`;
    
            // 페이지 데이터가 존재하는지 확인
            if (response[sourceKey] && response[pageKey] && response[contentKey]) {
                // 배열에 페이지 정보를 추가
                result.push({
                    source: response[sourceKey],
                    page: response[pageKey],
                    content: response[contentKey]
                });
            } else {
                // 더 이상 페이지 데이터가 없으면 반복문을 종료
                break;
            }
        }
    
        return result;
    }
    // function createSourceHTML(source, index) {
    //     const fileName = source.metadata ? source.metadata.source?.split('\\').pop() : '출처 없음';
    //     const fileContent = source.page_content ? source.page_content.replace(/\n/g, '<br>') : '출처 내용이 제공되지 않았습니다.';
    //     return `
    //         <div class="source-container" id="source-container-${index}">
    //             <div class="source-title" data-index="${index}">▷ ${fileName}</div>
    //             <div class="source-content" id="source-content-${index}" style="display:none; background-color: white; padding: 5px; border-radius: 8px; font-size: 12px;">${fileContent}</div>
    //         </div>
    //     `;
    // }
    function createSourceHTML(sources) {
        return sources.map((source, index) => {
            const fileName = source.source ? source.source.split('\\').pop() : '출처 없음';
            const fileContent = source.content ? source.content.replace(/\n/g, '<br>') : '출처 내용이 제공되지 않았습니다.';
            return `
                <div class="source-container" id="source-container-${index + 1}">
                    <div class="source-title" data-index="${index + 1}">▷ ${fileName}(P.${source.page})</div>
                </div>
            `;
        }).join('\n\n');
    }
//     <div class="source-content" id="source-content-${index + 1}" style="display:none; background-color: white; padding: 5px; border-radius: 8px; font-size: 12px;">
//     페이지: ${source.page}
// </div>
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
        // const sourceTitles = container.querySelectorAll('.source-title');
        // sourceTitles.forEach(title => {
        //     title.addEventListener('click', (event) => {
        //         const index = event.target.getAttribute('data-index');
        //         const content = container.querySelector(`#source-content-${index}`);
        //         if (content.style.display === 'none') {
        //             content.style.display = 'block';
        //             event.target.innerHTML = `▽ ${event.target.innerHTML.slice(2)}`;
        //         } else {
        //             content.style.display = 'none';
        //             event.target.innerHTML = `▷ ${event.target.innerHTML.slice(2)}`;
        //         }
        //     });
        // });
    }
});

// 수신된 응답 처리 보강. 유효성 검사 추가
// source 필드의 값이 "No source available"인 경우 빈 문자열로 처리