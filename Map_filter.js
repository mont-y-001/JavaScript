const coding = ["js","python","Java"]
const values = coding.forEach(item =>{
    //console.log(item);
    return item;     //for each does'nt return anyhting(undefined)
})
//console.log(values);



//##Filter
const newArr  = [1,2,3,4,5,6,7,8,3,555,5,6]
const Fil_Arr = newArr.filter((item) => item>4)    //Explicit if we use curly bracket then we have to use (return item>4)
//console.log(Fil_Arr);

let Books = [
    {
    title : "Book 1",genre: "Fiction", Publish : 1981,
    edition: 2004},
    {
    title : "Book 2",genre: "History", Publish : 1982,
    edition: 2005},
    {
    title : "Book 3",genre: "Non-Fiction", Publish : 1982,edition: 2008},
    {
    title : "Book 4",genre: "Civics", Publish : 1987,
    edition: 2010},
    {
    title : "Book 5",genre: "History", Publish : 1965,
    edition: 2010}
]

//let Books_Filter = Books.filter((item) => item.genre == "History" && item.Publish >= 1975 )    //Direct method(Implicit)

let  Books_Filter = Books.filter((item) => {
    return item.genre == "History" && item.Publish >= 1975   //Using return (Explicit)
})
console.log(Books_Filter)