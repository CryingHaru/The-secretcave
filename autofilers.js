// ==UserScript==
// @name autofillers script
// @namespace Low
// @version 0.2
// @updateURL https://github.com/CryingHaru/The-secretcave/raw/main/autofilers.js
// @downloadURL https://github.com/CryingHaru/The-secretcave/raw/main/autofilers.js
// @description autofiller
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @author ASV
// @match https://simmow.salud.gob.sv/conrec.php*
// @grant unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
      //base de datos//

//prompt("coloca el link de la base de datos");
let text;
let linkdb = "https://raw.githubusercontent.com/CryingHaru/haruweb/main/dbestan";
if (linkdb == null || linkdb == "") {
  text = "El usuario canceló la accion";
} else {
  text = "Base de datos cargada";
  var database;
  var datanumero;

  fetch(linkdb)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      database = data;

      //leer numero de expediente//
      let expediente = document.querySelector('[name="expe"]');
      expediente.addEventListener("keyup", function (e) {
      const expnumero = expediente.value;

          //departamento//
        const departamento = document.querySelector('select[name="p_dept"]');
        departamento.value = 11;
        departamento.dispatchEvent(new Event("change"));
          //municipio//
        setTimeout(selecciondemunicipio(), 1000);
        function selecciondemunicipio() {
          const municipio = document.querySelector('select[name="p_muni"]');
          municipio.value = 182;
          municipio.dispatchEvent(new Event("change"));
        }
          //tsts
           const fechan=database[expnumero].Fechadn;
          function isValidDate(day,month,year)
{
    var dteDate;
    month=month-1;
    dteDate=new Date(year,month,day);
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}
function validate_fecha(fechan)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

    if(fechan.search(patron)==0)
    {
        var values=fechan.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}
    if(validate_fecha(fechan)==true)
    {
        // Si la fecha es correcta, calculamos la edad
        var values=fechan.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes )
        {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }

        // calculamos los meses
        var meses=0;
        if(ahora_mes>mes){
            meses=ahora_mes-mes;
        }
       else if(ahora_mes<mes){
            meses=12-(mes-ahora_mes);
        }else if(ahora_mes==mes && dia>ahora_dia){
            meses=11;
        }
        // calculamos los dias
        var dias=0;
        if(ahora_dia>dia){
            dias=ahora_dia-dia;
        }
        if(ahora_dia<dia)
        {
            var ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
        console.clear();
         let infonombre= database[expnumero].nombre;
         let panombre=infonombre.split(",");
        let apellido = panombre[0];
        let nombre = panombre[1];
        console.log("El paciente "+expnumero+" con nombre "+nombre +" "+ apellido+" tiene "+edad+" años, "+meses+" meses y "+dias+" días");

        if (edad == 0 || edad== undefined) {
        if (meses == 0|| meses == undefined) {
          document.querySelector('input[name="dias"]').value = dias;
        } else {
          document.querySelector('input[name="meses"]').value = meses;
        }
  } else {
      document.querySelector('input[name="edad"]').value = edad;
  }
    }else{
        console.log("La fecha "+fechan+" es incorrecta");
    }
          //sexo//
        let sexo = database[expnumero].sex;
        if (sexo == 1) {
          document.querySelector('input[name="sex"][value="1"]').checked = true;
        } else {
          document.querySelector('input[name="sex"][value="2"]').checked = true;
        }
          //area urbana o rural//
 //   let area = database[expnumero].sex;
   //     if (area == 1) {
 //     document.querySelector(
  //          'input[name="urbano"][value="1"]'
    //      ).checked = true;
       // } else {
         // document.querySelector(
           // 'input[name="urbano"][value="2"]'
         // ).checked = true;
       // }
      });

    })
    .catch(console.error);
}
console.log(text);
