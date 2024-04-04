function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickUpLocation);
}
    function distanceFromHqInFeet(pickUpLocation) {
      const blocks = distanceFromHqInBlocks(pickUpLocation); // assuming
      const feetPerBlock = 264;
      return blocks * feetPerBlock;
    }

    function distanceTravelledInFeet(start, destination) {
        const distance = Math.abs(destination - start);
        const feetPerBlock = 264;
        return distance * feetPerBlock;
    }
    function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);

        if (distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            const fare = (distance - 400) * 0.02;    // Corrected parenthesis position
            return fare;  // Removed extra parenthesis
        } else if (distance > 2000 && distance <= 2500) {   // Corrected missing parenthesis
            return 25;
        } else  {
            return 'cannot travel that far';// Added else block
        }

    }