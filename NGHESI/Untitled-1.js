function run() {
    const person = {
        firstName: "Trung",
        lastName: "Vuong",
        age: 50,
        eyeColor: "blue"
    };
    for (let value of Object.values(person))
        console.log(value);
}