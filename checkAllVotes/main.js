const votersArray = [
    {
        'firstName': 'Brenda', 'lastName': 'Bam', 'Email': '44444@gmail.com',
        'phoneNumber': '111-123-4333', 'Gender': 'Female', 'Candidate': 'Volciunas'
    },
    {
        'firstName': 'Jin', 'lastName': 'Paul', 'Email': '1232@gmail.com',
        'phoneNumber': '222-123-4333', 'Gender': 'Male', 'Candidate': 'Nuzmauskas'
    },
    {
        'firstName': 'Alice', 'lastName': 'Norman', 'Email': '66666@gmail.com',
        'phoneNumber': '333-123-4333', 'Gender': 'Female', 'Candidate': 'Volciunas'
    },
    {
        'firstName': 'Bim', 'lastName': 'Bam', 'Email': '55555@gmail.com',
        'phoneNumber': '444-123-4333', 'Gender': 'Male', 'Candidate': 'Nuzmauskas'
    },
    {
        'firstName': 'Barbra', 'lastName': 'Bar', 'Email': '12372@gmail.com',
        'phoneNumber': '555-123-4333', 'Gender': 'Female', 'Candidate': 'Volciunas'
    },
    {
        'firstName': 'Rebeca', 'lastName': 'Wanda', 'Email': '123266@gmail.com',
        'phoneNumber': '666-123-4333', 'Gender': 'Female', 'Candidate': 'Volciunas'
    },
]

buildTable(votersArray)

function buildTable(data) {
    const table = document.getElementById('myTable')

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td data-label="FirstName">${data[i].firstName}</td>
                        <td data-label="LastName">${data[i].lastName}</td>
                        <td data-label="Email">${data[i].Email}</td>
                        <td data-label="PhoneNumber">${data[i].phoneNumber}</td>
                        <td data-label="Gender">${data[i].Gender}</td>
                        <td data-label="Canditade">${data[i].Candidate}</td>
                    </tr>`
        table.innerHTML += row
    }
}