// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit
// that user made. Reference the github api documentation to achieve this.

function getTheDateOfCommit(username) {
    return fetch('https://api.github.com', {headers: {'Authorization': 'token 42982d8744b829018aaa96f17921e43cfd1095eb'}});
}

getTheDateOfCommit("hanianowak");


// $get('https://api.github.com/repos/hanianowak/wrangell-web-exercises/commits');