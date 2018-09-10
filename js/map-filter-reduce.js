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


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const language3 = users.filter(user => user.languages.length >= 3);
// const language3 = users.filter(function(user) { return user.languages.length >=3 });
console.log(language3);


// Use .map to create an array of strings where each element is a user's email address

const emails = users.map(user => user.email);
console.log(emails);


// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

const totalExperience = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0);

console.log(totalExperience);
console.log(totalExperience / users.length);


// Use reduce to get the longest email from the list of users.

const longestEmail = users.reduce((accumulation, user) => {
    // return user.email.length > accumulation.length ? user.email : accumulation;
    //or:
    if (user.email.length > accumulation.length) {
        return user.email;
    } else {
        return accumulation;
    }
}, '');

console.log(longestEmail);


// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const allNames = users.reduce((accumulation, user, i) => {
    if (i < users.length - 1) {
        return accumulation + user.name + ", ";
    }
    else {
        return accumulation + user.name + "."
    }
}, 'Your instructors: ');
console.log(allNames);


// Use reduce to get the unique list of languages from the list of users. - BONUS

// const languages = users.reduce((accumulation, user) => {
//     if (accumulation.includes(user.languages)) {
//         return accumulation;
//     }
//     else {
//         return accumulation + user.languages + ',';
//     }
// });

// console.log(languages);


