//callback

function fetchData(callback)
{
    setTimeout(() => {
        const data = "Hello, world!";
        callback(data);},2000);
    
}

function process(data){
    console.log("Data recieved: ",data);

}
console.log("Start");

fetchData(process);

console.log("End");

//promises
function fetchData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success)
            {
                const data = "Hello world";
                resolve(data);
            }
            else {
                const error = "Failed to fetch data";
                reject(error);
            }
            }, 2000);
        });
    }
console.log("Start");

fetchData()
.then(data => {
    console.log("Data Recieved:", data);
})

.catch(error => {
    console.erroe("Error:", error);
})
.finally(()=> {
    console.log("Operation Completed");
});

console.log("End");

//async/await
function fetchData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success)
            {
                const data = "Hello world";
                resolve(data);
            }
            else {
                const error = "Failed to fetch data";
                reject(error);
            }
            }, 2000);
        });
    }
async function fetchDataAndProcess()
{
    try{
        console.log("Start");

        const data = await fetchData();
        console.log("Data recieved",data);
        console.log("End");
    }
    catch(error)
    {console.error("Error:",error)}
    finally 
    {
        console.log("Operation completad");
    }
}
fetchDataAndProcess();