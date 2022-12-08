"use strict";
(() => {
    // function lastPushDate(username) {
    //     fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}}).then(resp => resp.json()).then(data => {
    //         const pullRequests = data.map(requests => requests.type)
    //         let firstRequest = pullRequests.indexOf("PushEvent")
    //         console.log(firstRequest)
    //         console.log(pullRequests)
    //         console.log(data[firstRequest].created_at)
    //         console.log(data)
    //         return data[firstRequest].created_at
    //     })
    // }
    // lastPushDate('sb-son')

    $("#btn").click((e) => {
        e.preventDefault()
        let query = $("#github-name").val();
        console.log(query);
        fetch(`https://api.github.com/users/${query}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
            .then(resp => resp.json())
            .then(data => {
            const pullRequests = data.map(requests => requests.type)
            let firstRequest = pullRequests.indexOf("PushEvent")
            console.log(firstRequest)
            console.log(pullRequests)
            console.log(data[firstRequest].created_at)
            console.log(data)
            let date = new Date(data[firstRequest].created_at).toLocaleString()
            console.log(date)
            $(".date").html(`<h2>Last Push Date: </h2><p>${date}</p>`)
            return data[firstRequest].created_at
        })
        .catch(error => console.error(error))
    })
})();