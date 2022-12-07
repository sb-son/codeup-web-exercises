const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const atLeastThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(atLeastThreeLanguages)

const emailAddress = users.map(userEmail => userEmail.email)
console.log(emailAddress)

const totalYearsExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0)
console.log(totalYearsExp)
console.log(totalYearsExp / users.length)

const longestEmail = users.reduce((longestUserEmail, userEmail) => {
    if (userEmail.email.length > longestUserEmail.email.length) {
        longestUserEmail = userEmail
    }
    return longestUserEmail
}, {email: ""})
console.log(longestEmail)

const instructorsList = users.reduce((list, instructor, index) => {
    // let punctuation = instructor.name !== "justin"  ? ", " : ".";
    let punctuation = index === users.length - 1  ? "." : ", ";
    list += instructor.name + punctuation
    return list;
}, "Your instructors are: ")
console.log(instructorsList)
// console.log(`Your instructors are: ${instructorsList.trim().split(" ").join(", ")}.`)

// const instructors = users => {
//     let names = users.map(u => u.name);
//     console.log(names);
//     let count = 0;
//     return names.reduce((prev, next) =>{
//         count++;
//         if (count === names.length){
//             return `${prev} ${next}. Now report to class!`;
//         }
//         return `${prev} ${next},`;
//     },`Your instructors are:`)
// };

// const uniqueLanguage = users => {
//     let list = users.map(u => u.languages).flat()
//     return list.reduce((arr, next) => {
//         if (!arr.includes(next)) {
//             arr.push(next)
//             return arr
//         } else {
//             return arr
//         }
//     }, [])
// }
// console.log(uniqueLanguage)





