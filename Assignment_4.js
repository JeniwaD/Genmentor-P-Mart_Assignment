/* 
เขียนโปรแกรมหาตัวเลขที่หายไปใน array ที่มีจำนวนตัวเลข N ตัว นับจาก 1 ถึง N 
และมีตัวเลขหายไป K ตัว
โปรแกรมจะแจ้งตัวเลขที่หายไป เรียงลำดับจากน้อยไปมาก

ตัวอย่างที่ 1:
Input: [1,2,3,3] length = 4 Missing Number is 4
Output: [4]

ตัวอย่างที่ 2:
Input: [3,3,1,3] length = 4 Missing Number is 2,4
Output: [2,4]
*/
function theMissingNum(myArr, length) {
    const missingNum = [];

for (let i = 1; i <= length; i++) {
    let found = false;

    for (let j = 0; j < myArr.length; j++) {
        if(myArr[j] === i) {
            found = true;
            break;
        }
    }

    if (!found) {
        missingNum.push(i);
    }
}

return missingNum;
}

const num1 = [1, 2, 3, 3];
const num1Length = 5;
const num1Missing = theMissingNum(num1, num1Length);
console.log(num1Missing);



/*กำหนดให้มี array 2ตัว เขียนโปรแกรมเช็คว่าarrayทั้ง2ตัวมีสมาชิกซ้ำกันไหม 
ถ้ามีให้ออกค่า true ไม่มีให้ออกค่า false*/

function findDuplicate(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {

        for(let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }

    return false;
}

const array1 = [2,5,4,3];
const array2 = [2,6,7,8];
const isDuplicate = findDuplicate(array1, array2);
console.log(isDuplicate);


/*กำหนดให้มี array 2ตัว เขียนโปรแกรมหาจุดตัดร่วมของarrayทั้ง2ตัว คืนค่าจุดตัด
จุดตัดคือ ชุดข้อมูลที่ใช้ร่วมกัน เช่น 
[1,2,3,4,5] และ [3,4,5,6,7] จุดตัดกันคือ [3,4,5]*/
function findIntersection (word1, word2) {
    const intersection = [];

 for (let i = 0; i < word1.length; i++) {

    for (let j = 0; j < word2.length; j++) {

        if (word1[i] === word2[j]) {

            if(!intersection.includes(word1[i])) {
                intersection.push(word1[i]);
            }
            break;
        }
    }
 }

 return intersection;
}

const word1 = [1, 2, 3, 4, 5];
const word2 = [3, 4, 5, 6, 7];
const isIntersection = findIntersection(word1, word2);
console.log(isIntersection);