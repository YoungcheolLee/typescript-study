// 타입앨리어스 정의
type Person = {
    name: string;
    age ?: number;
}

// person 타입의 빈 객체 person 생성
const person = {} as Person;

// person 객체의 name 프로퍼티에 "홍길동" 이란 값을 넣어줌
person.name = "홍길동";

// person 객체의 프로퍼티 출력
console.log("person.name:", person.name);
console.log("person.age:", person.age);

type Name = "Lee" | "Kim";

const myName = "" as Name;

myName = "asdf";

console.log("myName", myName);