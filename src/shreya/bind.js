
let isFunction =(functionToCheck) =>{
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}



export class Decorator{
    constructor(name,nextClassorFunction){
        this._name=name;
        this._nextClassorFunction=nextClassorFunction;
        this._temp=5;
        this.availableData=5;
    }
    available=(data,nextCall)=>{
        return nextCall.bind(data)
    }
    init=()=>{
        if(isFunction(this._nextClassorFunction)){
            this.available(this.availableData,this._nextClassorFunction);
        }
    }
}

