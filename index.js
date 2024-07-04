// code your solution here
function superbowlWin(objArr){
    let yearWon = objArr.find(record => record.result === "W")
    if(!yearWon || !yearWon.result){
        return undefined
    
    }
    return yearWon.year
  
}
