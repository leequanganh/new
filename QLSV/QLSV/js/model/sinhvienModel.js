var SinhVien = function (_maSv, _tenSv, _emailSv, _matKhauSv, _ngaySinhSv, _khoaHocSv, _toanSv, _lySv, _hoaSv,) {
  this.ma = _maSv;
  this.ten = _tenSv;
  this.email = _emailSv;
  this.matKhau = _matKhauSv;
  this.ngaySinh = _ngaySinhSv;
  this.khoaHoc = _khoaHocSv;
  this.toan = _toanSv;
  this.ly = _lySv;
  this.hoa = _hoaSv;
  this.tinhDTB = function () {
    return (this.toan + this.ly + this.hoa) / 3
  }
}