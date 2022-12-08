"use strict";
(() => {
    function lastPushDate(username) {
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}}).then(resp => resp.json()).then(data => {
            const pullRequests = data.map(requests => requests.type)
            let firstRequest = pullRequests.indexOf("PullRequestEvent")
            console.log(firstRequest)
            console.log(pullRequests)
            console.log(data[firstRequest].created_at)
            return data[firstRequest].created_at
        })
    }
    lastPushDate('sb-son')

})();