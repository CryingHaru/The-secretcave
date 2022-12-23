// ==UserScript==
// @name     autofillers script
// @namespace   Low
// @version  1.7
// @updateURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @downloadURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @description autofiller
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/styles.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @author ASV
// @match https://simmow.salud.gob.sv/conrec.php*
// @match localhost
// @grant unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
//Variables
const my_css = GM_getResourceText("IMPORTED_CSS");
GM_addStyle(my_css);
let expediente = document.querySelector('[name="expe"]');
const departamento = document.querySelector('select[name="p_dept"]');
const municipio = document.querySelector('select[name="p_muni"]');
let edadaños = document.querySelector('input[name="edad"]');
let edadmeses = document.querySelector('input[name="meses"]');
let edaddias = document.querySelector('input[name="dias"]');
let hombre = document.querySelector('input[name="sex"][value="1"]');
let mujer = document.querySelector('input[name="sex"][value="2"]');
let sindefinido = document.querySelector('input[name="sex"][value="3"]');
let hoyn = document.querySelector('input[name="fecha"]').value;
let numerodeexpediente;
let consoleoutput;
let selectedlink = GM_getValue("selected");
let name = GM_getValue("name");
let linkdatos = GM_getValue("url");
let links = "https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/listds.svl"
let ld;
let tst = GM_getValue("ndb")


fetch(links)
    .then((rest) => {
        return rest.json();
    })
    .then((dat) => {
        ld = dat;
        GM_setValue("ndb", dat)
        console.log("Usando base de datos:" + selectedlink + " Con nombre: " + tst[selectedlink].name);
        if (linkdatos == null || linkdatos == "") {
            consoleoutput = "No hay ninguna base de datos";
        } else {
            consoleoutput = "Base de datos cargada";
            //Variables
            let database;
            let datanumero;

            fetch(linkdatos)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    database = data;
                    //leer numero de expediente//
                    expediente.addEventListener("keyup", function (e) {
                        console.clear();
                        let tsdepartamento = GM_getValue("dep")
                        let tsmunicipio = GM_getValue("mun")
                        numerodeexpediente = expediente.value;
                        const sexo = database[numerodeexpediente].S;
                        const fechaNacimiento = database[numerodeexpediente].F;
                        const infonombre = database[numerodeexpediente].N;
                        let nombrecompleto = infonombre.split(",");
                        let apellido = nombrecompleto[0];
                        let nombre = nombrecompleto[1];
                        hoyn = document.querySelector('input[name="fecha"]').value;
                        //departamento//
                        departamento.value = tsdepartamento
                        departamento.dispatchEvent(new Event("change"));

                        //municipio//
                        setTimeout(selecciondemunicipio, 100);
                        function selecciondemunicipio() {
                            municipio.value = tsmunicipio
                            municipio.dispatchEvent(new Event("change"));
                        }
                        var partesFecha = fechaNacimiento.split("/");
                        var dia = parseInt(partesFecha[0]);
                        var mes = parseInt(partesFecha[1]);
                        var anio = parseInt(partesFecha[2]);

                        var partesFechan = hoyn.split("/");
                        var dian = parseInt(partesFechan[0]);
                        var mesn = parseInt(partesFechan[1]);
                        var anion = parseInt(partesFechan[2]);

                        function calculateAge() {
                            let today = new Date(anion, mesn, dian)
                            let birthday = new Date(anio, mes, dia)
                            const ageInMilliseconds = today.getTime() - birthday.getTime();
                            const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
                            const ageInMonths = Math.floor((ageInMilliseconds % 31536000000) / 2628000000);
                            const ageInDays = Math.floor(((ageInMilliseconds % 31536000000) % 2628000000) / 86400000);
                            var resultado = {
                                edad: ageInYears,
                                meses: ageInMonths,
                                dias: ageInDays
                            };
                            return resultado;
                        }
                        let edadlista = calculateAge();
                        if (edadlista.edad == 0 || edadlista.edad == undefined) {
                            edadaños.value = "0";
                            if (edadlista.meses == 0 || edadlista.meses == undefined) {
                                edadmeses.value = "";
                                edaddias.value = edadlista.dias;
                            } else {
                                edadmeses.value = edadlista.meses;
                            }
                        } else {
                            edadaños.value = edadlista.edad;
                        }
                        console.log("Nombre:" + infonombre + ", Fecha de nacimiento:" + fechaNacimiento + ", sexo:" + sexo);
                        console.log("Tiene:" + edadlista.edad + " Años " + edadlista.meses + " Meses " + edadlista.dias + " Dias");
                        console.log("La fecha de calculo de edad es:" + hoyn);

                        if (sexo == "Masculino") {
                            hombre.checked = true;
                        } else {
                            if (sexo == "Femenino") {
                                mujer.checked = true;
                            } else {
                                sindefinido.checked = true;
                            }
                        }
                    })
                })


        }
    })

var basededatosbt = document.createElement('button');
basededatosbt.className = "btcont"
basededatosbt.innerHTML = 'Seleccionar base de datos actualizada';
basededatosbt.onclick = function () {
    // Prompt user for the file to convert
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.xls,.xlsx';
    fileInput.onchange = function () {
        var file = fileInput.files[0];
        // Read the file using FileReader
        var reader = new FileReader();
        reader.onload = function () {
            // Parse the Excel file using XLSX library
            var workbook = XLSX.read(reader.result, {
                type: 'binary'
            });
            // Iterate over all sheets in the workbook
            workbook.SheetNames.forEach(function (sheetName) {
                var sheet = workbook.Sheets[sheetName];
                // Convert the sheet to a 2D array
                var data = XLSX.utils.sheet_to_json(sheet);
                // Create a JSON object, where the first value of each row is the key
                var json = {};
                data.forEach(function (row) {
                    // Get the first value of the row
                    var key = row[Object.keys(row)[0]];
                    // Check if the key is defined
                    if (key === undefined) {
                        // If not, use the string "undefined" as the key
                        key = "undefined";
                    }
                    // Check if the key already exists in the JSON object
                    if (!json.hasOwnProperty(key)) {
                        // If not, create a new object for the key
                        json[key] = {};
                    }
                    // Add the values of the row to the object for the key
                    Object.keys(row).forEach(function (column) {
                        json[key][column] = row[column];
                    });
                });
                // Log the JSON object to the console for user to copy
                console.log(JSON.stringify(json, null, 4));
                setTimeout(function () { // Create a data URI for the JSON object
                    var dataURI = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json, null, 4));
                    // Create a download link and simulate a click on it
                    var downloadLink = document.createElement('a');
                    downloadLink.className = "btcont"
                    downloadLink.download = 'updated.svl';
                    downloadLink.href = dataURI;
                    downloadLink.click();
                    dialogTag.appendChild(downloadLink);
                }, 3000);
            });
        };
        reader.readAsBinaryString(file);
    };
    fileInput.click();
};

var reset = document.createElement('button');
reset.innerHTML = 'Reiniciar todo';
reset.className = "btcont"
reset.onclick = function () {
    if (confirm("¿Seguro quieres reiniciar todo y borrar datos guardados?")) {
        GM_setValue("url", "");
        GM_setValue("selected", "");
        GM_setValue("name", "")
        GM_setValue("ndb", "")
        GM_setValue("dep", "")
        GM_setValue("mun", "")
        document.location.reload();
    } else {
        console.log("El usuario cancelo el reinicio");
    }
}
var guardarurl = document.createElement('button');
guardarurl.innerHTML = 'Guardar url';
guardarurl.className = "btcont"
guardarurl.onclick = function () {
    let urlcl = document.querySelector('input[id="urlc"][type="text"]');
    GM_setValue('selected', " ")
    GM_setValue("url", urlcl.value)
    document.location.reload();
}
var urlin = document.createElement('div');
urlin.innerHTML = '<label for="urlc">Coloca el link de tu base de datos personal:</label><input type="text" class="inputcont" id="urlc"></input>';
urlin.className = "inputcont"
var close = document.createElement('a');
close.innerHTML = '<img id="cerrar"src="https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/icons/close.svg" alt="X"></img>';
close.onclick = function () {
    dialogTag.close()
}
let tstcompleto;
var ppartestst;
var ndbss;
function selects() {

    let tstlist = Object.keys(tst).length;

    for (var tstn = 1; tstn <= tstlist; tstn++) {
        let tstname = tst[tstn];
        if (tstname == null || tstname == "undefined") {
            tstcompleto = " "
            selectdbs.add(new Option(tstcompleto));
        } else {
            tstcompleto = tstn - 1 + "-" + tstname.name
            selectdbs.add(new Option(tstcompleto));
        }
    }
}
let labesdbs = document.createElement("label")
labesdbs.innerHTML = "Selecciona una de la lista:"
let labesdm = document.createElement("label")
labesdm.innerHTML = "Seleccionar Departamento y Municipio:"

let selectdbs = document.createElement("select")
selectdbs.onload = selects();
selectdbs.id = "sdbs"
selectdbs.className = "inputcont"
selectdbs.onchange = function () {
    partestst = selectdbs.value.split("-");
    ndbss = parseInt(partestst[0]) + 1;
}
var guardardb = document.createElement('button');
guardardb.innerHTML = 'Guardar';
guardardb.className = "btcont"
guardardb.onclick = function () {
    GM_setValue('selected', ndbss)
    GM_setValue("url", tst[ndbss].url);
    document.location.reload();
}
var divserlect = document.createElement('div');
divserlect.className = "inputcont"
divserlect.appendChild(labesdbs);
divserlect.appendChild(selectdbs);
var tstmunicipio = document.createElement("select");
tstmunicipio.id = "tsmunicipio"
tstmunicipio.className = "inputcont"

let seldep = document.createElement("select")
seldep.id = "tsdepartamento"
seldep.className = "inputcont"
seldep.innerHTML = '<option value="1">Ahuachapan</option><option value="9">Cabañas</option><option value="4">Chalatenango</option><option value="18">Costa Rica</option><option value="7">Cuscatlan</option><option value="15">Guatemala</option><option value="16">Honduras</option><option value="5">La Libertad</option><option value="8">La Paz</option><option value="14">La Union</option><option value="13">Morazan</option><option value="17">Nicaragua</option><option value="20">Otros Paises</option><option value="19">Panamá</option><option value="21">Salvadoreño Residente Exterior</option><option value="12">San Miguel</option><option value="6">San Salvador</option><option value="10">San Vicente</option><option value="2">Santa Ana</option><option value="3">Sonsonate</option><option value="11">Usulutan</option>'
seldep.onchange = function () {
    let selecteddep = document.querySelector('select[id="tsdepartamento"]').value;
    var intCount = cats.length;
    var n = 0;
    for (var i = 0; i < intCount; i++) {
        if (selecteddep == cats1[i]) {
            tstmunicipio[n++] = new Option(cats2[i], cats[i]);
        }
    }
}


var guardardepymun = document.createElement('button');
guardardepymun.innerHTML = 'Guardar Departamento y Municipio';
guardardepymun.className = "btcont"
guardardepymun.onclick = function () {
    let selecteddep = document.querySelector('select[id="tsdepartamento"]');
    let selectedmun = document.querySelector('select[id="tsmunicipio"]');
    GM_setValue("dep", selecteddep.value)
    GM_setValue("mun", selectedmun.value)
}

var tstdepartamento = document.createElement("div");
tstdepartamento.className = "inputcont"
tstdepartamento.appendChild(labesdm)
tstdepartamento.appendChild(seldep)
tstdepartamento.appendChild(tstmunicipio)



var info = document.createElement('div');
info.id = "maindiv"
info.innerHTML = '<div id="p-v"><h1>Autofillers Menú</h1></div>';
info.appendChild(close);
info.appendChild(urlin);
info.appendChild(guardarurl);
info.appendChild(basededatosbt);
info.appendChild(divserlect);
info.appendChild(guardardb);
info.appendChild(tstdepartamento);
info.appendChild(guardardepymun);

info.appendChild(reset);


var dialogTag = document.createElement("dialog");
dialogTag.id = "dialog-v"
dialogTag.appendChild(info);
document.body.appendChild(dialogTag);

var openDialogButton = document.createElement("a");
openDialogButton.id = "btmenu"
openDialogButton.innerHTML = "<span>Abrir menú</span>";
openDialogButton.onclick = function () {
    dialogTag.showModal();
}

let pmc = document.querySelector('center');
pmc.appendChild(openDialogButton);