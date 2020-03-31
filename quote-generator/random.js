var points = [" It's not your falut to be born in a poor familly, but your falut if you are living in poverty",
    " We dont have perfect people on earth, we only have productive men, who did perfect things",
    "You are not a failure, if you are not a graduate, you become a faliure, when you fail to use your mind. ",
    "Work while ohers are sleeping by the time you wake you will be ahead of them",
    " If you don't pay the price for your success now, you will experience the pain of poverty in furture.",
    " You will remain where you are if you don't see beyond where you are.",
    "It is better you ask for help and succeed, than to keep quite and fail. ",
    " Don't be ashamed to start small, if you know where you are going",
    "You are not a faliure when you fail, you are a failure when you give up "];

function myFunction() {
    document.getElementById("get").innerHTML = points[Math.floor(Math.random() * points.length)];
    document.getElementById("me").innerHTML = "Next";
}