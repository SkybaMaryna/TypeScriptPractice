
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

function getPromise () {
  return new Promise<Array<string | number>>((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight' >): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

function merge <T extends object, U  extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

class Component<T> {
  constructor (public props:T) {

  }
}

interface IProps {
  title: string
}

class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}