
import "./style.css";
import './owfont-regular.css';

/* import { MomentumModel } from "./momentum-model"; */
import {Momentum} from "./momentum";
let main = document.querySelector<HTMLElement>('.momentum')

const momentum = new Momentum(main)

/* window.addEventListener("load", ); */