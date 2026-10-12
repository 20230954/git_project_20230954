// 마우스 오버/아웃 이미지 변경 기능
document.addEventListener('mouseover', function(e) {
    if (e.target && e.target.id === 'profileImg') {
        e.target.src = '/20230954.img/bell1.jpg';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target && e.target.id === 'profileImg') {
        e.target.src = '/20230954.img/bell.jpg';
    }
});