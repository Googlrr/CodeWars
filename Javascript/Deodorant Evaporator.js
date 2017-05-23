function evaporator(content, evap_per_day, threshold){ 
    let current = content; 
    threshold = threshold/100;
    evap_per_day = evap_per_day/100;
    
    let days = 0;
    console.log((content * (threshold)));
    while(current > (content * (threshold))){
        console.log(current);
        current = current - (current * evap_per_day);
        console.log(current);
        days++;
    }
    return days;
}


console.log(evaporator(10,10,10));