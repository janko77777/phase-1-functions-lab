let pickUpLocation = 46

function distanceFromHqInBlocks (pickUpLocation) { 
    return Math.abs(42 - pickUpLocation)
}

function distanceFromHqInFeet (pickUpLocation) {
    return distanceFromHqInBlocks (pickUpLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet (start, destination)
    let fare
    if (distance <= 400) {
      fare = 0
      return fare
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02
      return fare
    } else if (distance > 2000 && distance <=2500) {
      fare = 25
      return fare
    } else return "cannot travel that far"
}
