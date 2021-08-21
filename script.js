// A1. Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

function allLongestStrings(inputArray) {
    let lengthArr = [];
    for (let i = 0; i < inputArray.length; i++){
        lengthArr.push(inputArray[i].split('').length)
        maxLength = Math.max(...lengthArr);
    }
    let result = inputArray.filter(string => string.split('').length === maxLength)
    console.log(result);
}

allLongestStrings(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']);

// A2. Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.
const calculateSum = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function alternatingSums(inputArray) {
    let team1 = [];
    for (let i = 0; i < inputArray.length; i += 2){
        team1.push(inputArray[i]);
    }
    let team2 = inputArray.filter(element => !team1.includes(element));

    let output = [calculateSum(team1), calculateSum(team2)];
    console.log(team1);
    console.log(team2);
    console.log(output);
}


alternatingSums([60, 40, 55, 75, 64]);


// B Code Challenge

const generateHexNumber = () => Math.floor(Math.random()*16).toString(16);

const generateHexCode = () => `#` + Array.from({length: 6}).map(generateHexNumber).join('');


const changeBackground = (e) => {
    document.body.style.background = 'none';
    document.body.style.backgroundColor = `${generateHexCode()}`;
    document.getElementById('color-code-display').innerHTML = `${generateHexCode()}`
};

const changeGradient = (e) => {
    document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 181)}deg, ${generateHexCode()} 0%, ${generateHexCode()} 100%)`
    document.getElementById('color-code-display').innerHTML = `linear-gradient(${Math.floor(Math.random() * 181)}deg, ${generateHexCode()} 0%, ${generateHexCode()} 100%)`
}

const copyToClipboard = (e) => {
    let textToCopy = document.getElementById('color-code-display').innerHTML;
    navigator.clipboard.writeText(textToCopy);
}