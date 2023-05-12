
function addRow(){
    
    
    var div = document.getElementById ('default-row');
    
    var clone = div.cloneNode(true);
    clone.id = "";
 
    var notes = document.getElementById("notes")
    notes.appendChild(clone);

}

