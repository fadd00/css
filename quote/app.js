var quotes=["gak","gak ada","gk"];

function generate(){
    let random = Math.floor(Math.random()*quotes.length);
    document.getElementById('quoteSection').innerHTML=quotes[random];
}
function seeAllQuotes(){
    text="<ul>";//create bullet
    for (i=0; i<quotes.length;i++){
        text += "<li>" + quotes[i]+ "</li>";
    }
    text += "</ul>";
    document.getElementById("quoteSection").innerHTML= text;
}
function newQuotes(){
    var newQuotes = document.getElementById("insertSection").value;
    alert("mweheheheh");
    quotes.push(newQuotes);
    seeAllQuotes();
}