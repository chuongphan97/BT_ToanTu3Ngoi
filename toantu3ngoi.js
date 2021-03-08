
function doMath() {
    let dtb=0;
    dtb = prompt('Nhập điểm');
dtb >=9 ? document.write('Học sinh xuất sắc') :(
    dtb >=8 ? document.write('Học sinh giỏi') : (
        dtb >=7 ? document.write('Học sinh khá') : (
            dtb >= 5 ? document.write('Học sinh trung bình') : document.write('Học sinh yếu')
        )
    )
);
}

