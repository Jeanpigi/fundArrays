const months = ["march", "feb", "may", "jan", "dec"];
const numbers = [1, 30,2,9,37,3, 8, 20];
const words = ["reserve", "premier", "comunique", "cafe", "adieu", "ecla"];
const orders = [
    {
        customerName: "Nicolas",
        total: 12,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 6,
        delivered: false,
    },
    {
        customerName: "Maria",
        total: 142,
        delivered: true,
    },
    {
        customerName: "Gustavo",
        total: 2,
        delivered: false,
    },
    {
        customerName: "Claudia",
        total: 98,
        delivered: true,
    },
];

months.sort();
console.log(months);

// orden de los números
numbers.sort((a,b) => a - b);
console.log(numbers);

words.sort();
console.log(words);

orders.sort((a, b) => b.total - a.total);
console.log(orders);