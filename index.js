function distanceFromHqInBlocks(distanceInBlocks) {
  if (distanceInBlocks >= 42) {
    return distanceInBlocks - 42;
  } else {
    return (distanceInBlocks - 42) * -1;
  }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distanceInFeet) {
  return distanceFromHqInBlocks(distanceInFeet) * 264;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, end) {
  if (end - start < 0) {
    return (end - start) * 264 * -1;
  } else {
    return (end - start) * 264;
  }
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return `cannot travel that far`;
  }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
