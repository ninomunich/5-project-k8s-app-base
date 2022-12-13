$("#button-blue").on("click", function() {
    
    var txt_nome = $("#nome").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comentario").val();

    $.ajax({
        url: "https://0.0.0.0",
        
        type: "post",
        data: {nome: txt_nome, comentario: txt_comentario, email: txt_email},
        beforeSend: function() {
        
            console.log("Trying to send the data....");

        }
    }).done(function(e) {
        alert("Data saved");
    })

});