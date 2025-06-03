// date=Date()
// console.log(date)


// const d = new Date("2015-03-25");
// console.log(d); 


// const d=new Date("27 june 2001");
// console.log(d.getMonth())


const d=new Date("June 27, 2001");
const da= d.setMonth(11);
const read=new  Date(da)
console.log(read.toString());