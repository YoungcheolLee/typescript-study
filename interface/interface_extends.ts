interface Parent {
    name: string;
    age ?: number;
}

interface Child extends Parent {
    gender: string;
}

const me:Child = {
    name: "홍길동",
    age: 20,
    gender: "남",
}

console.log(me);