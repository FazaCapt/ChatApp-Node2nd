[{
    id: '/#analkdmadakdmassk',
    name: 'Faza',
    room: 'The office fans'
}]


// addUser(id, name, room)
// removeUser(id)
// getUserId
// getUserList(room)

class Users {
    constructor() {
        this.users = []
    }
    addUser(id, name, room) {
        var user = { id, name, room }
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
        // return user was removed
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room) {
        // ['mike', 'jane', 'caleb']
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = { Users };






















// var users = [];

// var addUser = (id, name, room) => {
//     users.push({})
// };

// modules.exports = { addUser };


// new Person
// new Object

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// };
// console.log(name, age)
// var me = new Person('Faza', 27);

// console.log('this.name', me.name);
// console.log('this.age', me.age);

// var description = me.getUserDescription();
// console.log(description);

// Output: Faza 27