// Part 1
function fetchhDataWithCallback (callback) {
    setTimeout(function() {
      callback("Data fetched");  
    }, 2000)
} 
fetchhDataWithCallback(function(callback) {
    console.log(callback)
});

// Part 2
function fetchhDataWithCallback (callback) {
    setTimeout(function() {
        let error = true;
        try {
           if (error) {
            Error("Fecth failed");
           } 
           callback("Data fetched");
        } 
        catch (err) {
            console.log("Error:", err.message);
        }
    }, 2000)
};

fetchhDataWithCallback(function(callback) {
    console.log(callback)
});