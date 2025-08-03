function getUser(callback) {
    setTimeout(() => {
        callback([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' }
            ])
    }, 1000)
};

function findUser(username, callback) {
    getUser((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    })
    
}



findUser('john', console.log);
