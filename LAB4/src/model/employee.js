class Employee{
    constructor(name,email,dob,age,gender,phone,Zipcode)
    {
        this.name=name;
        this.email=email;
        this.dob=dob;
        this.age=age;
        this.gender=gender;
        this.phone=phone;
        this.Zipcode=Zipcode;
    }
    static invalidName(name)
    {
        if (name.validity.patternMismatch) {
            name.setCustomValidity("Please enter a correct Pattern");
        } else {
            name.setCustomValidity(
                "Enter only characters 6-20"
            );
        }
    }
    static invalidAge(age)
    {
        if (age.validity.rangeOverflow) {
            age.setCustomValidity("age should be <60")}
            else if (age.validity.rangeUnderflow) {
            age.setCustomValidity("age  should be > 18")}
            else
            {age.setCustomValidity("Enter a Valid age")}
    }
    static invalidPhone(phone)
    {
        if (phone.validity.valueMissing) {
            phone.setCustomValidity("Please enter a Phone Number of 10 digits its a required field");
        } 
        else if (phone.validity.patternMismatch) {
            phone.setCustomValidity("Please enter a correct Pattern");}
        else {
            phone.setCustomValidity("Enter a Valid Phone number");
        }
    }
     static invalidZipcode(Zipcode)
     {
        if (Zipcode.validity.valueMissing) {
            Zipcode.setCustomValidity("Zipcode Cannot be Empty")  }
            else if (Zipcode.validity.patternMismatch) {
            Zipcode.setCustomValidity("Enter a  valid number")
             }
         else {
            Zipcode.setCustomValidity("Enter a Valid Zipcode like 577566");
        }
     }
}

