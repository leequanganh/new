var SinhVien = function (
  _maSv,
  _tenSv,
  _emailSv,
  _matKhauSv,
  _ngaySinhSv,
  _khoaHocSv,
  _toanSv,
  _lySv,
  _hoaSv,
) {
  this.maSv = _maSv;
  this.tenSv = _tenSv;
  this.email = _emailSv;
  this.matKhau = _matKhauSv;
  this.ngaySinh = _ngaySinhSv;
  this.khoaHoc = _khoaHocSv;
  this.toan = _toanSv;
  this.ly = _lySv;
  this.hoa = _hoaSv;
};
function kiemTraMaSinhVien(sinhVien){
    var newMaSv = sinhVien.maSv
    for(var i = 0; i<sinhVienArr.length; i++){
        var maSvCurrent = sinhVienArr[i].maSv
        if(newMaSv == maSvCurrent){
            return false
        }
    }
    return true
}
var sinhVienArr = [];
function renderTableSinhVien() {
    var noiDung = '';
    for (var i = 0; i < sinhVienArr.length; i++) {
        var SVEl = sinhVienArr[i];
        noiDung += `
        <tr>
        <td>${SVEl.maSv}</td>
        <td>${SVEl.tenSv}</td>
        <td>${SVEl.email}</td>
        <td>${SVEl.ngaySinh}</td>
        <td>${SVEl.khoaHoc}</td>
        </tr>`;
  
    }
  document.getElementById('tbodySinhVien').innerHTML = noiDung;
}

function themSinhVien() {
  var maValue = document.getElementById('txtMaSV').value;
  var tenValue = document.getElementById('txtTenSV').value;
  var emailValue = document.getElementById('txtEmail').value;
  var matKhauValue = document.getElementById('txtPass').value;
  var ngaySinhValue = document.getElementById('txtNgaySinh').value;
  var khoaHocValue = document.getElementById('khSV').value;
  var toanValue = document.getElementById('txtDiemToan').value * 1;
  var lyValue = document.getElementById('txtDiemLy').value * 1;
  var hoaValue = document.getElementById('txtDiemHoa').value * 1;
  var sinhVien = new SinhVien(
    maValue,
    tenValue,
    emailValue,
    matKhauValue,
    ngaySinhValue,
    khoaHocValue,
    toanValue,
    lyValue,
    hoaValue,
  );
  var checkMaSV = kiemTraMaSinhVien(sinhVien)
  
  checkMaSV && sinhVienArr.push(sinhVien);
  renderTableSinhVien();
}
