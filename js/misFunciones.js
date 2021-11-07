function traerInformacionCategory(){
    $.ajax({
        url:"http://144.22.232.91:8080/api/Category/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategory(respuesta);            
        },
       
    });
}
 
function pintarRespuestaCategory(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoCategory("+items[i].idElemento+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategory(){
    let var2={
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
    };
        console.log(var2);       
    $.ajax({       
        type:"POST",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(var2),
        url:"http://144.22.232.91:8080/api/Category/save",
        success:function(response){
            console.log("Se guardo correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Informacion NO se guardado satisfactoriamente")
            
        }   
    });
}

function editarInformacionCategory(){
    let myData={
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
    };
        let dataToSend=JSON.stringify(myData);
    $.ajax({       
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",      
        url:"http://144.22.232.91:8080/api/Category/update",
        success:function(response){
            $("#resultado1").empty();
            $("#Cname").val(),
            $("#Cdescription").val(),
            traerInformacionCategory(),
            console.log("Se edito correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        }, 
        error: function (xhr, status) {
            console.log(status);
            
        }   
    });
}

function borrarElementoCategory(idElemento){
    let myData={
        idCategory:idElemento
    };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
    $.ajax({
        type:"DELETE",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:dataToSend,
        url:"http://144.22.232.91:8080/api/Category/" +idElemento,
        success:function(respuesta){
            $("#resultado1").empty();
            traerInformacionCategory("");
            alert("Informacion Eliminada")
        },   
        error: function (xhr, status) {
            console.log(status);
            
        } 
    });
}

function traerInformacionGame(){
    $.ajax({
        url:"http://144.22.232.91:8080/api/Game/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaGame(respuesta);            
        },
        
    });

}

function pintarRespuestaGame(items){
    let mytable="<table>";
    for(i=0; i<items.length; i++){
        mytable += "<tr>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td>"+items[i].developer+"</td>";
        mytable+="<td>"+items[i].year+"</td>";
        mytable+="<td>"+items[i].description+"</td>";
        mytable += "<td> <button onclick='eliminarElementoGame("+ items[i].id + ")'>Borrar</button></td>";
        mytable += "<td> <button onclick='infoGame("+ items[i].id + ")'>Traer Informacion</button></td>";
        mytable += "</tr>";
    }
    mytable += "</table>";
    $("#resultado2").html(mytable);
}

function guardarInformacionGame(){
    let var3={
        name:$("#Gname").val(),
        developer:$("#Gdeveloper").val(),
        year:$("#Gyear").val(),
        description:$("#Gdescription").val(),       
    };
        console.log(var3);        
    $.ajax({       
        type:"POST",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(var3),
        url:"http://144.22.232.91:8080/api/Game/save",
        success:function(response){
            console.log("Se guardo correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Informacion NO se guardado satisfactoriamente")
            
        }     
    });
}

function editarInformacionGame(){
    let myData={
        name:$("#Gname").val(),
        developer:$("#Gdeveloper").val(),
        year:$("#Gyear").val(),
        description:$("#Gdescription").val(),  
    };
    
        let dataToSend=JSON.stringify(myData);
        console.log(myData);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Game/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#Gname").val(""),
            $("#Gdeveloper").val(""),
            $("#Gyear").val(""),
            $("#Gdescription").val(""),
            traerInformacionGame();
            alert("La informacion del juego se edito satisfactoriamente")
        },
        error: function (xhr, status) {
            console.log(status);
            
        }  
    });
}

function eliminarElementoGame(idElemento){
    let myData={
        idGame:idElemento
    };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Game/" +idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacionGame();
            alert("La informacion del juego se elimino satisfactoriamente")
        },  
        error: function (xhr, status) {
            console.log(status);
            
        }

    });
}

function traerInformacionClient(){
    $.ajax({
        url:"http://144.22.232.91:8080/api/Client/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta);            
        },
        
    });

}

function pintarRespuestaClient(items){
    let mytable="<table>";
    for(i=0; i<items.length; i++){
        mytable += "<tr>";
        mytable+="<td>"+items[i].email+"</td>";
        mytable+="<td>"+items[i].password+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td>"+items[i].age+"</td>";
        mytable += "<td> <button onclick='eliminarElementoClient("+ items[i].id + ")'>Borrar</button></td>";
        mytable += "<td> <button onclick='infoGame("+ items[i].id + ")'>Traer Informacion</button></td>";
        mytable += "</tr>";
    }
    mytable += "</table>";
    $("#resultado3").html(mytable);
}

function guardarInformacionClient(){
    let var4={
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),      
    };
        console.log(var4);
    $.ajax({       
        type:"POST",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(var4),
        url:"http://144.22.232.91:8080/api/Client/save",
        success:function(response){
                console.log(response);
            console.log("Se guardo correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Informacion NO se guardado satisfactoriamente")
            
        }     
    });
}

function editarInformacionClient(){
    let myData={
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(), 
    };
    
        let dataToSend=JSON.stringify(myData);
        console.log(myData);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#CLemail").val(""),
            $("#CLpassword").val(""),
            $("#CLname").val(""),
            $("#CLage").val(""),
            traerInformacionClient();
            alert("La informacion del juego se edito satisfactoriamente")
        },
        error: function (xhr, status) {
            console.log(status);
            
        }  
    });
}

function eliminarElementoClient(idElemento){
    let myData={
        idClient:idElemento
    };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Client/" +idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            traerInformacionGame();
            alert("La informacion del juego se elimino satisfactoriamente")
        },  
        error: function (xhr, status) {
            console.log(status);
            
        }

    });
}

function traerInformacionReservation(){
    $.ajax({
        url:"http://144.22.232.91:8080/api/Reservation/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservation(respuesta.items);            
        },
        
    });

}

function pintarRespuestaReservation(items){
    let mytable="<table>";
    for(i=0; i<items.length; i++){
        mytable += "<tr>";
        mytable += "<td>" + items[i].startdate + "</td>";
        mytable += "<td>" + items[i].devolutiondate + "</td>";
        mytable += "<td>" + items[i].status + "</td>";
        mytable += "<td> <button onclick='eliminarElementoMessage("+ items[i].id + ")'>Borrar</button></td>";
       
        mytable += "</tr>";
    }
    mytable += "</table>";
    $("#resultado4").html(mytable);
}

function guardarInformacionReservation(){
    let var4 = {
        startdate:$("#Rstartdate").val(),
        devolutiondate:$("#Rdevolutiondate").val(),
        status:$("#Rstatus").val(),
    };
        console.log(var4);
        
    $.ajax({
        type:"POST",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(var4),
        url:"http://144.22.232.91:8080/api/Reservation/save",
        success: function(response){
                console.log(response)
            console.log("Se guardo correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Informacion NO se guardado satisfactoriamente")   
        }  
    });
}

function editarInformacionReservation(){
    let myData={
        startdate:$("#Rstartdate").val(),
        devolutiondate:$("#Rdevolutiondate").val(),
        status:$("#Rstatus").val(),
    };
    
        let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#Rstartdate").val(""),
            $("#Rdevolutiondate").val(""),
            $("#Rstatus").val(""),
            traerInformacionReservation();
            alert("El mensaje se actualizo satisfactoriamente")
        },
        error: function (xhr, status) {
            console.log(status);
            
        }  
    });
}

function eliminarElementoReservation(idElemento){
    let myData={
        idReservation:idElemento
    };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Reservation/" +idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionReservation();
            alert("Informacion Eliminada")
        },  
        error: function (xhr, status) {
            console.log(status);
            
        }

    });
}

function traerInformacionMessage(){
    $.ajax({
        url:"http://144.22.232.91/api:8080/Message/all",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items);            
        },
        
    });

}

function pintarRespuestaMessage(items){
    let mytable="<table>";
    for(i=0; i<items.length; i++){
        mytable += "<tr>";
        mytable += "<td>" + items[i].messagetext + "</td>";
        mytable += "<td> <button onclick='eliminarElementoMessage("+ items[i].messagetext + ")'>Borrar</button></td>";
       
        mytable += "</tr>";
    }
    mytable += "</table>";
    $("#resultado5").html(mytable);
}

function guardarInformacionMessage(){
    let var5 = {
        messagetext:$("#Mmessagetext").val(),
    };
        console.log(var5);
        
    $.ajax({
        type:"POST",
        contentType:"application/JSON; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(var5),
        url:"http://144.22.232.91/api/Message/save",
        success: function(response){
                console.log(response)
            console.log("Se guardo correctamente")
            alert("Informacion guardada satisfactoriamente")
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Informacion NO se guardado satisfactoriamente")   
        }  
    });
}

function editarInformacionMessage(){
    let myData={
        messagetext:$("#Mmessagetext").val(),
    };
    
        let dataToSend=JSON.stringify(myData);
        console.log(myData);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#Mmessagetext").val(""),
            traerInformacionMessage();
            alert("El mensaje se actualizo satisfactoriamente")
        },
        error: function (xhr, status) {
            console.log(status);
            
        }  
    });
}

function eliminarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
    $.ajax({
        url:"http://144.22.232.91:8080/api/Message/" +idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            traerInformacionMessage();
            alert("Informacion Eliminada")
        },  
        error: function (xhr, status) {
            console.log(status);
            
        }

    });
}
