let dist;
function distanceFromHqInBlocks(pickUpLocation){
    const scuberHQ = 42;
    if (scuberHQ >= pickUpLocation){
        dist = scuberHQ - pickUpLocation;
        return dist;
    }
    else if (pickUpLocation > scuberHQ){
        dist = pickUpLocation - scuberHQ;
        return dist;
    }   
}

function distanceFromHqInFeet(pickUpLocation){
    const singleBlockInFeet = 264;
    let newDist = distanceFromHqInBlocks(pickUpLocation);
    return newDist*singleBlockInFeet;
    
}

function distanceTravelledInFeet(start,destination){
    const singleBlockInFeet = 264;
    if (start > destination){
        dist = (start-destination)*singleBlockInFeet;
        return dist;
    }
    else dist = (destination-start)*singleBlockInFeet;
    return dist;   
}

function calculatesFarePrice(start, destination){
    dist = distanceTravelledInFeet(start,destination);
    if (dist <= 400){
        return(0);
    }
    else if(dist <=2000){
        return((dist-400)*0.02);
    }
    else if (dist <= 2500){
        return(25);
    }
    else return("cannot travel that far");

}