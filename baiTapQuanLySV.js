var SinhVien = function (
  _ma,
  _ten,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _toan,
  _ly,
  _hoa
) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.toan = _toan;
  this.ly = _ly;
  this.hoa = _hoa;
};

var dssv = [];

function kiemTraMaSv(newSV, arrSV) {
  var maNewSV = newSV.ma;
  for (var index = 0; index < arrSV.length; index++) {
    var currentSV = arrSV[index];
    if (currentSV.ma == maNewSV) {
      return false;
    }
  }

  return true;
}

function renderTableSV(dssv) {
  var contentHML = '';

  for (let index = 0; index < dssv.length; index++) {
    const sv = dssv[index];
    contentHML += `
          <tr>
              <td>${sv.ma}</td>
              <td>${sv.ten}</td>
              <td>${sv.email}</td>
              <td>${sv.ngaySinh}</td>
              <td>${sv.khoaHoc}</td>
              <td></td>
          </tr>
          `;
  }

  document.getElementById('tbodySinhVien').innerHTML = contentHML;
}

function themSV() {
  var maSvValue = document.getElementById('txtMaSV').value;
  var tenSvValue = document.getElementById('txtTenSV').value;
  var emailSvValue = document.getElementById('txtEmail').value;
  var matKhauSvValue = document.getElementById('txtPass').value;
  var ngaySinhSvValue = document.getElementById('txtNgaySinh').value;
  var khoaHocSvValue = document.getElementById('khSV').value;
  var diemToanValue = document.getElementById('txtDiemToan').value;
  var diemHoaValue = document.getElementById('txtDiemLy').value;
  var diemDiemLyValue = document.getElementById('txtDiemHoa').value;

  var sinhVien = new SinhVien(
    maSvValue,
    tenSvValue,
    emailSvValue,
    matKhauSvValue,
    ngaySinhSvValue,
    khoaHocSvValue,
    diemToanValue,
    diemDiemLyValue,
    diemHoaValue
  );
  let checkMaSV = kiemTraMaSv(sinhVien, dssv);
  //   if (checkMaSV) {
  //     dssv.push(sinhVien);
  //   }

  checkMaSV && dssv.push(sinhVien);
  renderTableSV(dssv);
}
