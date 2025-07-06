const findTheOldest = function(objects) {
    const date = new Date();
    const year = date.getFullYear();
         
const persons = objects;
    persons.sort((b, a) => {
           if (a.yearOfDeath != undefined && b.yearOfDeath != undefined) {

            return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);

        } else if (a.yearOfDeath != undefined && b.yearOfDeath == undefined) {

            return (a.yearOfDeath - a.yearOfBirth) - (year - b.yearOfBirth);

        } else if (a.yearOfDeath == undefined && b.yearOfDeath != undefined) {

            return (year - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
            
        } else {

            return (year - a.yearOfBirth) - (year - b.yearOfBirth);

        };
        
    })
            
    const oldest = persons[0];
    return oldest;
};



// Do not edit below this line
module.exports = findTheOldest;
