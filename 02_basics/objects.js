const user = {}

user.id = 2
user.name = "suman" 
user.email = "s@gmail.com"

// console.log(user);


const regularUser = {
    email: "sp@gmail.com",
    fullname: {
        username: {
              firstname: "suman",
              lastname: "paudel"

        }
      
    }

}
// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3);

