import { background } from "./components/background";
import { countdown } from "./components/countdown";

const d = document

d.addEventListener('DOMContentLoaded',(e)=>{
    background();
    countdown("countdown", "2023-12-17T15:03:09.884Z", "Se ha acabado el tiempo");
})