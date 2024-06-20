// Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// function filterAnagrams (arr, target) {
//     let alphabeticalString = target.split(''). sort().join('')
// }

function filterAnagrams(arr, target) {
    let alphabeticalString = target.split('').sort().join('')
    let anaArr = []

    for (let i = 0; i<arr.length; i++){
        // const word = arr[i]
        let alphabetical = arr[i].split("").sort().join("");
        if (alphabetical === alphabeticalString) {
            anaArr.push(arr[i])
        }
    } 
    return anaArr
}

console.log(filterAnagrams(['listen', 'silent', 'dog', 'god', 'hello', 'world', 'teachs'],"enlist"))

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world', 'teachs']
// const target = "enlist"
// const anagrams = filterAnagrams(words, target)
// console.log(anagrams); // Output: ['listen', 'silent']



// Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.

function sortByMultipleCriteria(people) {
// first, sort by age (map.sort(people.age))
// then, sort alphabetically (map.sort(people.name))
// nested for loop??
    // let sortedPeople = people.sort((firstItem, secondItem) => firstItem.age - secondItem.age);
    // return sortedPeople

    return people.sort((a , b)=> {
        if (a.age === b.age){
            if(a.name < b.name)return -1
            if(a.name > b.name)return 1
            return 0
        }
        return a.age-b.age
        
    })
}
const people = [
{ name: 'Alice', age: 30 },
{ name: 'Rob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]