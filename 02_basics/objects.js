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
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}

console.log(obj3);

