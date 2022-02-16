const greetings = [
    "Hola",
    "Hello",
    "Cia",
    "Dia duit",
    "Salut",
    "Hallo",
    "Alo",
    "Olá"
];

const randomGreetings = () => {
    console.log(greetings[Math.floor(Math.random() * greetings.length)]);
};

module.exports = { randomGreetings };