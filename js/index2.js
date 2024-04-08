window.onload = function () {

    var inputFiletruoc = document.getElementById("mattruoc");
    var inputFilesau = document.getElementById("matsau");
    var fileNametruoc = document.getElementById("filename_truoc");
    var fileNamesau = document.getElementById("filename_sau");
    inputFiletruoc.addEventListener('change', function (event) {
        let fileName = event.target.files[0].name;
        fileNametruoc.textContent = fileName;
    })
    inputFilesau.addEventListener('change', function (event) {
        let fileName = event.target.files[0].name;
        fileNamesau.textContent = fileName;
    })
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
    // lam combobox ngay thang nam. năm nhuận %4,%100,%400
    const today = new Date();
    const currentYear = today.getFullYear();
    //gan nam vao combobox
    infoYear = document.getElementById("info_year");
    for (let i = currentYear; i >=1900; i--) {
        infoYear.innerHTML += `<option value="${i}">${i}</option`;
    }
    //gan thang vao combobox
    infoMonth = document.getElementById("info_month");
    for (let i = 1; i <= 12; i++) {
        infoMonth.innerHTML += `<option value="${i}">${i}</option`;
    }




    //gan ngay vao combobox


    // Hàm để kiểm tra xem một năm có phải là năm nhuận không
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Hàm để tạo danh sách các ngày dựa trên tháng và năm được chọn
    function populateDays() {
        infoDay = document.getElementById("info_day");
        infoDay.innerHTML = "";
        var selectedMonth = document.getElementById("info_month").value;
        var selectedYear = document.getElementById("info_year").value;
        var daysInMonth;

        if (selectedMonth == 2) {
            daysInMonth = isLeapYear(selectedYear) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(parseInt(selectedMonth))) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        for (var i = 1; i <= daysInMonth; i++) {
            infoDay.innerHTML += `<option value="${i}">${i}</option`;
        }
    }
    // Gọi hàm populateDays khi thay đổi tháng hoặc năm
    document.getElementById("info_month").addEventListener("change", populateDays);
    document.getElementById("info_year").addEventListener("change", populateDays);
    
    



        // lam combobox ngay thang nam. năm nhuận %4,%100,%400
        //gan nam vao combobox
        infoYear = document.getElementById("info_yearme");
        for (let i = currentYear; i >=1900; i--) {
            infoYear.innerHTML += `<option value="${i}">${i}</option`;
        }
        //gan thang vao combobox
        infoMonth = document.getElementById("info_monthme");
        for (let i = 1; i <= 12; i++) {
            infoMonth.innerHTML += `<option value="${i}">${i}</option`;
        }
    //gan ngay vao combobox


    // Hàm để kiểm tra xem một năm có phải là năm nhuận không
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Hàm để tạo danh sách các ngày dựa trên tháng và năm được chọn
    function populateDaysme() {
        infoDay = document.getElementById("info_dayme");
        infoDay.innerHTML = "";
        var selectedMonth = document.getElementById("info_monthme").value;
        var selectedYear = document.getElementById("info_yearme").value;
        var daysInMonth;

        if (selectedMonth == 2) {
            daysInMonth = isLeapYear(selectedYear) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(parseInt(selectedMonth))) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        for (var i = 1; i <= daysInMonth; i++) {
            infoDay.innerHTML += `<option value="${i}">${i}</option`;
        }
    }
    // Gọi hàm populateDays khi thay đổi tháng hoặc năm
    document.getElementById("info_monthme").addEventListener("change", populateDaysme);
    document.getElementById("info_yearme").addEventListener("change", populateDaysme);

    // lam combobox ngay thang nam. năm nhuận %4,%100,%400
        //gan nam vao combobox
        infoYear = document.getElementById("info_yearcha");
        for (let i = currentYear; i >=1900; i--) {
            infoYear.innerHTML += `<option value="${i}">${i}</option`;
        }
        //gan thang vao combobox
        infoMonth = document.getElementById("info_monthcha");
        for (let i = 1; i <= 12; i++) {
            infoMonth.innerHTML += `<option value="${i}">${i}</option`;
        }
    //gan ngay vao combobox


    // Hàm để kiểm tra xem một năm có phải là năm nhuận không
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Hàm để tạo danh sách các ngày dựa trên tháng và năm được chọn
    function populateDayscha() {
        infoDay = document.getElementById("info_daycha");
        infoDay.innerHTML = "";
        var selectedMonth = document.getElementById("info_monthcha").value;
        var selectedYear = document.getElementById("info_yearcha").value;
        var daysInMonth;

        if (selectedMonth == 2) {
            daysInMonth = isLeapYear(selectedYear) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(parseInt(selectedMonth))) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        for (var i = 1; i <= daysInMonth; i++) {
            infoDay.innerHTML += `<option value="${i}">${i}</option`;
        }
    }
    // Gọi hàm populateDays khi thay đổi tháng hoặc năm
    document.getElementById("info_monthcha").addEventListener("change", populateDayscha);
    document.getElementById("info_yearcha").addEventListener("change", populateDayscha);
}