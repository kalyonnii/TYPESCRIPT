// const a="1";
// console.log("aaa",a);
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("bunny", "chinni"));
var user = {
    name: "bunny",
    age: 22,
    getMessage: function () {
        return "hello" + name;
    }
};
var user2 = {
    name: "chinni",
    getMessage: function () {
        return "hello" + name;
    }
};
console.log(user.name);
console.log(user.getMessage());
