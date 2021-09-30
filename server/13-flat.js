const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [4,5]]],
    [,7,8,9]
];

const rta = matriz.flat(3);
console.log(rta)

// flat map
const users = [
    { userId: 1, userName: "Tom", attributes: ["nice", "cute"] },
    { userId: 2, userName: "Mike", attributes: ["Lovely", "strong"] },
    { userId: 3, userName: "Valentina", attributes: ["nice", "cool", "cute"] },
];

const rta1 = users.map(user => user.attributes).flat();
console.log(rta1);

const answer = users.flatMap(user => user.attributes);
console.log(answer);

// challange
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021,1,1,15),
            endDate: new Date(2021,1,1,15,30),
            title: "cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 17, 30),
            title: "cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 8),
            endDate: new Date(2021, 1, 1, 8, 30),
            title: "cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 10),
            endDate: new Date(2021, 1, 1, 10, 30),
            title: "cita 2",
        },
    ],
    thirdCalendar: [
        {
            startDate: new Date(2021, 1, 1, 13),
            endDate: new Date(2021, 1, 1, 13, 30),
            title: "cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 18),
            endDate: new Date(2021, 1, 1, 18, 30),
            title: "cita 2",
        },
    ],
}

// la forma de convertir un objeto en un array
const calendario = Object.values(calendars);
console.log(calendario.flatMap(calendar => calendar.map(date => date.startDate)));