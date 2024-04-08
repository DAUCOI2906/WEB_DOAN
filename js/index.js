//lam slider
window.onload = function () {

    var blockslide = document.querySelector('.block_slider');
    //lay the khoi chua slider
    var listimage = document.querySelectorAll('.list_item_slider');
    //console.log(listimage);//lay the chua ds image


    //tien hanh lay ds image
    var numberimage = document.querySelectorAll('.content_1_image img').length;
    //console.log(numberimage);
    var i = 0;
    //lay chi muc 
    var index_img = document.querySelectorAll('.number--img--item');
    var index_img2 = document.querySelectorAll('.index2');

    //tien hanh tao slider
    setInterval(function () {
        if (i == 4) {
            i = 0;
        }
        //xoa class cho cac item truoc do
        document.querySelector('.chooseimg').classList.remove('chooseimg');
        document.querySelector('.chooseimg2').classList.remove('chooseimg2');
        //lay chieu rong 1 buc hinh
        var lengthimg = document.querySelector('.content_1_image img').width;
        listimage[0].style.transform = `translateX(${lengthimg * -1 * i}px)`;
        listimage[1].style.transform = `translateX(${lengthimg * -1 * i}px)`;
        index_img[i].classList.add('chooseimg');
        index_img2[i].classList.add('chooseimg2');
        i++;
    }, 3000);
    //hieu ung thanh search bien mat
    //ham an
    var search_icon = document.querySelector('.fa-magnifying-glass');
    var searchbox = document.querySelector('#searching');
    searchbox.addEventListener('input', function () {
        search_icon.style.display = 'none';
    });


    //js for login
    //an hien password
    var hidepass = document.querySelector('.fa-eye-slash');
    var openpass = document.querySelector('.fa-eye');
    //lay input= pass
    var inputpass = document.querySelector('input[type="password"]');

    hidepass.addEventListener('click', function () {
        hidepass.classList.toggle('close');
        openpass.classList.toggle('close');
        inputpass.setAttribute('type', 'text');
    });
    openpass.addEventListener('click', function () {
        hidepass.classList.toggle('close');
        openpass.classList.toggle('close');
        inputpass.setAttribute('type', 'password');
    });
    var close_login = document.querySelector('.fa-xmark');
    var loginbox = document.querySelector('.applogin');
    close_login.addEventListener('click', function () {
        loginbox.classList.add('close');
    });
    var openlogin2 = document.querySelector('#account2');
    var openlogin = document.querySelector('#account');
    var login = document.querySelector('.applogin');
    var login_box = document.querySelector('.login_box');
    openlogin.addEventListener('click', function () {
        login.classList.remove('close');

    });
    openlogin2.addEventListener('click', function () {
        login.classList.remove('close');

    });
    //an hien thong bao
    let chuongthongbao = document.getElementById("user_announce_icon");
    console.log("hihi")
    let thanhthongbao = document.getElementsByClassName("app_announce");
    let dongthanhthongbao = document.getElementById("app_announce_close");

    console.log(chuongthongbao);
    console.log(thanhthongbao);
    chuongthongbao.addEventListener('click', function () {
        thanhthongbao[0].classList.remove('close');
    });
    dongthanhthongbao.addEventListener('click', function () {
        thanhthongbao[0].classList.add('close');
    });

    //lam kiem tra thong bao da doc hay chua
    let itemthongbao = document.getElementsByClassName("app_list_announce_item");
    let thongbaochuadoc = itemthongbao.length;
    let n = thongbaochuadoc;
    let hienthisothongbao = document.getElementById("number_announce");
    //ds icon trang thai
    let icontrangthai = document.getElementsByClassName("announce_chua_doc");
    //gan so luong thong bao len icon
    hienthisothongbao.innerText = thongbaochuadoc;
    for (let i = 0; i < thongbaochuadoc; i++) {
        itemthongbao[i].addEventListener('click', function () {
            n = n - 1;
            hienthisothongbao.innerText = n;
            icontrangthai[i].style.display = 'none';
        })
    }

}

