console.log(a);
var a = 10;

// first the memory allocation is done, during memory allocation it will allocate memory
// for a variable, but value is not assigend
// in the next step first it will execute the log statement so, by default values of a
// is undefined, so it will print undefiend.
// later a will be updated to 10. but we are not printing updated value.

console.log(b); // it will check for b variable in memory area, there is no a variable so it will throw eerror variable not found
