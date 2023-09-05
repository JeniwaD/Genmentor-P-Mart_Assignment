//ทุกข้อต้องเรียงลำดับ array จากน้อยไปมากก่อน
const jayNum = [2, 1, 4, 3, 10, 5, 20];
jayNum.sort((a, b) => {
if (a > b) {
return 1;
}else if (a < b) { 
return -1;
}else{
    return 0;
}});

console.log(jayNum);


//หาผลรวมของตัวเลขทั้งหมดใน array
const sumOfJaynum = jayNum.reduce((a, b)=> {
    return a + b;
});

console.log(sumOfJaynum);


//หาค่าเฉลี่ยของตัวเลขทั้งหมดใน array
const averageOfJaynum = Math.floor(jayNum.reduce((a, b) => 
a + b, 0)/jayNum.length);

console.log(averageOfJaynum);

//หาค่าที่อยู่ตรงกลางของ array
function medianOfJaynum(myArr) {
    myArr.sort((a, b) => a - b);

    const myLength = myArr.length;
    if (myLength % 2 === 1) {
        return myArr[Math.floor(myLength / 2)];
    }else{
        const midNum1 = myArr[myLength / 2 - 1];
        const midNum2 = myArr[myLength / 2];
        return (midNum1 + midNum2) / 2;
    }
}

console.log(medianOfJaynum(jayNum));