document.getElementById("searchInput").addEventListener("keyup", function(event){
let searchQuery = event.target.value.toUpperCase();
let stateDomCollection= document.getElementsByClassName("state");

for (let count=0; count<stateDomCollection.length; ++count){
    let currentState= stateDomCollection[count].textContent.toUpperCase();
    console.log(currentState);
    if(currentState.includes(searchQuery)){
        stateDomCollection[count].style.display= "block";
    }else{
        stateDomCollection[count].style.display="none";
    }
    
}
});