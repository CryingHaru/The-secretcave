// ==UserScript==
// @name autofillers script
// @namespace Low 
// @version 1.6
// @updateURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @downloadURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @description autofiller
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js
// @author ASV
// @match https://simmow.salud.gob.sv/conrec.php*
// @grant unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
//Variables
const I = b;
(function (c, d) {
    const H = b,
    e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x10d)) / 0x1 * (parseInt(H(0xeb)) / 0x2) + -parseInt(H(0x10f)) / 0x3 + -parseInt(H(0xea)) / 0x4 * (-parseInt(H(0x115)) / 0x5) + -parseInt(H(0xf1)) / 0x6 + -parseInt(H(0x10a)) / 0x7 + -parseInt(H(0x12e)) / 0x8 * (parseInt(H(0x10b)) / 0x9) + parseInt(H(0xf2)) / 0xa * (parseInt(H(0x11e)) / 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}
    (a, 0x9546e));
let expediente = document[I(0x101)]('[name=\x22expe\x22]');
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0xe6;
        let h = e[f];
        return h;
    },
    b(c, d);
}
const departamento = document[I(0x101)](I(0x136)), municipio = document[I(0x101)](I(0x11d));
let edadaños = document[I(0x101)]('input[name=\x22edad\x22]'), edadmeses = document[I(0x101)]('input[name=\x22meses\x22]'), edaddias = document['querySelector'](I(0x119)), hombre = document[I(0x101)](I(0x116)), mujer = document[I(0x101)](I(0xf5)), sindefinido = document[I(0x101)](I(0xe9)), hoyn = document['querySelector']('input[name=\x22fecha\x22]')[I(0x102)], numerodeexpediente, consoleoutput, selectedlink = GM_getValue(I(0x109)), name = GM_getValue(I(0x123)), linkdatos = GM_getValue('url'), links = I(0x12a), ld;
fetch(links)[I(0x137)](c => {
    return c['json']();
})['then'](c => {
    const J = I;
    ld = c;
    if (selectedlink == null || selectedlink == '') {
        consoleoutput = J(0x110);
        let e = prompt('selecciona\x20la\x20base\x20de\x20datos(1,2)', '');
        e == null || e == '' ? console[J(0x125)](null) : (GM_setValue(J(0x109), e), GM_setValue(J(0x132), ld[e][J(0x132)]), GM_setValue(J(0x123), ld[e][J(0x123)]), console[J(0x125)](J(0x11a) + e + '\x20con\x20nombre:\x20' + ld[e][J(0x123)]), setTimeout(function () {
                const K = J;
                document[K(0x114)][K(0xff)]();
            }, 0x3e8));
    }
    console[J(0x125)](J(0x108) + selectedlink + J(0xfc) + name);
    if (linkdatos == null || linkdatos == '')
        consoleoutput = J(0x139);
    else {
        consoleoutput = J(0x100);
        let f,
        g;
        fetch(linkdatos)['then'](h => {
            const L = J;
            return h[L(0xe7)]();
        })[J(0x137)](h => {
            const M = J;
            f = h,
            expediente[M(0x11f)]('keyup', function (i) {
                const N = M;
                console[N(0xe8)](),
                numerodeexpediente = expediente[N(0x102)];
                const j = f[numerodeexpediente]['S'],
                k = f[numerodeexpediente]['F'],
                l = f[numerodeexpediente]['N'];
                let m = l['split'](','),
                n = m[0x0],
                o = m[0x1];
                hoyn = document[N(0x101)]('input[name=\x22fecha\x22]')[N(0x102)],
                departamento['value'] = 0xb,
                departamento[N(0x112)](new Event(N(0x106))),
                setTimeout(p, 0x3e8);
                function p() {
                    const O = N;
                    municipio[O(0x102)] = 0xb6,
                    municipio[O(0x112)](new Event('change'));
                }
                var q = k[N(0xf0)]('/'),
                r = parseInt(q[0x0]),
                s = parseInt(q[0x1]),
                t = parseInt(q[0x2]),
                u = hoyn[N(0xf0)]('/'),
                v = parseInt(u[0x0]),
                w = parseInt(u[0x1]),
                x = parseInt(u[0x2]);
                function y() {
                    const P = N;
                    let A = new Date(x, w, v),
                    B = new Date(t, s, r);
                    const C = A['getTime']() - B[P(0xf7)](),
                    D = Math[P(0x13b)](C / 0x757b12c00),
                    E = Math[P(0x13b)](C % 0x757b12c00 / 0x9ca41900),
                    F = Math['floor'](C % 0x757b12c00 % 0x9ca41900 / 0x5265c00);
                    var G = {
                        'edad': D,
                        'meses': E,
                        'dias': F
                    };
                    return G;
                }
                let z = y();
                z[N(0x130)] == 0x0 || z[N(0x130)] == undefined ? (edadaños['value'] = '', z[N(0xf8)] == 0x0 || z['meses'] == undefined ? (edadmeses[N(0x102)] = '', edaddias[N(0x102)] = z['dias']) : edadmeses[N(0x102)] = z['meses']) : edadaños[N(0x102)] = z['edad'],
                console[N(0x125)]('Nombre:' + l + N(0x105) + k + N(0xec) + j),
                console[N(0x125)](N(0x124) + z[N(0x130)] + N(0xfa) + z[N(0xf8)] + '\x20Meses\x20' + z[N(0x10c)] + N(0xf3)),
                console[N(0x125)](N(0x12d) + hoyn),
                j == N(0xef) ? hombre[N(0x111)] = !![] : j == N(0xed) ? mujer[N(0x111)] = !![] : sindefinido[N(0x111)] = !![];
            });
        });
        var d = document[J(0x122)](J(0x138));
        d[J(0x134)] = J(0x103),
        d[J(0x129)] = function () {
            const Q = J;
            var h = document[Q(0x122)](Q(0x121));
            h[Q(0x107)] = Q(0x127),
            h[Q(0x133)] = Q(0x12f),
            h[Q(0x135)] = function () {
                const R = Q;
                var i = h['files'][0x0],
                j = new FileReader();
                j[R(0xfe)] = function () {
                    const S = R;
                    var k = XLSX[S(0x117)](j['result'], {
                        'type': S(0x118)
                    });
                    k['SheetNames'][S(0xf6)](function (l) {
                        const T = S;
                        var m = k[T(0xfb)][l],
                        n = XLSX[T(0xee)][T(0x104)](m),
                        o = {};
                        n[T(0xf6)](function (p) {
                            const U = T;
                            var q = p[Object[U(0x120)](p)[0x0]];
                            q === undefined && (q = U(0x12c)),
                            !o[U(0x12b)](q) && (o[q] = {}),
                            Object[U(0x120)](p)[U(0xf6)](function (r) {
                                o[q][r] = p[r];
                            });
                        }),
                        console[T(0x125)](JSON[T(0xf9)](o, null, 0x4)),
                        setTimeout(function () {
                            const V = T;
                            var p = V(0x10e) + encodeURIComponent(JSON['stringify'](o, null, 0x4)),
                            q = document[V(0x122)]('a');
                            q[V(0x113)] = V(0x128),
                            q[V(0x13a)] = p,
                            q[V(0x11b)](),
                            document['body'][V(0x131)](q);
                        }, 0xbb8);
                    });
                },
                j[R(0xfd)](i);
            },
            h[Q(0x11b)]();
        },
        document[J(0x126)][J(0x131)](d);
    }
});
function a() {
    const X = ['accept', 'innerHTML', 'onchange', 'select[name=\x22p_dept\x22]', 'then', 'button', 'No\x20hay\x20ninguna\x20base\x20de\x20datos', 'href', 'floor', 'Reiniciar\x20todo', 'json', 'clear', 'input[name=\x22sex\x22][value=\x223\x22]', '8okxvJg', '5766YVZTni', ',\x20sexo:', 'Femenino', 'utils', 'Masculino', 'split', '1214304tigheB', '30310JYHTSL', '\x20Dias', 'El\x20usuario\x20cancelo\x20el\x20reinicio', 'input[name=\x22sex\x22][value=\x222\x22]', 'forEach', 'getTime', 'meses', 'stringify', '\x20Años\x20', 'Sheets', '\x20Con\x20nombre:\x20', 'readAsBinaryString', 'onload', 'reload', 'Base\x20de\x20datos\x20cargada', 'querySelector', 'value', 'Seleccionar\x20base\x20de\x20datos\x20actualizada', 'sheet_to_json', ',\x20Fecha\x20de\x20nacimiento:', 'change', 'type', 'Usando\x20base\x20de\x20datos:', 'selected', '3630081ZMlqrX', '9010467PXUjhL', 'dias', '398PEBoDd', 'data:application/json;charset=utf-8,', '271527qjpBGo', 'seleccionar\x20base\x20de\x20datos', 'checked', 'dispatchEvent', 'download', 'location', '1237615CVaLYp', 'input[name=\x22sex\x22][value=\x221\x22]', 'read', 'binary', 'input[name=\x22dias\x22]', 'seleccionada\x20la\x20base:\x20', 'click', '¿Seguro\x20quieres\x20eliminar\x20la\x20base\x20de\x20datos\x20y\x20el\x20token?', 'select[name=\x22p_muni\x22]', '11165IpUOtU', 'addEventListener', 'keys', 'input', 'createElement', 'name', 'Tiene:', 'log', 'body', 'file', 'updated.svl', 'onclick', 'https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/listds.svl', 'hasOwnProperty', 'undefined', 'La\x20fecha\x20de\x20calculo\x20de\x20edad\x20es:', '8Sjhfhm', '.xls,.xlsx', 'edad', 'appendChild', 'url'];
    a = function () {
        return X;
    };
    return a();
}
var reset = document[I(0x122)](I(0x138));
reset['innerHTML'] = I(0xe6), reset['onclick'] = function () {
    const W = I;
    confirm(W(0x11c)) ? (GM_setValue(W(0x132), ''), GM_setValue(W(0x109), ''), document[W(0x114)][W(0xff)]()) : console[W(0x125)](W(0xf4));
}, document['body'][I(0x131)](reset);
