// 인터페이스 정의
interface myInfo {
    name: string;
    age: number;
}

class infomation implements myInfo {
    constructor (
        public name: string,
        public age: number
    ) {}
}

const info = new infomation("홍길동", 20);
console.log(info);