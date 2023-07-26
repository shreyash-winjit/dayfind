function getDateString(date){
    let datearray = date.split('/')
    if(datearray[2].length==2){
        datearray[2] = '20'+datearray[2];
    }
    finalDateString = "";
    for(var i=datearray.length-1;i>=0;i--){
        finalDateString += datearray[i];
        if(i>0) finalDateString+='-';
    }
    const datum = new Date(finalDateString);
    return datum.getDay();
}

function getWeekday(daynum){
    const weekarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekarray[daynum];
}

function weekday(date){
    return getWeekday(getDateString(date));
}

export default weekday