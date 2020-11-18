
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }
    
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const p = document.createElement('p');
        p.textContent = object.id;
        document.querySelector("body").appendChild(p);
    })
    .catch(function(error) {
        const p1 = document.createElement('p');
        p1.textContent = error.message;
        document.querySelector("body").appendChild(p1);
    });
}
