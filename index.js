const element = document.getElementById('wpforms-submit-6');

element.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    sendData();
});

function sendData() {
    const name = document.querySelector('#wpforms-6-field_0').value;
    const address = document.querySelector('#wpforms-6-field_9').value;
    const phone = document.querySelector('#wpforms-6-field_3').value;
    const employee = document.querySelector('#wpforms-6-field_6').value;

    const data = {
        name: name,
        address: address,
        phone: phone,
        employee: employee
    };

    fetch('http://localhost:8081/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });
}


