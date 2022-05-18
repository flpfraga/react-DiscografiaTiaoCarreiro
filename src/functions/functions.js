const minForSec = (value) =>{
    const time = value.split(':')
    return (+time[0]*60) + +time[1]
}

const secForMin = (value)=>{
    const minutes = "" + Math.floor(value / 60)
    const seconds = "" + value % 60
    return (seconds.length < 2) ? (minutes + ":" + seconds + "0") : (minutes + ":" + seconds)
}

export {minForSec, secForMin}