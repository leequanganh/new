function hienThiThongTin() {
  var maSvValue = document.getElementById('txtMaSV').value;
  var tenSvValue = document.getElementById('txtTenSV').value;
  var loaiSvValue = document.getElementById('loaiSV').value;
  var diemToanValue = document.getElementById('txtDiemToan').value*1;
  var diemVanValue = document.getElementById('txtDiemVan').value*1;

  console.log({
    maSvValue,
    tenSvValue,
    loaiSvValue,
    diemToanValue,
    diemVanValue,
  });
  var sinhVien = {
    maSv: maSvValue,
    tenSv: tenSvValue,
    diemToan: diemToanValue,
    diemVan: diemVanValue,
    loaiSv: loaiSvValue,
    tinhDiemTrungBinh: function(){
        return (this.diemToan + this.diemVan)/2
    }
  };
  document.getElementById('spanTenSV').innerText = sinhVien.tenSv;
  document.getElementById('spanMaSV').innerText = sinhVien.maSv;
  document.getElementById('spanLoaiSV').innerText = sinhVien.loaiSv;
  document.getElementById('spanDTB').innerText= sinhVien.tinhDiemTrungBinh()
}
