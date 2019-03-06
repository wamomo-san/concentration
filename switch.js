function week(){
    var yobi = new Array();
    
    yobi[0] = "Monday";
    yobi[1] = "Tuesday";
    yobi[2] = "Wednesday";
    yobi[3] = "Thursday";
    yobi[4] = "Friday";
    yobi[5] = "Saturday";
    yobi[6] = "Sunday";
    
    var today = new Date();
    var week = today.getDay();
        
    document.write("今日は" + yobi[week + 1] + "です");
}
