/*drag-drop*/

(function dragndrop() {
    let xpos = '';
    let ypos = '';
    let whichArt = '';
  
    function resetZ() {
      const imgEl = document.querySelectorAll('box');
      for (let i = imgEl.length - 1; i >= 0; i--) {
        imgEl[i].style.zIndex = 5;
      }
    }
    
    function moveStart(e) {
      whichArt = e.target;
      xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
      ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
      document.querySelector("#top_letter").innerHTML = "";
      whichArt.style.zIndex = 10;
    }
  
    function moveDragOver(e) {
      e.preventDefault();
    }
  
    function moveDrop(e) {
      e.preventDefault();
      whichArt.style.left = e.pageX - xpos + 'px';
      whichArt.style.top = e.pageY - ypos + 'px';
    }
    
   
  
    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
    
    document.querySelector('body').addEventListener('touchstart', touchStart, false);
  
  })();
  




/*var dragobject={
    z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
    initialize:function(){
    document.onmousedown=this.drag
    document.onmouseup=function(){this.dragapproved=0}
    },
    drag:function(e){
    var evtobj=window.event? window.event : e
    this.targetobj=window.event? event.srcElement : e.target
    if (this.targetobj.className=="drag"){
    this.dragapproved=1
    if (isNaN(parseInt(this.targetobj.style.left))){this.targetobj.style.left=0}
    if (isNaN(parseInt(this.targetobj.style.top))){this.targetobj.style.top=0}
    this.offsetx=parseInt(this.targetobj.style.left)
    this.offsety=parseInt(this.targetobj.style.top)
    this.x=evtobj.clientX
    this.y=evtobj.clientY
    if (evtobj.preventDefault)
    evtobj.preventDefault()
    document.onmousemove=dragobject.moveit
    }
    },
    moveit:function(e){
    var evtobj=window.event? window.event : e
    if (this.dragapproved==1){
    this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px"
    this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px"
    return false
    }
    }
    }
    
    dragobject.initialize();*/