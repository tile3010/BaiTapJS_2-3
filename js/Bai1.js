/**
 * khoi 1: ngayLuong,soNgayLam
 * khoi 2:
 *   b1: lấy giá trị từ form khi người dùng click button
 *   b2: -  tạo hàm tinhLuong
 *       - dom tới các thẻ cần lấy dữ liệu
 *   b3:  lập công thức
 *        Lương = Lương 1 ngày * số ngày làm
 *   b4: hiển thị UI
 * khoi 3: luong
 */

function tinhLuong() {
    var ngayLuong = Number(document.getElementById("ngayluong").value);
    var soNgayLam = Number(document.getElementById("songaylam").value);
    var luong = ngayLuong * soNgayLam;
   
    document.getElementById("txtResult").innerHTML = "Lương: "+luong.toLocaleString()+" vnđ";
}

document.getElementById("btnTinhLuong").onclick = tinhLuong;