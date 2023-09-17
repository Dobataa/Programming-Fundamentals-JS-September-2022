function solve(firstSide, secondSide, thirdSide){

    let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
    let a = semiPerimeter - firstSide;
    let b = semiPerimeter - secondSide;
    let c =semiPerimeter - thirdSide;
    let area = Math.sqrt(semiPerimeter * a * b * c);
    console.log(area);
}
solve(2,3.5,4);