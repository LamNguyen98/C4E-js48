let tbody = document.getElementById("tbody");
async function render() {
    let res = await axios.get("http://dummy.restapiexample.com/api/v1/employees?fbclid=IwAR3SnwKmub8ttNYQiDBU6a8bRVsPs6V41fOGsQMMZKw1jQRs2Yj037VG6Qc")

    for (let i = 0; i < res.data.length; i++) {
        let getID = res.data[i].id;
        let getName = res.data[i].employee_name;
        let getAge = res.data[i].employee_age;
        let getSalary = res.data[i].employee_salary
    
        let template = `<td>${getID}</td>
    <td>${getName}</td>
    <td>${getAge}</td>
    <td>${getSalary}</td>`;

        tbody.innerHTML += template;   
    }
}
render()



