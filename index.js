var rs = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold("Welcome to The Game!!!\n"));

// input
var playerName = rs.question("HEy Whats ur Name : ");

//output
console.log(chalk.yellow(`Welcome ${playerName}\n`));



var score = 0;

function gamePlay(questions, correctAnswer) {

    var answer = rs.question(chalk.cyanBright(questions));
    if (answer == correctAnswer) {
        console.log(chalk.green('\tcorrect'));
        score = score + 1;
    } else {
        console.log(chalk.red('\twrong'));
        console.log(chalk.greenBright("Correct Answer is: " + correctAnswer));

    }
    console.log(chalk.yellowBright('Your score is  :' + score));
    console.log(chalk.blue('\n----------------\n'));

}

var firstQus = {
    qus: "What is my name : ",
    ans: "mimansha"
};
var secondQus = {
    qus: "are you reading this : ",
    ans: "yes"
};
var thirdQus = {
    qus: "which year covid widely spread : ",
    ans: "2020"
};

qusArray = [firstQus, secondQus, thirdQus];

for (let i = 0; i < qusArray.length; i++) {
    gamePlay(qusArray[i].qus, qusArray[i].ans);

}
console.log('Final score is  :' + score);

//array of highscore
highScore = [{
        username: "Naruto",
        point: 2
    },
    {
        username: "MEE6",
        point: 1
    },
    {
        username: "random",
        point: 0
    }
];

//displaying highscore
console.log(chalk.bgYellow(" High Score "));

console.table(highScore);

// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
    if (highScore[i].point > max) {
        max = highScore[i].point;
    }
}

//checking if user beat the hihg score
if (score > max) {
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
} else {
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));

}