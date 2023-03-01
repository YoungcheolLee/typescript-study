// AddNumber 인터페이스 정의
interface AddNumber {
    (num1: number, num2: number): number;
}

// 1. addNumbers 변수를 AddNumber타입으로 선언
// 2. addNumbers 변수에 AddNumber타입을 준수한 함수를 할당
const addNumbers: AddNumber = function (num1: number, num2: number) {
    return num1 + num2;
}

console.log(addNumbers(7, 7));