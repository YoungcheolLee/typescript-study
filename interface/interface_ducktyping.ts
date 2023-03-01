// 인터페이스 정의
interface interDuck {
    duck() : void;
}

// interDuck 인터페이스 구현
class MallarDuck implements interDuck {
    duck() {
        console.log("청둥오리!");
    }
}

// interDuck 인터페이스를 구현하지 않았지만,
// interDuck 안의 메소드를 갖고 있음으로
// interDuck 인터페이스를 구현한 것으로 인정한다. --> 덕타이핑(Duck Typing)
class Brid {
    duck(){
        console.log("새!");
    }
}

// funcDuck 함수는 interDuck 을 구현한 파라미터를 전달받는다.
function funcDuck(duck: interDuck):void {
    duck.duck();
}

funcDuck(new MallarDuck());
funcDuck(new Brid());