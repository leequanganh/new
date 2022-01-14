var dssv = []
var LOCALSTORAGE_DSSV = 'dssvLocalStorage'
// b1: tạo object sv/ lop doi tiong sv 

//b3: tạo bảng sv 
function renderTableSV(dssv) {
    var contentHTML = ''
    for (var i = 0; i < dssv.length; i++) {
        var sv = dssv[i]
        contentHTML +=
            `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>${sv.ngaySinh}</td>
        <td>${sv.khoaHoc}</td>
        <td>${sv.tinhDTB()}</td>
        <td>
        <button class="btn btn-success" onclick="suaSV('${sv.ma}')">Sửa</button>
        <button class="btn btn-danger" onclick="xoaSV('${sv.ma}')">xoa</button>
        </td>
        </tr>`
    }
    document.getElementById('tbodySinhVien').innerHTML = contentHTML
}
//b4: kiem tra ma Sv truoc khi in ra 
function kiemTramaSv(dssv, newsv) {
    var maNewSV = newsv.ma
    for (var i = 0; i < dssv.length; i++) {
        var maCurrentSV = dssv[i].ma
        if (maNewSV === maCurrentSV) {
            return false
        }
    }
    return true
}
function layThongTinSv() {
    var maSvValue = document.getElementById('txtMaSV').value
    var tenSvValue = document.getElementById('txtTenSV').value
    var emailSvValue = document.getElementById('txtEmail').value
    var matKhauSvValue = document.getElementById('txtPass').value
    var ngaySinhSvValue = document.getElementById('txtNgaySinh').value
    var khoaHocSvValue = document.getElementById('khSV').value
    var diemToanValue = document.getElementById('txtDiemToan').value * 1
    var diemLyValue = document.getElementById('txtDiemLy').value * 1
    var diemHoaValue = document.getElementById('txtDiemHoa').value * 1

    var sinhVien = new SinhVien(maSvValue, tenSvValue, emailSvValue, matKhauSvValue, ngaySinhSvValue, khoaHocSvValue, diemToanValue, diemLyValue, diemHoaValue)
    return sinhVien
}
function luuLocalStorage(dssv){
    var dssvJson = JSON.stringify(dssv) //chuyển kiểu dữ liệu sang Json trước khi lưu xuống local storage
        localStorage.setItem(LOCALSTORAGE_DSSV, dssvJson) // lưu xuống local storage 
}
//b2: them sv moi vao object
function themSinhVien() {
    // var maSvValue = document.getElementById('txtMaSV').value
    // var tenSvValue = document.getElementById('txtTenSV').value
    // var emailSvValue = document.getElementById('txtEmail').value
    // var matKhauSvValue = document.getElementById('txtPass').value
    // var ngaySinhSvValue = document.getElementById('txtNgaySinh').value
    // var khoaHocSvValue = document.getElementById('khSV').value
    // var diemToanValue = document.getElementById('txtDiemToan').value * 1
    // var diemLyValue = document.getElementById('txtDiemLy').value * 1
    // var diemHoaValue = document.getElementById('txtDiemHoa').value * 1

    // var sinhVien = new SinhVien(maSvValue, tenSvValue, emailSvValue, matKhauSvValue, ngaySinhSvValue, khoaHocSvValue, diemToanValue, diemLyValue, diemHoaValue)
    var sinhVien = layThongTinSv()

    var checkMaSV = kiemTramaSv(dssv, sinhVien)
    if (checkMaSV) {
        dssv.push(sinhVien)

        // var dssvJson = JSON.stringify(dssv) //chuyển kiểu dữ liệu sang Json trước khi lưu xuống local storage
        // localStorage.setItem(LOCALSTORAGE_DSSV, dssvJson) // lưu xuống local storage 
        luuLocalStorage(dssv)

    }
    renderTableSV(dssv)
}
function timViTri(maSV, arr) {
    var viTri = -1
    for (var i = 0; i < arr.length; i++) {
        const sv = arr[i]
        if (sv.ma.toString() === maSV.toString()) {
            viTri = i
            return viTri
        }
    }
}


function suaSV(maSV) {
    // var viTri = -1 
    // for ( var i = 0 ; i<dssv.length; i++){
    //     const sv = dssv[i]
    //     if(sv.ma = maSV){
    //         viTri = i
    //     }
    // }
    var viTri = timViTri(maSV, dssv)
    if (viTri !== -1) {
        var currentSV = dssv[viTri];
        document.getElementById('txtMaSV').value = currentSV.ma
        document.getElementById('txtMaSV').disabled = true /// khoong cho sua ma sv 
        document.getElementById('txtTenSV').value = currentSV.ten
        document.getElementById('txtEmail').value = currentSV.email
        document.getElementById('txtPass').value = currentSV.matKhau
        document.getElementById('txtNgaySinh').value = currentSV.ngaySinh
        document.getElementById('khSV').value = currentSV.khoaHoc
        document.getElementById('txtDiemToan').value = currentSV.toan
        document.getElementById('txtDiemLy').value = currentSV.ly
        document.getElementById('txtDiemHoa').value = currentSV.hoa
    }
}
function xoaSV(maSV){
    var viTri = timViTri(maSV,dssv )
    if(viTri !== -1 ){
        dssv.splice(viTri,1)

        console.log(dssv);
    }
    renderTableSV(dssv)
    luuLocalStorage(dssv)
}

function capNhatSv() {
    var sinhVien = layThongTinSv()
    var viTri = timViTri(sinhVien.ma, dssv)
    console.log(viTri);
    if (viTri !== -1) {
        dssv[viTri] = sinhVien

        renderTableSV(dssv)
        // var dssvJson = JSON.stringify(dssv) //chuyển kiểu dữ liệu sang Json trước khi lưu xuống local storage
        // localStorage.setItem(LOCALSTORAGE_DSSV, dssvJson) // lưu xuống local storage 
        luuLocalStorage(dssv)
    }
}
var dssvJson = localStorage.getItem(LOCALSTORAGE_DSSV); // lấy dưới local storage lên 
var newDssv = JSON.parse(dssvJson) // chuyển từ json sang array (vẫn chưa có function tính điểm tb)
// // hỏi khúc này
if (newDssv !== null) {
    var dssv = newDssv.map(function (item) {
        return new SinhVien(item.ma, item.ten, item.email, item.matKhau, item.ngaySinh, item.khoaHoc, item.toan, item.ly, item.hoa)
    })
    renderTableSV(dssv)

}
