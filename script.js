// TODO: add code here
window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            let dataFetch = data
            console.log(dataFetch) 
        
        // const div = document.getElementById('container')

    for (let i = 0; i < dataFetch.length; i++){

        const div = document.getElementById('container');
        
        div.innerHTML = div.innerHTML + `
            <div class = "astronaut">
                <div class = "bio">
                    <h3>${dataFetch[i].firstName} ${dataFetch[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${dataFetch[i].hoursInSpace}</li>
                        <li>Active: ${dataFetch[i].active}</li>
                        <li>Skills: ${dataFetch[i].skills}</li>
                    </ul>
                </div>
                <img class = "avatar" src = ${dataFetch[i].picture}>
            </div>
        `;
    
    }
    
    })

})
})