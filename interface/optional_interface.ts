interface UserInfo {
    email: string;
    age?: number;
    id: string;
    password: number;
}

const userInfo: UserInfo = {
    email: "testEmail@gmail.com",
    id: "testId",
    password: 1234,
    // age는 생략되어도 된다.
}

console.log(userInfo);