export default class Faixa{
    constructor(id=0, number=0, title='', duration=0){
        this.id=id
        this._number=number
        this._title=title
        this._duration=duration
    }

    set number(number){
        this._number = number   
    }

    set title(title){
        this._title = title
    }

    set duration (duration){
        this._duration = duration
    }
}