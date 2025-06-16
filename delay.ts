function  getRandomValue(array : any){
    const randomElement = array[Math.floor(Math.random()* array.length)]
    return randomElement
}



function doSomeHeavytask(){
    const ms = getRandomValue([100,200,340,500,600,3000 , 5500])
    const shouldThrowError = getRandomValue([1,2,3,4,5,6 , 7])  == 7
    if(shouldThrowError){
        const randomError = getRandomValue([
            "Db hunged",
            "DB connection lost",
            "Access denied "
        ])
        throw new Error(randomError)
    }
    return new Promise((reslove , reject)=> setTimeout(()=> reslove(ms), ms))
}

export default doSomeHeavytask