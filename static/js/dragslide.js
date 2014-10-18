
$(document).ready(function() {
  $('#slider').draggable({
    cursor: 'pointer',      // sets the cursor apperance
    opacity: 0.55,          // opacity fo the element while it's dragged
    stack: $('#slider'),       // brings the '#dg2' item to front
    axis: 'x',            // allow dragging only on the horizontal axis
    //containment: 'parent'
    revert: true,          // sets the element to return to its start location
    revertDuration: 2000,
      
   /* start: function(event, ui) {
      xpos = ui.position.left;
      ypos = ui.position.top;
    },
   
    stop: function(event, ui) {
      var xmove = ui.position.left - xpos;
      var xd = xmove >= 0 ? ' To right: ' : ' To left: ';
    //alert('The DIV was moved,\n\n'+ xd+ xmove+ ' pixels');
    }*/
      
  });
    
    
  addprofilepic();
    
});



var addprofilepic = function(){
  $("#pic_profile img").click(function(){
            $("#capture").click();       
            $("#capture").change(function(event){      
              if( !$(this).val().match(/\.(jpg|jpeg|png|gif|bmp)$/)){
                  alert("Invalid file");
              }
              else
              {
                   var input = $(event.currentTarget);
                   var file = input[0].files[0];
                   var obj_prev = $("#pic_profile"); 
                   obj_prev.html("");                

                   var reader = new FileReader();
                   reader.onload = function(e){
                          image_base64 = e.target.result;
                          var image = new Image();	 
                          image.src = image_base64;
                          image.width = 150; // a fake resize
                          obj_prev.html(image);
                           
    addprofilepic();
                   };
                   reader.readAsDataURL(file);         
                  
              }
           });
      
    }); 

}