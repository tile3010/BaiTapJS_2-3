/**
 * khoi 1: chieuDai,chieuRong
 * khoi 2:
 *   b1: lấy giá trị từ form khi người dùng click button
 *   b2: -  tạo hàm tinhdientichChuvi
 *       - dom tới các thẻ cần lấy dữ liệu
 *   b3:  lập công thức
 *        dienTich = chieuDai * chieuRong
 *        chuVi = (chieuDai + chieuRong) * 2
 *   b4: hiển thị UI
 * khoi 3: dienTich,chuVi
 */
function tinhdientichChuvi() {
    var chieuDai= Number(document.getElementById("chieudai").value);
    var chieuRong= Number(document.getElementById("chieurong").value);
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai+chieuRong)*2;

   document.getElementById("txtResult").innerHTML = "Diện tích: "+dienTich+"<br>Chu vi: "+chuVi;
}
document.getElementById("btnHinhChuNhat").onclick = tinhdientichChuvi;