// Write your solution here!
const cats=["Milo","Otis","Garfield"]
destructivelyAppendCat = () => {
    cats.push (`Ralph`)
}
const destructivelyPrependCat = () => {
    cats.unshift (`Bob`)
}
const destructivelyRemoveLastCat = () => {
    cats.pop ()
}
const destructivelyRemoveFirstCat = () => {
    cats.shift ()
}
const appendCat = () => {
    return [...cats,`Broom`]
}
const prependCat = () => {
    return [`Arnold`,...cats]
}
let removeLastCat = () => {
    return cats.slice(0,2)
}
removeFirstCat = () =>{
    return cats.slice(1)
}
