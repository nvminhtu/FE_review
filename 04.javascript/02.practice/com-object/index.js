// Object
var person = {
    firstName: 'Tu',
    lastName: 'Nguyen',
    age: 30,
    skill: 'cứu người',
    driveMotobike: function() {
        return 'Lái xe ' + this.skill;
    }
}

var getHiepSi = document.getElementById('hiepsi');
getHiepSi.innerHTML = "Hiệp sĩ: " + person.lastName + " " + person.firstName + " - Tuổi: " + person.age + ", skills: " + person.skill + " hàng ngày hiệp sĩ " + person.driveMotobike();


