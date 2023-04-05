/*function moneyBox (coins) {
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox ${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
moneyBox(5);*/

function moneyBox () {
    let saveCoins = 0;

    function saveMoney(coins) {
        saveCoins += coins;
        console.log(`Ahora tienes $${saveCoins}`);
    }

    return saveMoney;
}

const myMoneyBox = moneyBox();
hotDogConTocino(5);
hotDogConTocino(15);

console.log("--------")

const impuestosRobados = moneyBox();
impuestosRobados(10);

