// 슬라이더 박스 1
function SliderBox1__init() {
    let SliderBox1__i = 0;

    setInterval(function () {
        $('.slider-box-1').attr('data-index', ++SliderBox1__i % 3);
    }, 3000);
}

SliderBox1__init();

// 공지사항 팝업1
function Notice1Popup__show() {
    $('.notice-1-popup').show();
}

function Notice1Popup__hide() {
    $('.notice-1-popup').hide();
}

function Notice1Popup__init() {
    $('.notice-list > ul > li:first-child > a').click(function () {
        Notice1Popup__show();
    });

    $('.notice-1-popup .btn-close, .notice-1-popup .btn-close-2').click(function () {
        Notice1Popup__hide();
    });
}

Notice1Popup__init();