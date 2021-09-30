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

const total = orders.map(item => item.total);
console.log(total);

console.log(orders);

const taxes = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log(taxes);