// 모든 메뉴 항목에 클릭 이벤트 추가
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
      
      // 모든 콘텐츠를 숨기기
      document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
      });


      // 모든 메뉴 항목에서 'active' 클래스 제거
      document.querySelectorAll('.menu-item').forEach(menu => {
        menu.classList.remove('active');
      });

      this.classList.add('active');

      // 클릭된 메뉴에 해당하는 콘텐츠만 표시
      const contentId = this.getAttribute('data-content');
      // console.log(contentId);
      document.getElementById(contentId).style.display = 'block';
    });
  });