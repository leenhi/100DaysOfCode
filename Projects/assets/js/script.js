// Open all anchor tags inside the #resource list in a new tab
window.onload = function(){
    var anchors = document.getElementById('resource_link').getElementsByTagName('a');
    for (var i=0; i<anchors.length; i++){
        anchors[i].setAttribute('target', '_blank');
    }
}
