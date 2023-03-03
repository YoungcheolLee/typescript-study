// 함수의 원리
// 선언된 공간에 실행문들을 저장.
// 함수를 실행 시키면 {} 안에 있는 문장 (command)들을 실행시킨다.
// 이 때 쓰인 메모리는 {} 가 닫힐 때 종료되면서 삭제됨.

// 클래스의 원리
// {} 내부에 선언되어있는 설계대로 하나의 객체를 이룸.
// 해당 객체는 생성 시 메모리에 저장되어 주소로 진입이 가능하다.
// 객체 생성방법? new와 클래스의 이름 뒤에 () 를 붙여 생성한다.
// =====================================================================================================

// type alias 정의 UnionType
type Skill = "FIRE" | "WIND" | "ARROW" | "ICE" | "ELEC" ;

// GameLife interface 정의
interface GameLife {
    LV: number;
    HP: number;
    MP: number;
}

// Character interface 정의
interface Character extends GameLife {
    username : string;
    skillTree : Array<Skill>;
}

// Monster interface 정의
interface Monster extends GameLife {
    strunGauge : number;
}

// MyClass 정의
class GameObject<T> {
    public data: T[] = []   
}

// MyClass 인스턴스 생성
const instanceMonster = new GameObject<Monster>();
const instanceCharacter = new GameObject<Character>();

// instanceMonster에 데이터 추가
instanceMonster.data.push({LV: 54, HP: 2000, MP:500, strunGauge:100 });

// instanceChracter에 데이터 추가
instanceCharacter.data.push({username:"abc", LV:1, HP:1, MP:1, skillTree:["ARROW", "ELEC", "ICE"]});

// instanceMonster 콘솔 출력
console.log("instanceMonster :", instanceMonster.data.map((item)=> item));

// instanceCharacter 콘솔에 출력
console.log("instanceCharacter :", instanceCharacter.data.map((item)=>item));

// My Function 정의
// => 의 이유
// ES6 이후 this 의 바인드를 생략하는 과정.
// 함수가 존재하는 곳에 bind 될 수 있도록 하는 과정을 코드 생략하고 => 표기.
const MyFunction = (n:number):number => {
    const data = []

    const sum = n + n;
    return sum;
}

// My Function 실행
MyFunction(2);
