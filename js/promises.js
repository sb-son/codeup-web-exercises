"use strict";
(() => {
    fetch(`https://api.github.com/users/sb-son/events/public`, {headers: {'Authorization': GITHUB_KEY}}).then(resp => resp.json()).then(data => {
        const pullRequests = data.map(requests => data.type)
        console.log(pullRequests)
        console.log(data)
    })

})();