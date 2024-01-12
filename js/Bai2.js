/**
 * khoi 1: soThu1,soThu2,soThu3,soThu4,soThu5
 * khoi 2:
 *   b1: lấy giá trị từ form khi người dùng click button
 *   b2: -  tạo hàm tinhTrungBinh
 *       - dom tới các thẻ cần lấy dữ liệu
 *   b3:  lập công thức
 *        trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) /5
 *   b4: hiển thị UI
 * khoi 3: trungBinh
 */

function tinhTrungBinh() {
    var soThu1 = Number(document.getElementById("sothu1").value);
    var soThu2 = Number(document.getElementById("sothu2").value);
    var soThu3 = Number(document.getElementById("sothu3").value);
    var soThu4 = Number(document.getElementById("sothu4").value);
    var soThu5 = Number(document.getElementById("sothu5").value);
    var trungBinh = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
  
    document.getElementById("txtResult").innerHTML = "Trung bình: "+trungBinh;
}

document.getElementById("btnTinhTrungBinh").onclick = tinhTrungBinh;