jQuery(document).ready(function() {
  $("#javas").each(function(i){
    $(this).append("Este texto se inserta desde el JS");
  });

  $.ajax("doc.txt") //me devolverá un objeto promise (jqXHR, en este caso es solo texto)
    .done(function(data){
      $("#externo").append(data); //También valdria .html(data)
    });

    /* OTRA SOLUCION PRIMERA PARTE
    $.ajax({
      type: "GET", //POR DEFECTO SERA GET SI NO ESPECIFICO OTRA COSA
      url: "doc.txt",
      cache: false //OPCION PARA QUE NO USE cache
    })
      .done(function(data){
        $("#externo").html(data);
      });*/

  $("#externo").click(function(){
      $.ajax("doc2.txt")
        .done(function(data){
          $("#externo").html("");
          $("#externo").append(data);
        });
  });

});
