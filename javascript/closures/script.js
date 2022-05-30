function outer(arg1){
    let var1 = 10
    let x = 4
    // console.log(arguments, 'outer')
    function inner(arg2){
        let var2 = 20
        x = 8
        // console.log(arguments, 'inner')
        console.log(arg1, var1, arg2, var2, x)
    }
    // console.log(x)
    return inner
}

let y = outer('param1')
// console.log(x)
y('param2')
// console.log(x)