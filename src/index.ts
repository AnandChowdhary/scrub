import { Typerface } from "./interfaces";
import { random } from "./random";
import "./styles/index.scss";

export default class Typestart implements Typerface {
  value: string;
  constructor(el?: string) {
    this.value = random();
    const valueElement: HTMLElement | null = document.querySelector(
      el || "strong"
    );
    if (valueElement) valueElement.innerHTML = this.value;
    console.log("The random value is", this.value);
  }
}

(<any>window).Typestart = Typestart;
