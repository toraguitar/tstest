import World from "./world";

const root = document.getElementById("root");
const targetElement = document.querySelector('[data-insert-text="target"]');
const world = new World("2022年も頑張りましょう");
world.sayHello(root);
world.openHelloWindow(targetElement);
