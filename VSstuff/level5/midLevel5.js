// 1: extract unique characters:
// Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.

function extractUniqueCharacters(strings) {

//   separate each letter into separate strings
    const arrayOfChars = strings.reduce((acc,str) => acc.concat(str.split("")), [])
    .reduce((uniqueChars, char) => {
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char)
        }
        return uniqueChars
    }, [])

    // var chars = words.split("");

//   filter out the duplicated letter
// const uniqueChars = extractUniqueCharacters(words);

//   return the duplicates
    return arrayOfChars
}
const words = ['apple', 'banana', 'cherry'];

console.log(extractUniqueCharacters(words)); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

// 2: Sort by property:
// Write a function called **`sortByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
    
  return objects.sort((a,b) => a[propertyName] - b[propertyName])
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);