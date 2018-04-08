let newNumber = 10;
 try {
     if (newNumber < 30) throw true;
     if (newNumber > 30) throw false;
     if (newNumber === 0) throw "Number is 0";

 } catch(err) {
     alert(err);
 }