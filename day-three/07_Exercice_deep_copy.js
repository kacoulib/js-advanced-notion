const students = [
    {
        name: "Alan",
        family: {
            mother: "Yvette",
            father: "Paul",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Martine",
            father: "Cécile",
            sister: "Sophie",
        },
        age: 55,
    },
];

const newStudents = students.map(student => {
    const { name, family, age } = student;
    const newFamily = { ...family };

    return { name, newFamily,  age }
})