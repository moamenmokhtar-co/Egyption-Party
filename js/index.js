///    <reference types='../@types/jquery'/>



$('#close').on('click', () => {

    $('nav').animate({ width: '0%', padding: '0' }, (1000));
    $('main').animate({ marginLeft: '0' })
    document.body.style.overflow = 'auto'

})

$('#openBtn').on('click', () => {

    checkMedia()


})


function checkMedia() {
    if (window.matchMedia('(max-width:768px)').matches) {
        // Navbar Width 100% On Mobile Screen
        $('nav').animate({ width: '100%', padding: '1.5rem' });
        document.getElementsByTagName('nav')[0].style.textAlign = 'center';

        // To Remove Scroll When User Open Navbar On Mobile Media
        document.body.style.overflow = 'hidden'
        return true;
    }
    else {
        $('nav').animate({ width: '20rem', padding: '1.5rem' });
        $('main').animate({ marginLeft: '20rem' })
    }
}


$('.question').on('click', (e) => {
    let element = e.target;
    let answer = element.parentElement.nextElementSibling;

    $('.answer').slideUp(1000)

    if ($(answer).innerHeight() == 0) {
        $(answer).slideDown(1000)

    }
    else {
        $(answer).slideUp(1000)
    }

})



function mince() {
    const discountDay = new Date('2025-7-7')


    function updateCountDay() {
        const today = new Date()
        const timeRemaining = discountDay - today


        if (timeRemaining <= 0) {

            $('#seconds').html(`0s`)
            $('#minutes').html(`0m`)
            $('#hours').html(`0h`)
            $('#days').html(`0d`)
            return
        }



        const seconds = Math.floor((timeRemaining / 1000) % 60)
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
        const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 60)
        const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24)
        // console.log(seconds);
        // console.log(minutes);
        // console.log(hours);
        // console.log(days);


        $('#seconds').html(`${seconds} s`)
        $('#minutes').html(`${minutes} m`)
        $('#hours').html(`${hours} h`)
        $('#days').html(`${days} d`)
    }





    setInterval(updateCountDay, 1000)
}

mince()

let textCharLimit = 100;
let characterRemaining = textCharLimit;

// تحديث النص المتبقي عند تحميل الصفحة
$('#messageTextChar').html(characterRemaining);

$('#messageText').on('input', (e) => {
    let currentLength = e.target.value.length;

    // حساب عدد الأحرف المتبقية
    characterRemaining = textCharLimit - currentLength;
    $('#messageTextChar').html(characterRemaining);

    // منع تجاوز عدد الأحرف (بدون الحاجة لتغيير maxLength)
    if (characterRemaining < 0) {
        e.target.value = e.target.value.substring(0, textCharLimit);
        characterRemaining = 0;
        $('#messageTextChar').html(characterRemaining);
    }
});