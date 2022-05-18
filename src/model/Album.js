import faixa from "./Faixa"

export default class Album {
    constructor(id=0, name='', year=0){
        
        this.id = id
        this.name = name
        this.year = year
        this._faixa = new faixa();  

    }

    addNewTrack(faixa){
        this._faixa.push(faixa)
    }

    removeTrack(id){
        const faixas = this._faixa.filter(faixa=>{
            return faixa.id !== id
        })
        _faixa = faixas
    }

    set faixa(faixa){
        this._faixa = faixa
    }
}