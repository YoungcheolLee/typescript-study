// Params 인터페이스 정의
interface Params {
    name:string;
    age:number;
}

// 변수 params의 타입으로 Params 인터페이스 정의
let params:Params = {name:"홍길동", age:20};
console.log(params);