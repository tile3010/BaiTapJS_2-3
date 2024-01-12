/**
 * khối 1: so
 * khối 2: các bước xử lí 
 * b1: lấy giá trị từ form khi người dùng click button
 *     + tạo hàm tingTong
 * b2: Trong hàm tingTong()
 *     + Dom tới các thẻ cần lấy dữ liệu của form
 *     + lấy giá trị của thuộc tính value
 * b3: lập công thức tính
 *     soHangDonVi = so % 10;
 *     soHangChuc = so / 10;
 *     tong = soHangDonVi * soHangChuc 
 * b4: hiển thị UI
 * khối 3: output
 * tong
 */

function tingTong ( ){
    var so = Number(document.getElementById("so").value);
    var soHangDonVi = so % 10;
    var soHangChuc = Math.floor(so / 10);;
    var tong = soHangDonVi+soHangChuc;
    
    document.getElementById("txtResult").innerHTML = "Tổng: "+tong;
}
document.getElementById("btnTong2so").onclick = tingTong;