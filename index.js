let printNumber = () => {
    let contentHTML = ``
    for (let j = 0; j < 100; j += 10) {
        contentHTML += '</br>'
        for (let i = 1; i <= 10; i++) {
            contentHTML += i + j + ', '
        }
    }
    document.getElementById('cau1').innerHTML = contentHTML
}

printNumber()

let printFromN = () => {
    let valueN = document.getElementById('nNumber').value
    let sumFromN = 0
    for (let i = 2; i <= valueN; i++) {
        sumFromN += i
    }
    let result = sumFromN * 2 * valueN

    document.getElementById('result3').innerHTML = `Kết quả là: ${result}`
}

let findNumber = () => {
    let valueN = document.getElementById('n4Number').value
    let contentHTML = ``
    for (let i = 0; i <= valueN; i++) {
        let valueCalculate = valueN % i
        if (valueCalculate == 0) {
            contentHTML += i + ', '
        }
    }
    document.getElementById('result4').innerHTML = `Kết quả là: ${contentHTML}`
}

let reverseStringNumber = () => {
    let valueN = document.getElementById('n5Number').value
    let arraySplitNumber = valueN.split('')
    let arrayReverse = arraySplitNumber.reverse()
    let result = arrayReverse.join('')
    document.getElementById('result5').innerHTML = `Kết quả là: ${result}`
}

let findX = () => {
    let value = 0
    let flag = 0
    for (let i = 1; i <= 100; i++) {
        if (value <= 100) {
            value += i;
            flag = i
        }
    }
    document.getElementById('result6').innerHTML = `Số nguyên dương lớn nhất là: ${flag}`
}

findX()

let multiplicationTable = () => {
    let valueN = document.getElementById('n7Number').value
    let contentHTML = ``
    for (let i = 1; i <=10; i++) {
        contentHTML += `${valueN} X ${i} = ${valueN * i} </br>`
    }
    document.getElementById('result7').innerHTML = ` 
    Bảng cửu chương ${valueN} là: </br>
    ${contentHTML}`
}

let distributeCards = () => {
    let players = [ [], [], [], [] ]
    let cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", 
    "AS", "7H", "9K", "10D"]

    const numberEleSmallArray = 4;

    for (let i = 0; i < cards.length; i+=4) {
        let smallArray = cards.slice(i, i + numberEleSmallArray)
        for (let j = 0; j < smallArray.length; j++) {
            players[j].push(smallArray[j])
        }
    }
    console.log(players)
}

distributeCards()

let findDogAndChicken = () => {
    let sumDogAndChicken = document.getElementById('sumDogChicken').value
    let sumLeg = document.getElementById('sumLeg').value
    // gọi x là chó, y là gà
    //x + y = sumDogAndChicken => x = sumDogAndChicken - y 
    //4x + 2y = sumLeg => 4sumDogAndChicken - 4y + 2y = sumLeg 
    // let valueChicken = (sumLeg - (4*sumDogAndChicken) / (-2))
    // let valueDog = sumDogAndChicken - valueChicken
    // console.log(valueDog, valueChicken)
    let contentHTML = ``
    for (let ga = 1; ga <=35; ga++) {
        for (let cho = 1; cho <=35; cho++) {
            if (ga*2 + cho*4 == sumLeg && ga + cho == sumDogAndChicken) {
                contentHTML += `Số gà là: ${ga} và số chó là: ${cho}`
            }
        }
    }
    document.getElementById('result9').innerHTML = contentHTML
}
