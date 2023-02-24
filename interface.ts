// Params 인터페이스 생성
interface Params {
    name: string;
    age: number;
}

// funcParam 변수를 myVariable의 배열로 선언하고 빈 배열을 초기값으로 할당
let funcParam: Params[] = [{name:"고길동", age:30}];

// 1. myFunc 함수를 생성 
// 2. 함수 파라미터의 타입을 Params로 선언
// 3. funcParam 변수에 함수의 파라미터값을 할당
function myFunc(param: Params) {
    return funcParam = [...funcParam, param];
}

// name:홍길동, age:20 의 값을 할당한 후 myFUnc 함수 실행
myFunc({name:"홍길동", age:20});
console.log(funcParam);