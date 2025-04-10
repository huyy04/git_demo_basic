
let startDay = parseInt(prompt("nhap thong tin ngay bat dau"));
let endDay = parseInt(prompt("nhap thong tin ngay ket thuc"));

let saveDays = "";

for (startDay ; startDay <= endDay ; startDay++) {
    if (startDay > endDay) {
        break;
    }
    // luu lai cac ngay thoa man
    saveDays = saveDays + ' , ' + startDay;

}
console.log(saveDays);
console.log('hello world');