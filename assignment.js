
//kilometerToMeter//

var kilometer = 12000;
var meter = kilometer / 1000;
console.log(meter);

function kilometerToMeter (kilometer){
    var meter = kilometer/1000;
    return meter;
}
var racingCompition = kilometerToMeter(18000);
console.log(racingCompition);
var countingLandarea = kilometerToMeter(132000);
console.log(countingLandarea);
var dailyWalk = kilometerToMeter(33500);
console.log(dailyWalk);

//budgetCalculator//
var watchPrice = [50 * 3];
var phonePrice = [100 * 2];
var laptopPrice = [500];
var total = [50 * 3 + 200 * 2 + 500]

function budgetCalculator (total){
    var sum = 0;
    for(var i = 0; i <total.length; i++){
        var element = total[i];
        sum = sum + element;
    }
    return sum;
}
var total = (50 * 3 + 100 * 2 +500);
var result = budgetCalculator(total);
console.log("Total Budget=", total)

//megaFriend//

var friends = ["salam", "kalam", "balam", "rafiquehaque", "jabbar", "anamul", "shaheen"];
var megaFriend = friends[0];
for(var i = 0; i <friends.length; i++){
    var element = friends[i];
    if (element > megaFriend){
        megaFriend = element;
    }
}
console.log("magaFriend is =", megaFriend)
