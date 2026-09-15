import fs from "fs/promises";
const writedata = async ()=>{
    try{
        console.log("about to write...");
        await fs.writeFile('stud.txt',"NAME;Raman Singh")
        console.log("file written");
    } catch (error)  {
        console.log(error);
    }
}
const f1 =  () =>{
    console.log("f1");

};
const f2 = ( ) => {
console.log("f2");
};
const main = ()=>{
    console.log("main");
    setTimeout(f1,10000);
    f2();
    console.log("end");
};
main();