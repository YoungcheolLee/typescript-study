// myNumber 인터페이스 정의
interface AddNumber {
    (num1:number, num2: number): number;
}


const addNumbers:AddNumber = function (num1:number, num2:number) {
    return num1 + num2;
}