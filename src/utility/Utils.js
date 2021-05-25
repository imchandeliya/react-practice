//method to check if array is not empty
const isArrayEmpty = (array) => {
    if (array !== null && array !== undefined && array.length > 0) {
        return false;
    }
    return true;
}


//print logs
const dumpLogs = (logMessage) => {
    console.log(logMessage);

    //or use webhooks 
}


export {isArrayEmpty, dumpLogs};