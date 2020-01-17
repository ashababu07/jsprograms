function greet (gender, age, name) {
    var salutation = gender === "male" ? "Mr. " : "Ms. ";
             if (age > 25) { return "Hello, " + salutation + name + ".";  
             } else {
                 return "Hey, " + name + ".";
             }        	
 }
 var greetAnAdultMale=greet.bind(null,"male",45)//null object aaaanu
 console.log(greetAnAdultMale("alan"))
 var greetAnAdultFemale=greet.bind(null,"female",45)
 console.log(greetAnAdultFemale("aanna"))
greet()
 