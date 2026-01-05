const coding = ["js", "cpp", "rb", "py", "java"]

// coding.forEach(function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })


function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)


// coding.forEach((item, index, arr) =>  {
//      console.log(item,index, arr);
     
// })

const myCoding = [
    {
        LanguageName : "javascript",
        LanguageFileName : "js"
    },
    {
        LanguageName : "java",
        LanguageFileName : "java"
    },
    {
        LanguageName : "python",
        LanguageFileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.LanguageName);
    
})
