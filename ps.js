// 1.Reverse a String: Input: 'hello' | Output: 'olleh'. 

let str = "hello";
let newStr = "";
for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr)


// 2.Check Palindrome: Input: 'radar' | Output: True .


let str1 = "radar";
let newStr1 = "";
for (i = str1.length - 1; i >= 0; i--) {
    newStr1 += str1[i];
}
console.log(str1 === newStr1)


// 3.Find Length: Input: 'hello' | Output: 5 .

let string = "hello";
let len = 0;
while(string[len]!==undefined){
    len++;
}
console.log(len)



// 4.Count Vowels and Consonants: Input: 'hello' | Output: Vowels:       2, Consonants: 3 .



let strs = "hello";
let vowels = 0;
let consonants = 0;
for(i=0;i<strs.length;i++){
    if(strs[i]=='a'||strs[i]=='e'||strs[i]=='i'||strs[i]=='o'||strs[i]=='u'){
        vowels++;
    }
   else if(strs[i]!=='a'||strs[i]!=='e'||strs[i]!=='i'||strs[i]!=='o'||strs[i]!=='u'){
       consonants++;
   }
}
console.log(`vowels:${vowels}. cosonants:${consonants}`)




// 5.Change Case: Input: 'Hello' | Output: 'hELLO' .


let strs1 = "Hello";
let newStrs = "";
for(i=0;i<strs1.length;i++){
    let alpha = strs1[i];
    if(alpha === alpha.toUpperCase()){
        newStrs+=alpha.toLowerCase();
    }else{
        newStrs+=alpha.toUpperCase();
    }
}
console.log(newStrs);


// 6.Remove White Spaces: Input: 'hello world' | Output: 'helloworld' 


let char = "hello world";
let newChar = "";
for(i=0;i<char.length;i++){
    if(char[i]!==" "){
        newChar+=char[i];
    }
}
console.log(newChar)




// 7.Concatenate Strings: Input: 'hello', 'world' | Output: 'helloworld'.

let string1 = "hello";
let string2 = "world";
let concated = "";
for(i=0;i<string1.length;i++){
    concated+=string1[i];
}
for(i=0;i<string2.length;i++){
    concated+=string2[i];
}
console.log(concated)



// 8.Compare Two Strings: Input: 'abc', 'abc' | Output: True .

let a = "abc";
let b = "abc";
let isEqual = true;
if(a.length !== b.length){
    isEqual = false;
}else{
    for(i=0;i<a.length;i++){
        if(a.charCodeAt(i) !== b.charCodeAt(i)){
            isEqual = false;
        }
    }
}
console.log(isEqual)






// 9.Repeat a String: Input: 'abc', 3 | Output: 'abcabcabc' .


let inp ="abc";
let repeat = 3;
let newInp="";
for(i=0;i<repeat;i++){
    for(j=0;j<inp.length;j++){
        newInp+=inp[j];
    }
}
console.log(newInp)




// 10. Replace a Character: Input: 'hello', 'l', 'z' | Output: 'hezzo'.

let strd = "hello";
let oldChar = "l";
let newChar1="z";
let new1 ="";
for(i=0;i<strd.length;i++){
    if(strd[i]==oldChar){
        new1+=newChar1;
    }else{
        new1+=strd[i]
    }
}
console.log(new1)







































































