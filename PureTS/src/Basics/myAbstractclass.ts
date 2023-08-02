abstract class TakePhoto{
    constructor(
       public cameraMode:string,
       public filter:string 
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}

// const Hitesh = new TakePhoto("portrait","p") - cannot be instantiated

class Instagram2 extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}

const Hitesh = new Instagram2("portrait","p",3)