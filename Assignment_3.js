//เขียนโปรแกรมที่ทำให้arrayตัวเลขเรียงกลับหลังไปหน้า แบบไม่ใช้ .reverse()
const jayArray = [5, 6, 7, 8, 9];
const reverseJayArray = [];
for (let i = jayArray.length - 1; i >=0; i--) {
    const valueJayArray = jayArray[i];
    reverseJayArray.push(valueJayArray);
}

console.log(reverseJayArray);


//เขียนโปรแกรมที่ทำให้ข้อความใน '' เรียงกลับหลัง เช่น 'hello' เป็น 'olleh' 
const jayWords = 'Sakurunbo';
let reverseJayWords = '';
for (let i = jayWords.length - 1; i >= 0; i--) {
    reverseJayWords += jayWords[i];
} 

console.log(reverseJayWords);


/*กำหนดคำมา2คำ เขียนโปรแกรมเช็คคำว่าเป็น Anagram ไหม  
Anagram คือ ถ้าสองคำที่ต่างกันนี้มีตัวสะกดเหมือนกันทั้งหมด สองคำนี้คือAnagramของกันและกัน
เช่น listen, silent*/ 
function findingAnagram(vocab1, vocab2) {
    if (vocab1.length !== vocab2.length) {
      return false;
    }
    const checkAlphabet = {};
    for (let i = 0; i < vocab1.length; i++) {
      const alphabet = vocab1[i];
    
      if (!checkAlphabet[alphabet]) {
        checkAlphabet[alphabet] = 0;
      }
      checkAlphabet[alphabet] += 1;
    }
    for (let i = 0; i < vocab2.length; i++) {
      const alphabet = vocab2[i];
      
      if (!checkAlphabet[alphabet]) {
        return false;
      }
      checkAlphabet[alphabet] -= 1;
    }
    return true;
  }
  
  console.log(findingAnagram('pppp', 'pppa'));


/*เขียนโปรแกรมเช็คว่าคำที่กำหนดเป็น Palindrome ไหม ตอบเป็น true/false 
Palindrome คือ คำที่ไม่ว่าจะเขียนสลับด้าน คำนี้ก็ยังเป็นคำเดิม 
เช่น racecar เขียนสลับด้านก็ยังได้คำว่า racecar เหมือนเดิม*/
function isPalindrome(word) {
    word = word.toLowerCase();

 for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        return false;
    } else {
        return true;
    }
  }       
};

const checkWord = 'deified';
const palindromeCheck = isPalindrome(checkWord);
console.log(palindromeCheck);
