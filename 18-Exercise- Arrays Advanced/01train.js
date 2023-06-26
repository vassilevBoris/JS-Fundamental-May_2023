function train(input) {
    let wagons = input[0].split(" ").map(Number);
    let wagonCapacity = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        let command = input[index].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            let passangers = Number(command[0]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagonCapacity - wagons[j] >= passangers) {
                    wagons[j] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75']);
