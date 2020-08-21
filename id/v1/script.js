$(document).ready(function () {

    $('.block1 .top-block .button-block button, .block5 .text-block .price-block .button-block button, .block6 .right-block .bottom-line .button-block button, .block9 .text-block .price-block .button-block button, .block2 .result-block .right-block .bottom-line .bright button').click(function () {
        $('html, body').animate({scrollTop: $('.block10 .right-block .form-block').offset().top}, 1000);
        return false;
    });

    $('.read').click(function () {
        $('html, body').animate({scrollTop: $('#read').offset().top}, 1000);
        return false;
    });


    GetCount();

    $('.block2 .test-block .right-block .item').click(function () {
        if ($(this).hasClass('chosen')) {
            $(this).removeClass('chosen');
        } else {
            $(this).addClass('chosen');
        }

        return false;
    });

    $('.block2 .test-block .left-block .button-block button').click(function () {

        if ($('.block2 .test-block .right-block .item.chosen').length < 2) {
            $('.block2 .test-block .right-block, .block2 .test-block .left-block').hide();
            $('.block2 .result-block .right-block .corner .ctext .big').html('0');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kosong atau nol dalam skala kelesuan. Tidak terasa gangguan apa pun dan Anda merasa sehat.</strong> Menu makan Anda terdiri dari kurang lebih 90% makanan bergizi, dengan rasio protein lemak, dan karbohidrat yang seimbang. Anda aktif melakukan olahraga, tidak merasakan stres dalam jangka waktu yang lama, memiliki persahabatan yang baik dan hubungan yang baik dengan teman-teman dan orang-orang tercinta, mencintai pekerjaan Anda, dan Anda bisa berlibur 3 kali dalam setahun. Anda tidak menghabiskan terlalu banyak waktu di kota! Dan Anda tampil lebih muda dari 30 tahun.');
            $('.block2 .result-block .right-block .textline').html('Anda dapat bertransisi ke kelesuan tingkat pertama jika tidak melakukan perawatan dalam 4-6 bulan.');
            $('.block2 .result-block .right-block .textline').show();
        } else if ($('.block2 .test-block .right-block .item.chosen').length < 3 && $('.block2 .test-block .right-block .item.chosen').length > 1) {
            $('.block2 .result-block .right-block .corner .ctext .big').html('1');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat pertama. Tubuh tidak memiliki cukup tenaga untuk menbersihkan dan merawat diri sendiri.</strong>  Anda menjadi kecapekan di malam hari, meningkatkan rasa capek Anda secara umum.');
            $('.block2 .result-block .right-block .textline').html('Transisi ke kelesuan tingkat kedua terjadi jika tidak melakukan perawatan dalam 1-3 bulan.');
            $('.block2 .result-block .right-block .textline').show();
        } else if ($('.block2 .test-block .right-block .item.chosen').length < 4) {
            $('.block2 .result-block .right-block .corner .ctext .big').html('2');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat kedua. Anda akan merasakan sakit kepala berkala dan nyeri di sendi Anda ketika melakukan aktivitas fisik.</strong> Nyeri ini dapat menjadi permanen. Anda mulai lebih sering sakit.');
            $('.block2 .result-block .right-block .textline').html('Transisi ke kelesuan tingkat ketiga jika tidak melakukan perawatan dapat terjadi dalam 2-5 bulan.');
            $('.block2 .result-block .right-block .textline').show();
        } else if ($('.block2 .test-block .right-block .item.chosen').length < 5) {
            $('.block2 .result-block .right-block .corner .ctext .big').html('3');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat ketiga. Anda mulai merasakan reaksi alergi,</strong> seperti mata merah, kulit merah serta asma bronkial dan rinitis alergi. Semua gejala fisik ini terkait dengan fakta bahwa racun terkumpul dalam tubuh dan bertahan di hati dan ginjal, tidak bisa dihilangkan dari dalam tubuh.');
            $('.block2 .result-block .right-block .textline').html('Transisi ke kelesuan tingkat keempat jika tidak melakukan perawatan dapat terjadi dalam 6 bulan atau lebih.');
            $('.block2 .result-block .right-block .textline').show();
        } else if ($('.block2 .test-block .right-block .item.chosen').length < 6) {
            $('.block2 .result-block .right-block .corner .ctext .big').html('4');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat keempat. Terdapat banyak polip, kista, dan tumor ganas yang terletak di seluruh tubuh.</strong> Ada kecenderungan untuk menjadi obesitas.');
            $('.block2 .result-block .right-block .textline').html('Transisi ke kelesuan tingkat kelima jika tidak melakukan perawatan adalah 3-5 bulan.');
            $('.block2 .result-block .right-block .textline').show();
        } else if ($('.block2 .test-block .right-block .item.chosen').length < 7) {
            $('.block2 .result-block .right-block .corner .ctext .big').html('5');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat kelima. Tingkat ini dicirikan dengan gangguan metabolisme dan dystonia vegetovaskular.</strong> Terdapat banyak penyakit yang dikaitkan dengan gangguan metabolisme seperti  osteokondrosis, diabetes, obesitas, radang sendi dan arthrosis. ');
            $('.block2 .result-block .right-block .textline').html('Transisi ke kelesuan tingkat keenam yang dikarenakan tidak adanya perawatan dapat terjadi setelah 7-10 bulan.');
            $('.block2 .result-block .right-block .textline').show();
        } else {
            $('.block2 .result-block .right-block .corner .ctext .big').html('6');
            $('.block2 .result-block .right-block .rtext').html('<strong>Kelesuan tingkat keenam dapat berujung pada penyakit yang sangat serius atau bahkan kematian.</strong>  Tubuh benar-benar dihancurkan dari dalam dengan berbagai penyakit kronis yang ada serta penyakit baru yang muncul secara rutin.');
            $('.block2 .result-block .right-block .textline').html('');
            $('.block2 .result-block .right-block .textline').hide();
        }
        $('.block2 .test-block .right-block, .block2 .test-block .left-block').hide();
        $('.block2 .result-block').show();


        return false;
    });

    $('.block2 .result-block .left-block .button-block button').click(function () {
        $('.block2 .result-block').hide();
        $('.block2 .test-block .right-block .item').removeClass('chosen');
        $('.block2 .test-block .right-block, .block2 .test-block .left-block').show();

        return false;
    });

    $('.block9 .slider-point').click(function () {
        $('.block9 .slider-point').removeClass('active');
        $(this).addClass('active');
        $('.block9 .reviews-block .review').hide();
        $('.block9 .reviews-block .review.slide' + $(this).data('slide')).show();

        return false;

    })
    if ($(window).width() < 768) {
        $('.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2
        });

        $('.slider_1').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $('.slider_2').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    $('.res').click(function () {
        $('.power').css('display', 'inline-block');
    })

});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 27 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('.hours').html('00');
        $('.mins').html('00');
        $('.secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + hours;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('.hours').html(hours);
        $('.mins').html(mins);
        $('.secs').html(secs);
        setTimeout("GetCount()", 1000);
    }





}