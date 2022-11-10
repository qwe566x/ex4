
init.view.checkEmployee={
setupUI:function(){
    const name = document.getElementById("myName");
    const age = document.getElementById("age");
    const phone = document.getElementById("phone");
    const Zipcode = document.getElementById("Zipcode");
    const submit = document.getElementById("submit");

    name.addEventListener("input", () => {
        name.setCustomValidity("");
        name.checkValidity();
    });
    age.addEventListener("input", () => {
        age.setCustomValidity("");
        age.checkValidity();
    });
    phone.addEventListener("input", () => {
        phone.setCustomValidity("");
        phone.checkValidity();
    });
    Zipcode.addEventListener("input", () => {
        Zipcode.setCustomValidity("");
        Zipcode.checkValidity();
    });
    name.addEventListener("invalid",Employee.invalidName(name));
    age.addEventListener("invalid",Employee.invalidAge(age));
    phone.addEventListener("invalid",Employee.invalidPhone(phone));
    Zipcode.addEventListener("invalid",Employee.invalidZipcode(Zipcode));

},
};
