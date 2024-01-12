/**
 * khoi 1: soTien
 * khoi 2:
 *   b1: lấy giá trị từ form khi người dùng click button
 *   b2: -  tạo hàm quyDoiTien
 *       - dom tới các thẻ cần lấy dữ liệu
 *   b3:  lập công thức
 *        giaTienQuyDoi = soTien * 23.500
 *   b4: hiển thị UI
 * khoi 3: giaTienQuyDoi
 */

function quyDoiTien() {
    var soTien = Number(document.getElementById("sotien").value);
    var giaTienQuyDoi = soTien * 23.500;

    document.getElementById("txtResult").innerHTML = "Số tiền sau khi quy đổi: "+Intl.NumberFormat('vn-VN').format(giaTienQuyDoi);
}
document.getElementById("btnDoiTien").onclick = quyDoiTien;