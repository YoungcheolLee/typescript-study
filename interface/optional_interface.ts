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
}

console.log(userInfo);