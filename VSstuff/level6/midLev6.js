// 1: Write a function called extractInitials that takes an array of full names and returns a new array containing only the initials of each name.

function extractInitials(names) {
    let initialsArray = []

    for (let i = 0; i< names.length; i++) {
        let nameParts = names[i].split(" ");
        let initials = ""
        for (let j = 0; j < nameParts.length; j++){
            initials += nameParts[j].charAt(0).toUpperCase()
        }
        initialsArray.push(initials)
        }
    
    return initialsArray
//   join first and last name together
// filter uppercase letters 
// return filtered letters
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);

console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']



// 2: Write a function called filterByProperty that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.

function filterByProperty(objects, propertyName, propertyValue) {
    return objects.filter(object => object[propertyName] === propertyValue);
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');

console.log(filteredByCountry); // Output: [{ name: 'Alice', age: 30, country: 'USA' }, { name: 'Charlie', age: 35, country: 'USA' }]
