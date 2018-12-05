
import {Decorator} from './bind';



let sum=(a)=>{
    console.log(a+this.data) 
}

Decorator("@",sum)