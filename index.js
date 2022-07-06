function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue){
    return Math.abs(264*(distanceFromHqInBlocks(someValue)))
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(264*(start - destination))
}

// function calculatesFarePrice (start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
  
//     if (distance <= 400) {
//       return 0;
//     } else if (distance > 400 && distance <= 2000) {
//       return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500) {
//       return 25;
//     } else {
//       return 'cannot travel that far';
//     }
//   }

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance-400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else { return 'cannot travel that far';}
}


// function calculatesFarePrice(start, destination) {
//     let farePrice
//     let distForCalc = (Math.abs(264*(start - destination)));
//     if (distForCalc >= 400) {
//         farePrice = 0
//     }       else if (distForCalc <=401) and (distForCalc >=2000 );{
//             returnfarePrice = (.02*(distForCalc-400));
        
//     }       else if (distForCalc <=2001) and (distForCalc >=2500 );{
//             farePrice = 25;
//         }       else {return "cannot travel that far";
//     }    




