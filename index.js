// function razzle(lawyer = "Billy", target='em') {
//     console.log(`${lawyer} razzle-dazzle ${target}`)
// }

// razzle("Mariah", "Progressive")

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

// saturdayFun()

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(a = '*') {
    return function(prompt = 'special') {
        return `You are ${a}${prompt}${a}!`

    }

}

const Calculator = {
    add(a,b) {
        return a + b

    }, 
    
    subtract(a,b) {
        return a-b
        
    },

    multiply(a,b) {
        return a * b

    },

    divide(a,b) {
        return a / b

    }





}

function actionApplyer(start, array) {
    let s = start

    for (let i = 0; array.length; i++){
        s = array[i](s)
    }

    return s 

}