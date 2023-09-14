
export class ScrolingItem {
    private index!: number 
    setFunc: (value: React.SetStateAction<number>) => void;
    interval!:  NodeJS.Timer;

    constructor(itemID: number,setFunc:(value: React.SetStateAction<number>) => void) {
        itemID = itemID;
        this.index = 0
        this.setFunc = setFunc;
    }

    onStart (setFunc = this.setFunc) {
        this.interval = setInterval(() => {
            this.index++
            if(this.index < 3) {
                setFunc(this.index)   
            }else {
                this.index = 0
                setFunc(0)
            } 
        }, 7000)
    }

    onStop() {
        clearInterval(this.interval)
    }
}

