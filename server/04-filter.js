const words = ["spray", "limit", "elite", "exuberant"];
const newArray = words.filter(value => value.length >= 6);
console.log(newArray);

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

// simple buscador

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search("Ni"));