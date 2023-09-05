const jayArray = [1, 2, 3, 4, 5, 6, 7, 9.5];
let theLargest = 0;

//หาสมาชิกที่มีค่ามากที่สุด เป็นจำนวนเต็มบวก
const largestNum = () => {
    for (let i = 0; i < jayArray.length; i++) {
        if (jayArray[i] > theLargest) {
        theLargest = jayArray[i];
        }
    } 
  console.log('The lastgest number is ' + Math.floor(theLargest));
}

largestNum(jayArray);



//หาสมาชิกที่มีค่ามากที่สุดเป็นอันดับที่2
function findSecondLargeNum(jayArray) {
    let firstLarge = -1, secondLarge = -1;

    for(let i = 0; i <= jayArray.length-1; i++) {
        if (jayArray[i] > firstLarge) {
            secondLarge = firstLarge;
            firstLarge = jayArray[i];
        }else if (jayArray[i] > secondLarge && jayArray[i] !== firstLarge) {
            secondLarge = jayArray[i];
        }
    }
    console.log('The second large is ' + secondLarge);
}

findSecondLargeNum(jayArray);



//หาตัวเลขในจำนวน1-100ที่ลงท้ายด้วย5และหารด้วย3ลงตัว
const thatArray = [];
for(let i = 1; i <= 100; i++) {
    if (i % 10 === 5 && i % 3 === 0) {
        thatArray.push(i);
    }
}
console.log(thatArray);



//ตรวจสอบว่า array เรียงลำดับจากน้อยไปมากหรือไม่ ถ้าไม่ให้ออกค่า false 
function findSortedArray(myNum) {
for (let i = 1; i < myNum.length; i++) {
    if (myNum[i] < myNum[i - 1]) {
        return false;
    }else{
        return true;
    }
}
}

const number1 = [8, 9, 10, 11, 12, 13, 14, 15];
console.log(findSortedArray(number1));

const number2 = [4,2,45,32,23,55,9,8];
console.log(findSortedArray(number2));
