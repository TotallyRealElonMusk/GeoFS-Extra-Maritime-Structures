// ==UserScript==
// @name         Geo-FS Extra Maritime Structures
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds extra maritime structures to GeoFS
// @author       Elon
// @match http://*/geofs.php*
// @match https://*/geofs.php*
// @run-at document-end
// @grant        none
// ==/UserScript==

const _0x4ddc51 = _0x3bca;
(function(_0x6684e, _0x3bb870) {
    const _0x2ba9b9 = _0x3bca,
        _0x312b31 = _0x6684e();
    while (!![]) {
        try {
            const _0x228e30 = -parseInt(_0x2ba9b9(0x120)) / 0x1 + -parseInt(_0x2ba9b9(0x17a)) / 0x2 + parseInt(_0x2ba9b9(0x15f)) / 0x3 * (parseInt(_0x2ba9b9(0x104)) / 0x4) + -parseInt(_0x2ba9b9(0x11b)) / 0x5 + parseInt(_0x2ba9b9(0x189)) / 0x6 + -parseInt(_0x2ba9b9(0x1a0)) / 0x7 + -parseInt(_0x2ba9b9(0x11c)) / 0x8 * (-parseInt(_0x2ba9b9(0x111)) / 0x9);
            if (_0x228e30 === _0x3bb870) break;
            else _0x312b31['push'](_0x312b31['shift']());
        } catch (_0x3e1e2f) {
            _0x312b31['push'](_0x312b31['shift']());
        }
    }
}(_0x80ea, 0x980f5));
let addonHandler, addonHandlerLink = _0x4ddc51(0x18e);
await fetch(addonHandlerLink)[_0x4ddc51(0x19a)](_0x311460 => _0x311460['text']())[_0x4ddc51(0x19a)](_0x537985 => addonHandler = _0x537985), eval(addonHandler), await new Promise(_0x8fa9c5 => setTimeout(_0x8fa9c5, 0x64));
window[_0x4ddc51(0x13c)] ? addons[_0x4ddc51(0x18b)] = !![] : alert(_0x4ddc51(0x12c));
let listData, listDataLink = _0x4ddc51(0xfb);
await fetch(listDataLink)[_0x4ddc51(0x19a)](_0x56732e => _0x56732e[_0x4ddc51(0x126)]())[_0x4ddc51(0x19a)](_0x1f4dd4 => listData = _0x1f4dd4);
let buildings, buildingsLink = _0x4ddc51(0x175);
await fetch(buildingsLink)[_0x4ddc51(0x19a)](_0x30fe2d => _0x30fe2d[_0x4ddc51(0x126)]())['then'](_0x331105 => buildings = _0x331105);
let collData, collDataLink = _0x4ddc51(0xf5);
await fetch(collDataLink)[_0x4ddc51(0x19a)](_0x3e2bcb => _0x3e2bcb[_0x4ddc51(0x126)]())['then'](_0x14e217 => collData = _0x14e217);
let colors = [_0x4ddc51(0x197), _0x4ddc51(0x17b), _0x4ddc51(0x141), _0x4ddc51(0xfa)];
window[_0x4ddc51(0x102)] = [];
let lightData, lightDataLink = _0x4ddc51(0x160);
await fetch(lightDataLink)[_0x4ddc51(0x19a)](_0x546714 => _0x546714['json']())[_0x4ddc51(0x19a)](_0xa2d580 => lightData = _0xa2d580);
let catapultData, catapultDataLink = 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/json%20files/catapults.json';
await fetch(catapultDataLink)['then'](_0x1b4b58 => _0x1b4b58['json']())[_0x4ddc51(0x19a)](_0x3bddaf => catapultData = _0x3bddaf), window[_0x4ddc51(0xf6)] = {}, collState[_0x4ddc51(0x11a)] = !![], collState[_0x4ddc51(0x15e)] = {}, collState[_0x4ddc51(0x15d)] = {};
const R = 6.378;
var EPSILON = 1.1102230246251565e-16,
    ERRBOUND3 = (0x3 + 0x10 * EPSILON) * EPSILON;
let prevObj = [{
        'name': _0x4ddc51(0x13b)
    }],
    lightSettings = {
        'altitudeMode': 'ALTITUDE_RELATIVE',
        'sizeInMeters': ![],
        'scaleByDistance': {
            'near': 0x1,
            'nearValue': 0.1,
            'far': 0x1f4,
            'farValue': 0.06
        }
    };

function main() {
    let _0x3b3a44 = setInterval(function() {
        updateBuildings(), checkCarrier(), catapultMain();
    }, 0x3e8);
}

function secondMain() {
    let _0x52d917 = setInterval(function() {
        editCoords();
    }, 0x1388);
}
async function updateBuildings(_0x470cc3) {
    const _0x2b641c = _0x4ddc51;
    let _0x5ce5c0 = [],
        _0x2ba4de = addBuildings();
    for (let _0x4890db = 0x0; _0x4890db < geofs[_0x2b641c(0x146)][_0x2b641c(0x16c)][_0x2b641c(0x12a)]; _0x4890db++) {
        _0x5ce5c0[_0x4890db] = geofs[_0x2b641c(0x146)]['objectList'][_0x4890db];
    }
    _0x5ce5c0 = await getOld(_0x5ce5c0);
    let _0x238d9f = checkIfSame(_0x5ce5c0, _0x2ba4de);
    if (_0x238d9f == ![] && !_0x470cc3) {
        let _0x119ac3 = await removeOld(geofs['objects']['objectList']);
        geofs[_0x2b641c(0x146)][_0x2b641c(0x16c)] = _0x119ac3;
        let _0x5a2d5c = [];
        for (let _0xf88133 = 0x0; _0xf88133 < _0x2ba4de[_0x2b641c(0x12a)]; _0xf88133++) {
            _0x5a2d5c[_0xf88133] = _0x2ba4de[_0xf88133];
        }
        geofs['objects'][_0x2b641c(0x19f)]();
        for (let _0x1e5af6 = 0x0; _0x1e5af6 < _0x5a2d5c[_0x2b641c(0x12a)]; _0x1e5af6++) {
            geofs['objects']['objectList']['push'](_0x5a2d5c[_0x1e5af6]);
        }
        geofs[_0x2b641c(0x146)][_0x2b641c(0x17c)](), geofs[_0x2b641c(0x146)][_0x2b641c(0x154)](), geofs[_0x2b641c(0x146)][_0x2b641c(0x191)]();
    } else {
        if (_0x470cc3) {
            let _0x3038a4 = await removeOld(geofs[_0x2b641c(0x146)][_0x2b641c(0x16c)]);
            geofs[_0x2b641c(0x146)][_0x2b641c(0x16c)] = _0x3038a4;
            let _0x5956bf = [];
            for (let _0x16dee9 = 0x0; _0x16dee9 < _0x2ba4de[_0x2b641c(0x12a)]; _0x16dee9++) {
                _0x5956bf[_0x16dee9] = _0x2ba4de[_0x16dee9];
            }
            geofs[_0x2b641c(0x146)]['unloadModels']();
            for (let _0x4e2c9e = 0x0; _0x4e2c9e < _0x5956bf[_0x2b641c(0x12a)]; _0x4e2c9e++) {
                geofs['objects'][_0x2b641c(0x16c)][_0x2b641c(0x121)](_0x5956bf[_0x4e2c9e]);
            }
            geofs['objects'][_0x2b641c(0x17c)](), geofs[_0x2b641c(0x146)][_0x2b641c(0x154)](), geofs[_0x2b641c(0x146)][_0x2b641c(0x191)]();
        }
    }
}
async function spawnHTML() {
    const _0x2d42f7 = _0x4ddc51;
    var _0x437dfb = await createList();
    let _0x4779e8 = document[_0x2d42f7(0x196)](_0x2d42f7(0x187));
    _0x4779e8[_0x2d42f7(0x137)] = _0x2d42f7(0x148) + _0x437dfb + _0x2d42f7(0xf8);
    let _0x539c27 = document['getElementsByClassName'](_0x2d42f7(0x193))[0x0];
    document[_0x2d42f7(0x10c)]('geofs-ui-left')[0x0]['appendChild'](_0x4779e8);
    let _0x5a899e = document['createElement'](_0x2d42f7(0x187));
    _0x5a899e['innerHTML'] = _0x2d42f7(0x109), document['body']['appendChild'](_0x5a899e), document[_0x2d42f7(0x10c)](_0x2d42f7(0x173))[0x0]['appendChild'](_0x5a899e);
    let _0x22b9f0 = document[_0x2d42f7(0x1a8)](_0x2d42f7(0x14c));
    document[_0x2d42f7(0x10c)](_0x2d42f7(0x173))[0x0][_0x2d42f7(0x185)](_0x22b9f0, _0x5a899e);
}
async function createList() {
    const _0x44793c = _0x4ddc51;
    let _0x5f52be = _0x44793c(0xff);
    for (let _0x4d65c1 = 0x0; _0x4d65c1 < listData['length']; _0x4d65c1++) {
        _0x5f52be += '<option\x20value=' + _0x4d65c1 + '>' + listData[_0x4d65c1]['name'] + '</option>';
    }
    return _0x5f52be += '\x20\x20</select>', _0x5f52be;
}
window[_0x4ddc51(0x18f)] = () => {
    const _0x579081 = _0x4ddc51;
    let _0x2bdf9e = document['getElementById'](_0x579081(0xfd))[_0x579081(0x156)];
    if (_0x2bdf9e != 0x0 && _0x2bdf9e != 0x7 && _0x2bdf9e != 0xa) {
        let _0x2d9f04 = [],
            _0x242196 = geofs[_0x579081(0x15a)][_0x579081(0xef)][_0x579081(0x115)];
        _0x2d9f04[_0x579081(0x121)]([_0x242196[0x0], _0x242196[0x1]]), _0x2d9f04[_0x579081(0x121)]([listData[_0x2bdf9e]['location'][0x0], listData[_0x2bdf9e]['location'][0x1]]), geofs['api'][_0x579081(0x149)]['setPathPoints'](_0x2d9f04), geofs[_0x579081(0x132)][_0x579081(0x149)][_0x579081(0x10a)]();
    }
}, window[_0x4ddc51(0x118)] = () => {
    const _0x438cd5 = _0x4ddc51;
    let _0x2f24b1 = document[_0x438cd5(0x1a8)]('structureSelect')['value'];
    _0x2f24b1 != 0x0 && _0x2f24b1 != 0x7 && _0x2f24b1 != 0xa && (geofs[_0x438cd5(0x106)](listData[_0x2f24b1][_0x438cd5(0x151)]), updateBuildings('placeholder'), geofs['objects'][_0x438cd5(0x19f)](), nodeState = {});
}, window[_0x4ddc51(0x1a5)] = () => {
    const _0x21c6b8 = _0x4ddc51;
    let _0x1013db = document[_0x21c6b8(0x1a8)]('structureSelect')[_0x21c6b8(0x156)];
    _0x1013db != 0x0 && _0x1013db != 0x7 && _0x1013db != 0xa && (geofs['flyTo'](listData[_0x1013db]['flyLocation']), updateBuildings('placeholder'), geofs[_0x21c6b8(0x146)]['unloadModels'](), nodeState = {});
};

function addBuildings() {
    const _0x14cd18 = _0x4ddc51;
    let _0x1d7f92 = {
            'latitude': geofs[_0x14cd18(0x15a)][_0x14cd18(0xef)]['llaLocation'][0x0],
            'longitude': geofs[_0x14cd18(0x15a)][_0x14cd18(0xef)][_0x14cd18(0x115)][0x1]
        },
        _0x570dee, _0x134156 = [];
    for (let _0x4e8f31 = 0x0; _0x4e8f31 < buildings[_0x14cd18(0x12a)]; _0x4e8f31++) {
        _0x570dee = {
            'latitude': buildings[_0x4e8f31][_0x14cd18(0x151)][0x0],
            'longitude': buildings[_0x4e8f31]['location'][0x1]
        };
        let _0x4e708d = calculateDistance(_0x1d7f92, _0x570dee);
        _0x4e708d < 0xc350 && _0x134156[_0x14cd18(0x121)](JSON[_0x14cd18(0x100)](JSON['stringify'](buildings[_0x4e8f31])));
    }
    return _0x134156;
}

function getOld(_0x1b6b66) {
    const _0x584011 = _0x4ddc51;
    let _0x5ef679 = [],
        _0x2fb08a = [];
    if (_0x1b6b66[_0x584011(0x12a)] != 0x0) {
        for (let _0x2b7be3 = 0x0; _0x2b7be3 < _0x1b6b66[_0x584011(0x12a)]; _0x2b7be3++) {
            for (let _0x256bb6 = 0x0; _0x256bb6 < buildings[_0x584011(0x12a)]; _0x256bb6++) {
                try {
                    _0x1b6b66[_0x2b7be3][_0x584011(0x11f)] == buildings[_0x256bb6][_0x584011(0x11f)] && _0x5ef679['push'](_0x2b7be3);
                } catch (_0x427e35) {}
            }
        }
        _0x2fb08a = [];
        for (let _0x2695d5 = 0x0; _0x2695d5 < _0x5ef679[_0x584011(0x12a)]; _0x2695d5++) {
            _0x2fb08a[_0x2695d5] = _0x1b6b66[_0x5ef679[_0x2695d5]];
        }
    }
    return _0x2fb08a;
}

function removeOld(_0x4e646a) {
    const _0x57f7e0 = _0x4ddc51;
    let _0x2abe65 = [];
    if (_0x4e646a['length'] != 0x0) {
        for (let _0x3aadb0 = 0x0; _0x3aadb0 < _0x4e646a[_0x57f7e0(0x12a)]; _0x3aadb0++) {
            for (let _0x5525b6 = 0x0; _0x5525b6 < buildings[_0x57f7e0(0x12a)]; _0x5525b6++) {
                try {
                    _0x4e646a[_0x3aadb0][_0x57f7e0(0x11f)] == buildings[_0x5525b6][_0x57f7e0(0x11f)] && _0x2abe65['push'](_0x3aadb0);
                } catch (_0xe3179b) {}
            }
        }
        _0x2abe65[_0x57f7e0(0x12f)]();
        for (let _0x23cc6a = 0x0; _0x23cc6a < _0x2abe65[_0x57f7e0(0x12a)]; _0x23cc6a++) {
            _0x4e646a[_0x57f7e0(0x1a6)](_0x2abe65[_0x23cc6a], 0x1);
        }
        return _0x4e646a;
    } else return _0x4e646a;
}

function calculateDistance(_0x3a48ee, _0x4a9d5a) {
    const _0x461468 = _0x4ddc51;
    let _0x26c1d6 = _0x3a48ee[_0x461468(0x176)] * (Math['PI'] / 0xb4),
        _0x53ea24 = _0x4a9d5a[_0x461468(0x176)] * (Math['PI'] / 0xb4),
        _0x2b3fd8 = _0x3a48ee[_0x461468(0x142)] * (Math['PI'] / 0xb4),
        _0x17eb2b = _0x4a9d5a[_0x461468(0x142)] * (Math['PI'] / 0xb4),
        _0x17bea6 = _0x53ea24 - _0x26c1d6,
        _0x2c94d9 = _0x17eb2b - _0x2b3fd8,
        _0x44ef68 = Math['sin'](_0x17bea6 / 0x2) * Math[_0x461468(0x14a)](_0x17bea6 / 0x2) + Math[_0x461468(0x108)](_0x26c1d6) * Math['cos'](_0x53ea24) * Math['sin'](_0x2c94d9 / 0x2) * Math[_0x461468(0x14a)](_0x2c94d9 / 0x2),
        _0xcdb81 = 0x2 * Math[_0x461468(0x180)](Math[_0x461468(0x17e)](_0x44ef68), Math[_0x461468(0x17e)](0x1 - _0x44ef68)),
        _0x2c8f57 = 0x6136b8;
    return _0x2c8f57 * _0xcdb81;
}

function editCoords() {
    const _0x2a28a8 = _0x4ddc51;
    if (typeof geofs[_0x2a28a8(0x146)][_0x2a28a8(0x16c)][0x0] !== _0x2a28a8(0x12d)) {
        if (typeof geofs[_0x2a28a8(0x146)][_0x2a28a8(0x16c)][0x0][_0x2a28a8(0x11f)] !== 'undefined') {
            if (geofs[_0x2a28a8(0x146)]['objectList'][0x0][_0x2a28a8(0x11f)] == _0x2a28a8(0x11a)) {
                if (collState[_0x2a28a8(0x11a)] == !![]) {
                    if (geofs[_0x2a28a8(0x15a)][_0x2a28a8(0xef)][_0x2a28a8(0x115)][0x2] < 0x14) {
                        let _0x4bd9d5 = checkIfPointIsInSquare(geofs[_0x2a28a8(0x146)][_0x2a28a8(0x16c)][0x0][_0x2a28a8(0x151)], geofs[_0x2a28a8(0x15a)][_0x2a28a8(0xef)][_0x2a28a8(0x115)], collData[_0x2a28a8(0x11a)][_0x2a28a8(0x145)]);
                        _0x4bd9d5 == !![] && lowerCollCG57();
                    }
                } else {
                    let _0x4b3a94 = checkIfPointIsInSquare(geofs['objects'][_0x2a28a8(0x16c)][0x0][_0x2a28a8(0x151)], geofs[_0x2a28a8(0x15a)]['instance'][_0x2a28a8(0x115)], collData[_0x2a28a8(0x11a)][_0x2a28a8(0x145)]);
                    _0x4b3a94 == ![] ? normalizeCollCG57() : geofs[_0x2a28a8(0x15a)][_0x2a28a8(0xef)][_0x2a28a8(0x115)][0x2] > 0x14 && normalizeCollCG57();
                }
            }
        }
    }
}

function lowerCollCG57() {
    const _0x3328d3 = _0x4ddc51;
    for (let _0x3a77cd = 0x0; _0x3a77cd < collData[_0x3328d3(0x11a)]['positions'][_0x3328d3(0x12a)]; _0x3a77cd++) {
        for (let _0x2bd056 = 0x0; _0x2bd056 < 0x3; _0x2bd056++) {
            geofs[_0x3328d3(0x146)][_0x3328d3(0x16c)][0x0][_0x3328d3(0x105)][collData[_0x3328d3(0x11a)]['positions'][_0x3a77cd]][_0x2bd056][0x2] = 11.292;
        }
    }
    geofs[_0x3328d3(0x146)][_0x3328d3(0x154)]();
}

function normalizeCollCG57() {
    const _0x54c5a0 = _0x4ddc51;
    for (let _0x1535f5 = 0x0; _0x1535f5 < collData[_0x54c5a0(0x11a)][_0x54c5a0(0x13d)]['length']; _0x1535f5++) {
        for (let _0x2c484a = 0x0; _0x2c484a < 0x3; _0x2c484a++) {
            geofs[_0x54c5a0(0x146)][_0x54c5a0(0x16c)][0x0]['collisionTriangles'][collData[_0x54c5a0(0x11a)]['positions'][_0x1535f5]][_0x2c484a][0x2] = 22.199;
        }
    }
    geofs[_0x54c5a0(0x146)][_0x54c5a0(0x154)]();
}

function checkIfSame(_0x1d27f6, _0x1b1a66) {
    const _0x3fcbc2 = _0x4ddc51;
    if (_0x1d27f6['length'] != _0x1b1a66['length']) return ![];
    else {
        if (_0x1d27f6[_0x3fcbc2(0x12a)] == 0x0) return !![];
        else return _0x1d27f6[0x0][_0x3fcbc2(0x11f)] == _0x1b1a66[0x0][_0x3fcbc2(0x11f)] ? !![] : ![];
    }
}

function _0x3bca(_0x141198, _0x4f1ec3) {
    const _0x80eae7 = _0x80ea();
    return _0x3bca = function(_0x3bca6f, _0x3c5aa1) {
        _0x3bca6f = _0x3bca6f - 0xed;
        let _0x2dcf9 = _0x80eae7[_0x3bca6f];
        return _0x2dcf9;
    }, _0x3bca(_0x141198, _0x4f1ec3);
}

function latLonToMercator(_0x553576, _0x447b39) {
    const _0x3fc20f = _0x4ddc51;
    let _0x5a4079 = _0x447b39 * 20037508.34 / 0xb4,
        _0x15bb7b = Math['log'](Math[_0x3fc20f(0x18a)]((0x5a + _0x553576) * Math['PI'] / 0x168)) / (Math['PI'] / 0xb4);
    return _0x15bb7b = _0x15bb7b * 20037508.34 / 0xb4, [_0x5a4079, _0x15bb7b];
}

function isPointInSquare(_0x2bd0ca, _0x2b7541, _0x4ef418, _0x231c8b, _0x655f71, _0x4ab914) {
    if (_0x4ef418 <= _0x2bd0ca && _0x2bd0ca <= _0x655f71) {
        if (_0x231c8b <= _0x2b7541 && _0x2b7541 <= _0x4ab914) return !![];
    }
    return ![];
}

function checkIfPointIsInSquare(_0x9734df, _0x28f388, _0x139843) {
    let _0x37e046 = latLonToMercator(_0x9734df[0x0], _0x9734df[0x1]),
        _0x3ed0ad = latLonToMercator(_0x28f388[0x0], _0x28f388[0x1]),
        _0x11fc93 = _0x3ed0ad[0x0] - _0x37e046[0x0],
        _0x1f09eb = _0x3ed0ad[0x1] - _0x37e046[0x1],
        _0x31ecf5 = isPointInSquare(-_0x11fc93, _0x1f09eb, _0x139843[0x0], _0x139843[0x1], _0x139843[0x2], _0x139843[0x3]);
    return _0x31ecf5;
}
window[_0x4ddc51(0x19b)] = function(_0x254e63) {
    clickedNodeHandler(_0x254e63);
};

function resetNodeState() {
    const _0xc780c2 = _0x4ddc51;
    for (const [_0x59e2d5, _0x40b825] of Object[_0xc780c2(0x164)](nodeState)) {
        resetNodes(_0x59e2d5);
    }
}

function resetNodes(_0x4662c6) {
    const _0x8aace9 = _0x4ddc51;
    nodeState[_0x4662c6][_0x8aace9(0x15b)] = 'up', nodeState[_0x4662c6]['moving'] = ![];
}
window['nodeState'] = {};

function clickedNodeHandler(_0x2a9840) {
    const _0x136071 = _0x4ddc51;
    if (geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x136071(0x12a)] != 0x0) {
        let _0x2663c0 = [];
        for (let _0x2b4a00 = 0x0; _0x2b4a00 < geofs['objects'][_0x136071(0x16c)][_0x136071(0x12a)]; _0x2b4a00++) {
            _0x2663c0[_0x136071(0x121)](geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x2b4a00]['name'] || _0x136071(0x13b));
        }
        let _0x575849, _0x25f7e2 = ![];
        for (let _0x3d54f1 = 0x0; _0x3d54f1 < collData['carriers']['length']; _0x3d54f1++) {
            _0x2663c0[_0x136071(0x182)](collData[_0x136071(0x10b)][_0x3d54f1]) > -0x1 && (_0x575849 = _0x2663c0[_0x136071(0x182)](collData[_0x136071(0x10b)][_0x3d54f1]), _0x25f7e2 = !![]);
        }
        if (_0x25f7e2 == !![]) {
            let _0x51d3f2 = geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x575849][_0x136071(0x11f)];
            for (let _0x37bf44 = 0x0; _0x37bf44 < collData[_0x51d3f2]['touchNodes'][_0x136071(0x12a)]; _0x37bf44++) {
                if (_0x2a9840 == collData[_0x51d3f2][_0x136071(0x127)][_0x37bf44]) {
                    !nodeState[_0x51d3f2] && (nodeState[_0x51d3f2] = {});
                    !nodeState[_0x51d3f2][_0x2a9840] && (nodeState[_0x51d3f2][_0x2a9840] = {}, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x135)] = geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x575849], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x11f)] = collData[_0x51d3f2][_0x136071(0x17f)][_0x37bf44], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] = 'up', nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] = ![], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x15b)] = 0x0, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x140)] = 0xf, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x13e)] = !![], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x10e)] = [0x0, 0x0, 0x0], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x158)] = collData[_0x51d3f2][_0x136071(0x158)], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x151)] = collData[_0x51d3f2][_0x136071(0x151)], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x16f)] = _0x575849, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x16d)] = collData[_0x51d3f2]['collAlt'], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x131)] = 0x1, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x1a4)] = !![], nodeState[_0x51d3f2][_0x2a9840]['animatable'] = !![]);
                    if (nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] == 'up' && nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] == ![]) console[_0x136071(0x113)](nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x15b)]), nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x139)] = 0x1, setPartAnimationDelta(nodeState[_0x51d3f2][_0x2a9840]), nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] = _0x136071(0xf9), nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] = !![];
                    else nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] == _0x136071(0xf9) && nodeState[_0x51d3f2][_0x2a9840]['moving'] == ![] && (nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x139)] = 0x0, setPartAnimationDelta(nodeState[_0x51d3f2][_0x2a9840]), nodeState[_0x51d3f2][_0x2a9840]['positionReadable'] = 'up', nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] = !![]);
                }
            }
            for (let _0x325489 = 0x0; _0x325489 < collData[_0x51d3f2][_0x136071(0x10f)][_0x136071(0x12a)]; _0x325489++) {
                if (_0x2a9840 == collData[_0x51d3f2][_0x136071(0x10f)][_0x325489]) {
                    !nodeState[_0x51d3f2] && (nodeState[_0x51d3f2] = {});
                    if (!nodeState[_0x51d3f2][_0x2a9840]) {
                        nodeState[_0x51d3f2][_0x2a9840] = {}, nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x135)] = geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x575849], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x11f)] = collData[_0x51d3f2][_0x136071(0x10f)][_0x325489], nodeState[_0x51d3f2][_0x2a9840]['positionReadable'] = 'up', nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] = ![], nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x15b)] = 0x0;
                        for (let _0x166fb6 = 0x0; _0x166fb6 < collData[_0x51d3f2][_0x136071(0x188)][_0x325489]['length']; _0x166fb6++) {
                            nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]] = {}, nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x135)] = geofs[_0x136071(0x146)][_0x136071(0x16c)][_0x575849], nodeState[_0x51d3f2][collData[_0x51d3f2]['JBD'][_0x325489][_0x166fb6]][_0x136071(0x11f)] = collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6], nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x177)] = 'up', nodeState[_0x51d3f2][collData[_0x51d3f2]['JBD'][_0x325489][_0x166fb6]][_0x136071(0x170)] = ![], nodeState[_0x51d3f2][collData[_0x51d3f2]['JBD'][_0x325489][_0x166fb6]][_0x136071(0x15b)] = 0x0, nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x140)] = 0x7, nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x158)] = 0x0, nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]]['location'] = [0x0, 0x0, 0x0], nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]]['rotation'] = collData[_0x51d3f2][_0x136071(0x19c)][_0x166fb6], nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x130)] = collData[_0x51d3f2], nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x131)] = 0x0, nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x166fb6]][_0x136071(0x13a)] = !![];
                        }
                    }
                    if (nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] == 'up' && nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] == ![]) {
                        for (let _0x399f3a = 0x0; _0x399f3a < collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x136071(0x12a)]; _0x399f3a++) {
                            nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x399f3a]][_0x136071(0x139)] = 0x1, setPartAnimationDelta(nodeState[_0x51d3f2][collData[_0x51d3f2]['JBD'][_0x325489][_0x399f3a]]);
                        }
                        nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] = _0x136071(0xf9), nodeState[_0x51d3f2][_0x2a9840]['moving'] = !![];
                    } else {
                        if (nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] == _0x136071(0xf9) && nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x170)] == ![]) {
                            for (let _0x42f4dc = 0x0; _0x42f4dc < collData[_0x51d3f2]['JBD'][_0x325489][_0x136071(0x12a)]; _0x42f4dc++) {
                                nodeState[_0x51d3f2][collData[_0x51d3f2][_0x136071(0x188)][_0x325489][_0x42f4dc]][_0x136071(0x139)] = 0x0, setPartAnimationDelta(nodeState[_0x51d3f2][collData[_0x51d3f2]['JBD'][_0x325489][_0x42f4dc]]);
                            }
                            nodeState[_0x51d3f2][_0x2a9840][_0x136071(0x177)] = 'up', nodeState[_0x51d3f2][_0x2a9840]['moving'] = !![];
                        }
                    }
                }
            }
        }
    }
}
collState[_0x4ddc51(0x162)] = async function(_0x5bd04f, _0xfad880, _0xeb528b, _0x3cf89e, _0xe91c06, _0xfbd9e2) {
    const _0x3744f6 = _0x4ddc51;
    console[_0x3744f6(0x113)](_0xfbd9e2);
    if (geofs[_0x3744f6(0x15a)][_0x3744f6(0xef)][_0x3744f6(0x115)][0x2] > collData[_0xfad880][_0x3744f6(0xf4)]) {
        let _0x23ab3c = [];
        for (let _0x3a1437 = 0x0; _0x3a1437 < collData[_0xfad880][_0x3744f6(0x167)]['length']; _0x3a1437++) {
            _0x23ab3c[_0x3744f6(0x121)](classifyPointMain(_0xfad880, _0x3a1437));
        }
        let _0x52beac;
        for (let _0x2a19e3 = 0x0; _0x2a19e3 < _0x23ab3c[_0x3744f6(0x12a)]; _0x2a19e3++) {
            _0x23ab3c[_0x2a19e3] == -0x1 && _0x5bd04f == _0x3cf89e[_0x2a19e3] && (_0x52beac = !![]);
        }
        if (_0x52beac == !![]) {
            let _0x53872e = collData[_0xfad880][_0x3744f6(0x158)] / 0x3e8 * _0xfbd9e2,
                _0x288835 = _0xe91c06 / 0x3e8;
            for (let _0x24f298 = 0x0; _0x24f298 < 0x3e8; _0x24f298++) {
                for (let _0x341025 = 0x0; _0x341025 < geofs['objects'][_0x3744f6(0x16c)][_0xeb528b][_0x3744f6(0x105)][_0x3744f6(0x12a)]; _0x341025++) {
                    for (let _0x21b33c = 0x0; _0x21b33c < 0x3; _0x21b33c++) {
                        geofs[_0x3744f6(0x146)][_0x3744f6(0x16c)][_0xeb528b][_0x3744f6(0x105)][_0x341025][_0x21b33c][0x2] += _0x53872e, geofs[_0x3744f6(0x146)][_0x3744f6(0x154)]();
                    }
                }
                await sleep(_0x288835);
            }
            for (let _0x40eef5 = _0xeb528b - 0x4; _0x40eef5 < _0xeb528b; _0x40eef5++) {
                geofs[_0x3744f6(0x146)][_0x3744f6(0x16c)][_0x40eef5][_0x3744f6(0x105)][0x0][0x0][0x2] = -0x14, geofs[_0x3744f6(0x146)][_0x3744f6(0x16c)][_0x40eef5][_0x3744f6(0x105)][0x0][0x1][0x2] = -0x14, geofs[_0x3744f6(0x146)][_0x3744f6(0x16c)][_0x40eef5][_0x3744f6(0x105)][0x0][0x2][0x2] = -0x14, geofs[_0x3744f6(0x146)][_0x3744f6(0x16c)][_0x40eef5][_0x3744f6(0x105)][0x1][0x0][0x2] = -0x14, geofs['objects']['objectList'][_0x40eef5]['collisionTriangles'][0x1][0x1][0x2] = -0x14, geofs['objects']['objectList'][_0x40eef5][_0x3744f6(0x105)][0x1][0x2][0x2] = -0x14;
            }
            geofs[_0x3744f6(0x146)][_0x3744f6(0x154)]();
        }
    }
};

function resetWireCollisions(_0x4029df) {
    const _0x560302 = _0x4ddc51;
    let _0x4c7d00, _0x1807ed = _0x4029df[_0x560302(0x16f)];
    _0x4029df[_0x560302(0x15b)] == 0x1 ? _0x4c7d00 = -0x14 : _0x4c7d00 = 0x0, console['log'](_0x560302(0x10d) + _0x4c7d00);
    for (let _0x17e82b = _0x1807ed - 0x4; _0x17e82b < _0x1807ed; _0x17e82b++) {
        geofs['objects'][_0x560302(0x16c)][_0x17e82b][_0x560302(0x105)][0x0][0x0][0x2] = _0x4c7d00, geofs['objects']['objectList'][_0x17e82b]['collisionTriangles'][0x0][0x1][0x2] = _0x4c7d00, geofs[_0x560302(0x146)][_0x560302(0x16c)][_0x17e82b]['collisionTriangles'][0x0][0x2][0x2] = _0x4c7d00, geofs[_0x560302(0x146)][_0x560302(0x16c)][_0x17e82b][_0x560302(0x105)][0x1][0x0][0x2] = _0x4c7d00, geofs[_0x560302(0x146)][_0x560302(0x16c)][_0x17e82b][_0x560302(0x105)][0x1][0x1][0x2] = _0x4c7d00, geofs[_0x560302(0x146)][_0x560302(0x16c)][_0x17e82b][_0x560302(0x105)][0x1][0x2][0x2] = _0x4c7d00;
    }
    geofs['objects']['updateCollidables']();
}
window[_0x4ddc51(0x150)] = {};
let intervalCount = 0x0;
window[_0x4ddc51(0xfe)] = {};

function setPartAnimationDelta(_0x46f624) {
    const _0x4f6d54 = _0x4ddc51;
    _0x46f624['delta'] = _0x46f624[_0x4f6d54(0x139)] - _0x46f624[_0x4f6d54(0x15b)];
};

function animatePart(_0x1feba2, _0x1d9686) {
    const _0x5d9ec5 = _0x4ddc51;
    var _0x49d380 = _0x1feba2[_0x5d9ec5(0x139)];
    if (_0x1feba2['position'] != _0x49d380 && _0x1feba2[_0x5d9ec5(0x140)]) {
        _0x1feba2[_0x5d9ec5(0x15b)] += _0x1feba2['delta'] / (_0x1feba2[_0x5d9ec5(0x140)] / _0x1d9686);
        if (0x0 > _0x1feba2[_0x5d9ec5(0x159)] && _0x1feba2[_0x5d9ec5(0x15b)] <= _0x49d380) _0x1feba2[_0x5d9ec5(0x15b)] = _0x49d380, _0x1feba2[_0x5d9ec5(0x159)] = null, _0x1feba2[_0x5d9ec5(0x170)] = ![], _0x1feba2['movingCollision'] ? (_0x1feba2[_0x5d9ec5(0x190)] = ![], _0x1feba2[_0x5d9ec5(0x1a4)] ? resetWireCollisions(_0x1feba2) : null) : null;
        else 0x0 < _0x1feba2[_0x5d9ec5(0x159)] && _0x1feba2[_0x5d9ec5(0x15b)] >= _0x49d380 && (_0x1feba2['position'] = _0x49d380, _0x1feba2['delta'] = null, _0x1feba2[_0x5d9ec5(0x170)] = ![], _0x1feba2['movingCollision'] ? (_0x1feba2[_0x5d9ec5(0x190)] = ![], _0x1feba2[_0x5d9ec5(0x1a4)] ? resetWireCollisions(_0x1feba2) : null) : null);
    }
}

function animationHandler(_0x140de4, _0x5ef7eb) {
    const _0x42bfb7 = _0x4ddc51;
    let _0x3328e8 = nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x135)][_0x42bfb7(0x135)][_0x42bfb7(0x11d)](nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x11f)]),
        _0x4ab0ec = [nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x151)][0x0] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)], nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x151)][0x1] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)], nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x151)][0x2] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)]],
        _0x4a0c47 = [nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x10e)][0x0] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)], nodeState[_0x140de4][_0x5ef7eb]['rotation'][0x1] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)], nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x10e)][0x2] * nodeState[_0x140de4][_0x5ef7eb][_0x42bfb7(0x15b)]];
    geofs[_0x42bfb7(0x132)]['setNodeRotationTranslationScale'](_0x3328e8, M33['setFromEuler'](V3[_0x42bfb7(0xf0)](_0x4a0c47)), _0x4ab0ec, [0x1, 0x1, 0x1]);
}

function _0x80ea() {
    const _0x4654af = ['preProcessObjects', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=780,height=300,top=', 'sqrt', 'actualNodes', 'atan2', 'atan', 'indexOf', 'animation', '\x27)\x22>', 'insertBefore', '_lla', 'div', 'JBD', '2767956DGLzGd', 'tan', 'maritime', 'close', '</p>', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Addon-Handler/main/main.js', 'loadOnMap', 'movingCollision', 'loadModels', 'forEach', 'geofs-ui-left', '_billboard', 'applyCentralImpulse', 'createElement', 'blue', 'barKey', 'key', 'then', 'internalNodeHandlerMaritime', 'JBDAnglesPos', 'launchKey', 'includes', 'unloadModels', '8559698pCKFzG', '\x27)\x22>Toggle\x20Lights</button></p>', 'reset', 'inCarrierPlane', 'resetCollisions', 'apporachSpawn', 'splice', '<button\x20class=\x22center\x22\x20type=\x22button\x22\x20onclick=\x22turnLightOn(\x27', 'getElementById', 'winButtons', 'values', 'keypress', 'instance', 'toRadians', 'setup', 'max', '<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20.mdl-button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x200\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x2064px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x22Roboto\x22,\x22Helvetica\x22,\x22Arial\x22,sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20will-change:\x20box-shadow;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20box-shadow\x20.2s\x20cubic-bezier(.4,0,1,1),background-color\x20.2s\x20cubic-bezier(.4,0,.2,1),color\x20.2s\x20cubic-bezier(.4,0,.2,1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertical-align:\x20middle;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.center\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20verdana;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'refAlt', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/json%20files/collisionSettings.json', 'collState', '3460', '</p>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22mdl-button\x22\x20mdl-js-button\x20mdl-button—raised\x20mdl-button—colored\x20onclick=\x22loadOnMap()\x22\x20data-upgraded=\x22,MaterialButton\x22>Get\x20direction\x20to\x20structure</button>\x0a\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22mdl-button\x22\x20mdl-js-button\x20mdl-button—raised\x20mdl-button—colored\x20onclick=\x22runwaySpawn()\x22\x20data-upgraded=\x22,MaterialButton\x22>Spawn\x20on\x20location</button>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22mdl-button\x22\x20mdl-js-button\x20mdl-button—raised\x20mdl-button—colored\x20onclick=\x22apporachSpawn()\x22\x20data-upgraded=\x22,MaterialButton\x22>Spawn\x20on\x20approach</button>\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22mdl-button\x22\x20mdl-js-button\x20mdl-button—raised\x20mdl-button—colored\x20onclick=\x22openWindow()\x22\x20data-upgraded=\x22,MaterialButton\x22>Open\x20Object\x20Settings</button>\x0a\x20\x20</ul>', 'down', 'whitepapi', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/json%20files/buildingsLoc.json', 'planeID', 'structureSelect', 'modelLocs', '<label\x20for=\x22parkourSelect\x22>Choose\x20a\x20structure:</label><select\x20name=\x22structureSelect\x22\x20id=\x22structureSelect\x22>', 'parse', 'random', 'lights', 'bottom', '38096kNbTeG', 'collisionTriangles', 'flyTo', 'v_angularVelocity', 'cos', '<button\x20class=\x22mdl-button\x20mdl-js-button\x20geofs-f-standard-ui\x20geofs-mediumScreenOnly\x22\x20data-toggle-panel=\x22.geofs-carriers-list\x22\x20data-tooltip-classname=\x22mdl-tooltip--top\x22\x20id=\x22landButton\x22\x20tabindex=\x220\x22\x20data-upgraded=\x22,MaterialButton\x22>Geo-FS\x20Maritime\x20Structures</button>', 'stopCreatePath', 'carriers', 'getElementsByClassName', 'ressetting\x20wires\x20', 'rotation', 'JBDTouch', 'launchBarDown', '61209LCPDeV', 'rigidBody', 'log', 'aircraftRecord', 'llaLocation', 'barDown', 'turnLightOn', 'runwaySpawn', 'barLocked', 'cg57', '2032075MJBKXx', '3960tMonev', 'getNode', 'lockKey', 'name', '1102381ODSJzG', 'push', 'actualCatPos', 'jbd', 'mass', 'min', 'json', 'touchNodes', 'add', 'lightsPosition', 'length', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/images/launch%20bar%20down.png', 'Failed\x20to\x20load\x20handling\x20script,\x20please\x20try\x20again\x20or\x20reload.\x20If\x20this\x20problem\x20persists,\x20contact\x20Elon.', 'undefined', 'width', 'reverse', 'mainData', 'locationIndex', 'api', 'setLocation', 'light', 'model', 'setAngularVelocity', 'innerHTML', '<button\x20class=\x22center\x22\x20type=\x22button\x22\x20onclick=\x22elevator(', 'positionTarget', 'animatable', 'null', 'addons', 'positions', 'collision', 'readyToLaunch', 'time', 'orange', 'longitude', 'definitions', 'openWindow', 'square', 'objects', 'instruments', '<ul\x20class=\x22geofs-list\x20geofs-toggle-panel\x20geofs-carriers-list\x20geofs-preferences\x22\x20data-noblur=\x22true\x22\x20data-onshow=\x22{geofs.initializePreferencesPanel()}\x22\x20data-onhide=\x22{geofs.savePreferencesPanel()}\x22>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20#MainDIV\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x200\x200\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x202px\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20table,\x0a\x20\x20\x20\x20\x20\x20td,\x0a\x20\x20\x20\x20\x20\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#000\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20#DIVtitle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Helvetica,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20<div\x20id=\x22MainDIV\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20id=\x22DIVtitle\x22>Geo-FS\x20Extra\x20Maritime\x20structures</p>\x0a\x20\x20\x20\x20\x20\x20</p>', 'map', 'sin', 'setVisibility', 'landButton', 'lockInt', 'init', 'catLlas', 'intervals', 'location', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/images/ready%20to%20launch.png', 'JBDName', 'updateCollidables', 'show', 'value', 'gear', 'alt', 'delta', 'aircraft', 'position', ',left=', 'vinson', 'truman', '48QpXZqF', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/lights/lights.json', '2581', 'collisionsMove', 'destroy', 'entries', 'heading360', 'setLinearVelocity', 'elevatorSquares', 'carrierPlaneIds', 'easeOutQuart', 'camera', 'document', 'objectList', 'collAlt', 'height', 'carrierIndex', 'moving', 'buttonPressed', 'whitesmoke', 'geofs-ui-bottom', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/main/json%20files/buildings.json', 'latitude', 'positionReadable', 'angle', 'animateMain', '1251516VQvfLS', 'redpapi'];
    _0x80ea = function() {
        return _0x4654af;
    };
    return _0x80ea();
}

function collisionHandler(_0x298951, _0x38b79a) {
    const _0x11e828 = _0x4ddc51;
    let _0x36a66e = nodeState[_0x298951][_0x38b79a][_0x11e828(0x16f)];
    if (geofs['aircraft'][_0x11e828(0xef)][_0x11e828(0x115)][0x2] > collData[_0x298951]['refAlt'] && nodeState[_0x298951][_0x38b79a][_0x11e828(0x177)] == _0x11e828(0xf9) || geofs[_0x11e828(0x15a)][_0x11e828(0xef)]['llaLocation'][0x2] < collData[_0x298951][_0x11e828(0xf4)] && nodeState[_0x298951][_0x38b79a][_0x11e828(0x177)] == 'up' || nodeState[_0x298951][_0x38b79a][_0x11e828(0x190)] == !![]) {
        let _0x1fda12 = [];
        for (let _0x4f0d75 = 0x0; _0x4f0d75 < collData[_0x298951][_0x11e828(0x167)][_0x11e828(0x12a)]; _0x4f0d75++) {
            _0x1fda12['push'](classifyPointMain(_0x298951, _0x4f0d75));
        }
        let _0x383817, _0xd8361f = collData[_0x298951][_0x11e828(0x127)][_0x11e828(0x182)](_0x38b79a);
        if (_0x1fda12[_0xd8361f] == -0x1 || nodeState[_0x298951][_0x38b79a][_0x11e828(0x190)] == !![]) {
            nodeState[_0x298951][_0x38b79a]['movingCollision'] = !![];
            for (let _0x4a08b2 = 0x0; _0x4a08b2 < geofs[_0x11e828(0x146)][_0x11e828(0x16c)][_0x36a66e]['collisionTriangles'][_0x11e828(0x12a)]; _0x4a08b2++) {
                for (let _0x40de01 = 0x0; _0x40de01 < 0x3; _0x40de01++) {
                    geofs['objects']['objectList'][_0x36a66e][_0x11e828(0x105)][_0x4a08b2][_0x40de01][0x2] = nodeState[_0x298951][_0x38b79a][_0x11e828(0x16d)] + nodeState[_0x298951][_0x38b79a]['position'] * nodeState[_0x298951][_0x38b79a][_0x11e828(0x158)], geofs[_0x11e828(0x146)][_0x11e828(0x154)]();
                }
            }
        }
    }
}
window[_0x4ddc51(0x179)] = function(_0x25d541) {
    Object['entries'](nodeState)['forEach'](([_0x4de47a, _0x44d47b]) => {
        const _0x2e2d3a = _0x3bca;
        Object[_0x2e2d3a(0x164)](nodeState[_0x4de47a])['forEach'](([_0xa10e21, _0x2ed91d]) => {
            const _0xfa73b0 = _0x2e2d3a;
            _0x2ed91d[_0xfa73b0(0x13a)] ? (animatePart(_0x2ed91d, _0x25d541), animationHandler(_0x4de47a, _0xa10e21), _0x2ed91d[_0xfa73b0(0x13e)] ? collisionHandler(_0x4de47a, _0xa10e21) : null) : null;
        });
    });
};
let constTime = 0.05;

function changeWires(_0x19a3a3, _0x635fc9) {
    const _0x33efd4 = _0x4ddc51;
    for (let _0x20e568 = _0x635fc9 - 0x4; _0x20e568 < _0x635fc9; _0x20e568++) {
        geofs[_0x33efd4(0x146)][_0x33efd4(0x16c)][_0x20e568][_0x33efd4(0x105)][0x0][0x0][0x2] += 0x32 * _0x19a3a3, geofs[_0x33efd4(0x146)][_0x33efd4(0x16c)][_0x20e568]['collisionTriangles'][0x0][0x1][0x2] += 0x32 * _0x19a3a3, geofs[_0x33efd4(0x146)][_0x33efd4(0x16c)][_0x20e568]['collisionTriangles'][0x0][0x2][0x2] += 0x32 * _0x19a3a3, geofs['objects']['objectList'][_0x20e568][_0x33efd4(0x105)][0x1][0x0][0x2] += 0x32 * _0x19a3a3, geofs[_0x33efd4(0x146)][_0x33efd4(0x16c)][_0x20e568][_0x33efd4(0x105)][0x1][0x1][0x2] += 0x32 * _0x19a3a3, geofs['objects'][_0x33efd4(0x16c)][_0x20e568][_0x33efd4(0x105)][0x1][0x2][0x2] += 0x32 * _0x19a3a3;
    }
    geofs[_0x33efd4(0x146)][_0x33efd4(0x154)]();
}

function sleep(_0x306de3) {
    return new Promise(_0x463446 => setTimeout(_0x463446, _0x306de3));
}

function classifyPointMain(_0x4f1c05, _0xdac25d) {
    const _0x12571c = _0x4ddc51;
    let _0x1ac08e = geofs[_0x12571c(0x146)]['objectList'][0x4][_0x12571c(0x151)],
        _0x3baf02 = geofs[_0x12571c(0x15a)][_0x12571c(0xef)][_0x12571c(0x115)],
        _0x329215 = latLonToMercator(_0x1ac08e[0x0], _0x1ac08e[0x1]),
        _0xcbf270 = latLonToMercator(_0x3baf02[0x0], _0x3baf02[0x1]),
        _0x357396 = _0xcbf270[0x0] - _0x329215[0x0],
        _0x2b8d35 = _0xcbf270[0x1] - _0x329215[0x1];
    return classifyPoint(collData[_0x4f1c05]['elevatorSquares'][_0xdac25d], [-_0x357396, _0x2b8d35]);
}

function classifyPoint(_0x50d148, _0x5974ed) {
    const _0x2a09bc = _0x4ddc51;
    var _0x9f626e = _0x5974ed[0x0],
        _0x244e63 = _0x5974ed[0x1],
        _0x24889f = _0x50d148[_0x2a09bc(0x12a)],
        _0x575ee3 = 0x1,
        _0x5ad482 = _0x24889f;
    for (var _0x47a35b = 0x0, _0x456c41 = _0x24889f - 0x1; _0x47a35b < _0x5ad482; _0x456c41 = _0x47a35b++) {
        var _0x49b7c0 = _0x50d148[_0x47a35b],
            _0x4c9231 = _0x50d148[_0x456c41],
            _0x1de2c9 = _0x49b7c0[0x1],
            _0x1a549c = _0x4c9231[0x1];
        if (_0x1a549c < _0x1de2c9) {
            if (_0x1a549c < _0x244e63 && _0x244e63 < _0x1de2c9) {
                var _0x44519f = orientation3(_0x49b7c0, _0x4c9231, _0x5974ed);
                if (_0x44519f === 0x0) return 0x0;
                else _0x575ee3 ^= 0x0 < _0x44519f | 0x0;
            } else {
                if (_0x244e63 === _0x1de2c9) {
                    var _0x110925 = _0x50d148[(_0x47a35b + 0x1) % _0x24889f],
                        _0x5af152 = _0x110925[0x1];
                    if (_0x1de2c9 < _0x5af152) {
                        var _0x44519f = orientation3(_0x49b7c0, _0x4c9231, _0x5974ed);
                        if (_0x44519f === 0x0) return 0x0;
                        else _0x575ee3 ^= 0x0 < _0x44519f | 0x0;
                    }
                }
            }
        } else {
            if (_0x1de2c9 < _0x1a549c) {
                if (_0x1de2c9 < _0x244e63 && _0x244e63 < _0x1a549c) {
                    var _0x44519f = orientation3(_0x49b7c0, _0x4c9231, _0x5974ed);
                    if (_0x44519f === 0x0) return 0x0;
                    else _0x575ee3 ^= _0x44519f < 0x0 | 0x0;
                } else {
                    if (_0x244e63 === _0x1de2c9) {
                        var _0x110925 = _0x50d148[(_0x47a35b + 0x1) % _0x24889f],
                            _0x5af152 = _0x110925[0x1];
                        if (_0x5af152 < _0x1de2c9) {
                            var _0x44519f = orientation3(_0x49b7c0, _0x4c9231, _0x5974ed);
                            if (_0x44519f === 0x0) return 0x0;
                            else _0x575ee3 ^= _0x44519f < 0x0 | 0x0;
                        }
                    }
                }
            } else {
                if (_0x244e63 === _0x1de2c9) {
                    var _0x40b0c1 = Math[_0x2a09bc(0x125)](_0x49b7c0[0x0], _0x4c9231[0x0]),
                        _0xae5f26 = Math[_0x2a09bc(0xf2)](_0x49b7c0[0x0], _0x4c9231[0x0]);
                    if (_0x47a35b === 0x0) {
                        while (_0x456c41 > 0x0) {
                            var _0x616a39 = (_0x456c41 + _0x24889f - 0x1) % _0x24889f,
                                _0x339e9f = _0x50d148[_0x616a39];
                            if (_0x339e9f[0x1] !== _0x244e63) break;
                            var _0x431afc = _0x339e9f[0x0];
                            _0x40b0c1 = Math[_0x2a09bc(0x125)](_0x40b0c1, _0x431afc), _0xae5f26 = Math[_0x2a09bc(0xf2)](_0xae5f26, _0x431afc), _0x456c41 = _0x616a39;
                        }
                        if (_0x456c41 === 0x0) {
                            if (_0x40b0c1 <= _0x9f626e && _0x9f626e <= _0xae5f26) return 0x0;
                            return 0x1;
                        }
                        _0x5ad482 = _0x456c41 + 0x1;
                    }
                    var _0xcf42c9 = _0x50d148[(_0x456c41 + _0x24889f - 0x1) % _0x24889f][0x1];
                    while (_0x47a35b + 0x1 < _0x5ad482) {
                        var _0x339e9f = _0x50d148[_0x47a35b + 0x1];
                        if (_0x339e9f[0x1] !== _0x244e63) break;
                        var _0x431afc = _0x339e9f[0x0];
                        _0x40b0c1 = Math[_0x2a09bc(0x125)](_0x40b0c1, _0x431afc), _0xae5f26 = Math['max'](_0xae5f26, _0x431afc), _0x47a35b += 0x1;
                    }
                    if (_0x40b0c1 <= _0x9f626e && _0x9f626e <= _0xae5f26) return 0x0;
                    var _0xcd95ee = _0x50d148[(_0x47a35b + 0x1) % _0x24889f][0x1];
                    _0x9f626e < _0x40b0c1 && _0xcf42c9 < _0x244e63 !== _0xcd95ee < _0x244e63 && (_0x575ee3 ^= 0x1);
                }
            }
        }
    }
    return 0x2 * _0x575ee3 - 0x1;
}

function orientation3(_0xa9891b, _0x2487c9, _0xc8c74c) {
    var _0x4f8049 = (_0xa9891b[0x1] - _0xc8c74c[0x1]) * (_0x2487c9[0x0] - _0xc8c74c[0x0]),
        _0x1f52cd = (_0xa9891b[0x0] - _0xc8c74c[0x0]) * (_0x2487c9[0x1] - _0xc8c74c[0x1]),
        _0x52e6d3 = _0x4f8049 - _0x1f52cd,
        _0x484213;
    if (_0x4f8049 > 0x0) {
        if (_0x1f52cd <= 0x0) return _0x52e6d3;
        else _0x484213 = _0x4f8049 + _0x1f52cd;
    } else {
        if (_0x4f8049 < 0x0) {
            if (_0x1f52cd >= 0x0) return _0x52e6d3;
            else _0x484213 = -(_0x4f8049 + _0x1f52cd);
        } else return _0x52e6d3;
    }
    var _0x3329df = ERRBOUND3 * _0x484213;
    if (_0x52e6d3 >= _0x3329df || _0x52e6d3 <= -_0x3329df) return _0x52e6d3;
}

function initInstruments() {
    const _0x8d8d33 = _0x4ddc51;
    instruments[_0x8d8d33(0x143)][_0x8d8d33(0x110)] = {
        'overlay': {
            'url': _0x8d8d33(0x12b),
            'alignment': {
                'x': 'right',
                'y': 'bottom'
            },
            'size': {
                'x': 0x64,
                'y': 0x15
            },
            'position': {
                'x': 0x64,
                'y': 0xff
            },
            'anchor': {
                'x': 0x64,
                'y': 0x0
            },
            'rescale': !0x0,
            'rescalePosition': !0x0,
            'animations': [{
                'type': _0x8d8d33(0x155),
                'value': _0x8d8d33(0x110)
            }]
        }
    }, instruments['definitions']['readyToLaunch'] = {
        'overlay': {
            'url': _0x8d8d33(0x152),
            'alignment': {
                'x': 'right',
                'y': _0x8d8d33(0x103)
            },
            'size': {
                'x': 0x64,
                'y': 0x15
            },
            'position': {
                'x': 0x64,
                'y': 0xeb
            },
            'anchor': {
                'x': 0x64,
                'y': 0x0
            },
            'rescale': !0x0,
            'rescalePosition': !0x0,
            'animations': [{
                'type': _0x8d8d33(0x155),
                'value': _0x8d8d33(0x13f)
            }]
        }
    };
    var _0x5ad14d = instruments['init'];
    instruments['init'] = function(_0x54e35f) {
        const _0x5dc739 = _0x8d8d33;
        let _0x390975 = ['7', _0x5dc739(0x161), _0x5dc739(0xf7)];
        void 0x0 !== _0x54e35f['gear'] || _0x390975[_0x5dc739(0x19e)](geofs[_0x5dc739(0x15a)][_0x5dc739(0xef)][_0x5dc739(0x114)]['id']) ? (enabled = !0x0, _0x54e35f[_0x5dc739(0x110)] = _0x54e35f[_0x5dc739(0x157)]) : enabled = void 0x0, _0x5ad14d(_0x54e35f), _0x390975 = ['7', _0x5dc739(0x161), _0x5dc739(0xf7)], (void 0x0 !== _0x54e35f[_0x5dc739(0x157)] || _0x390975[_0x5dc739(0x19e)](geofs[_0x5dc739(0x15a)]['instance'][_0x5dc739(0x114)]['id']) ? (enabled = !0x0, _0x54e35f[_0x5dc739(0x13f)] = _0x54e35f[_0x5dc739(0x157)]) : enabled = void 0x0, _0x5ad14d(_0x54e35f));
    }, instruments[_0x8d8d33(0x14e)](geofs['aircraft'][_0x8d8d33(0xef)]['setup'][_0x8d8d33(0x147)]);
}
let catapult = {};
catapult[_0x4ddc51(0x14f)] = catapultData[_0x4ddc51(0x14f)], catapult['angle'] = catapultData['angle'], catapult[_0x4ddc51(0x122)] = catapult[_0x4ddc51(0x14f)], catapult[_0x4ddc51(0x168)] = ['7', _0x4ddc51(0x161), '3460'], catapult['barDown'] = ![], catapult['barLocked'] = ![], catapult[_0x4ddc51(0x198)] = 'q', catapult[_0x4ddc51(0x19d)] = 'l', catapult[_0x4ddc51(0x11e)] = '/', catapult[_0x4ddc51(0x14d)], catapult[_0x4ddc51(0x1a3)] = ![], catapult[_0x4ddc51(0xfc)];

function gearBarPosLock() {
    const _0x3a65b7 = _0x4ddc51;
    catapult[_0x3a65b7(0x119)] && (geofs['aircraft'][_0x3a65b7(0xef)][_0x3a65b7(0x112)][_0x3a65b7(0x166)]([0x0, 0x0, 0x0]), geofs[_0x3a65b7(0x15a)][_0x3a65b7(0xef)]['rigidBody'][_0x3a65b7(0x136)]([0x0, 0x0, 0x0]));
}

function resolveForceVector(_0x2a6d58, _0x5a399b) {
    const _0x4698c2 = _0x4ddc51;
    let _0x520825 = _0x2a6d58 * Math[_0x4698c2(0x108)](_0x5a399b * (Math['PI'] / 0xb4)),
        _0x17a5e9 = _0x2a6d58 * Math['sin'](_0x5a399b * (Math['PI'] / 0xb4));
    return [_0x520825, _0x17a5e9, 0x0];
}

function distance(_0x375762, _0x1d4eb3) {
    const _0x410adf = _0x4ddc51;
    var _0x4dbd93 = _0x1d4eb3[0x0] - _0x375762[0x0],
        _0x354846 = _0x1d4eb3[0x1] - _0x375762[0x1];
    return Math[_0x410adf(0x17e)](_0x4dbd93 * _0x4dbd93 + _0x354846 * _0x354846) * 0x186a0;
}

function checkCarrier() {
    const _0x1e3b68 = _0x4ddc51;
    catapult[_0x1e3b68(0x168)][_0x1e3b68(0x19e)](geofs[_0x1e3b68(0x15a)][_0x1e3b68(0xef)]['id']) ? (catapult[_0x1e3b68(0x1a3)] = !![], catapult[_0x1e3b68(0xfc)] = geofs[_0x1e3b68(0x15a)][_0x1e3b68(0xef)]['id']) : catapult['inCarrierPlane'] = ![];
}
window[_0x4ddc51(0x171)] = ![];
async function buttonHasBeenPressed() {
    buttonPressed = !![], await sleep(0xfa), buttonPressed = ![];
}

function catapultMain() {
    const _0x35e1b0 = _0x4ddc51;
    document['addEventListener'](_0x35e1b0(0xee), async function _0x4e18d7(_0x5c675b) {
        const _0x2606be = _0x35e1b0;
        if (catapult[_0x2606be(0x1a3)] == !![] && buttonPressed == ![]) {
            buttonHasBeenPressed();
            _0x5c675b[_0x2606be(0x199)] === catapult['barKey'] && (catapult[_0x2606be(0x116)] ? (catapult['barDown'] = ![], geofs[_0x2606be(0x183)][_0x2606be(0xed)][_0x2606be(0x110)] = 0x0) : geofs[_0x2606be(0x183)][_0x2606be(0xed)]['groundContact'] == 0x1 && (catapult[_0x2606be(0x116)] = !![], geofs[_0x2606be(0x183)][_0x2606be(0xed)]['launchBarDown'] = 0x1), await sleep(0xfa));
            if (_0x5c675b[_0x2606be(0x199)] === catapult[_0x2606be(0x11e)]) {
                if (catapult['barLocked']) catapult[_0x2606be(0x119)] = ![], geofs[_0x2606be(0x183)][_0x2606be(0xed)]['readyToLaunch'] = 0x0, clearInterval(catapult[_0x2606be(0x14d)]);
                else {
                    let _0x33953c;
                    catapult[_0x2606be(0x14f)][catapult[_0x2606be(0xfc)]][_0x2606be(0x192)](async function(_0x4d3c84, _0x54b413) {
                        const _0x1a0842 = _0x2606be;
                        distance(geofs[_0x1a0842(0x15a)][_0x1a0842(0xef)][_0x1a0842(0x115)], _0x4d3c84) < 0x3 && geofs[_0x1a0842(0x183)]['values']['heading360'] < catapult['angle'][_0x54b413] + 0x5 && geofs['animation']['values'][_0x1a0842(0x165)] > catapult[_0x1a0842(0x178)][_0x54b413] - 0x5 && catapult[_0x1a0842(0x116)] == !![] && (geofs[_0x1a0842(0x106)]([catapult[_0x1a0842(0x14f)][catapult[_0x1a0842(0xfc)]][_0x54b413][0x0], catapult['catLlas'][catapult[_0x1a0842(0xfc)]][_0x54b413][0x1], 0x0, catapult[_0x1a0842(0x178)][_0x54b413]]), await sleep(0xfa), geofs[_0x1a0842(0x16a)][_0x1a0842(0x1a2)](), catapult[_0x1a0842(0x119)] = !![], geofs['animation']['values'][_0x1a0842(0x13f)] = 0x1, catapult[_0x1a0842(0x14d)] = setInterval(function() {
                            gearBarPosLock();
                        }));
                    });
                }
            }
            if (_0x5c675b[_0x2606be(0x199)] === catapult['launchKey']) {
                if (catapult[_0x2606be(0x119)] && geofs[_0x2606be(0x183)]['values']['throttle'] == 0x1) {
                    clearInterval(catapult['lockInt']), catapult['barLocked'] = ![], catapult[_0x2606be(0x116)] = ![], geofs[_0x2606be(0x183)][_0x2606be(0xed)][_0x2606be(0x110)] = 0x0, geofs['animation'][_0x2606be(0xed)]['readyToLaunch'] = 0x0, geofs['aircraft'][_0x2606be(0xef)][_0x2606be(0x112)]['reset']();
                    var _0x4403ec = geofs[_0x2606be(0x15a)]['instance'][_0x2606be(0x112)][_0x2606be(0x124)] * 0xa;
                    let _0x1a8f97 = new geofs['fx']['ParticleEmitter']({
                            'anchor': {
                                'worldPosition': [0x0, 0x0, -0x1]
                            },
                            'duration': 0x186a0,
                            'rate': 0.05,
                            'life': 0x9c40,
                            'easing': _0x2606be(0x169),
                            'startScale': 0.0005,
                            'endScale': 0.0005,
                            'randomizeStartScale': 0.05,
                            'randomizeEndScale': 0.15,
                            'startOpacity': 0.9,
                            'endOpacity': 0.00001,
                            'startRotation': _0x2606be(0x101),
                            'texture': _0x2606be(0x172)
                        }),
                        _0x483cf6 = setInterval(function() {
                            const _0xfef7cb = _0x2606be;
                            geofs[_0xfef7cb(0x183)][_0xfef7cb(0xed)]['groundContact'] == 0x1 ? geofs[_0xfef7cb(0x15a)]['instance'][_0xfef7cb(0x112)][_0xfef7cb(0x195)]([resolveForceVector(_0x4403ec, geofs[_0xfef7cb(0x183)]['values'][_0xfef7cb(0x165)])[0x1], resolveForceVector(_0x4403ec, geofs['animation'][_0xfef7cb(0xed)][_0xfef7cb(0x165)])[0x0], resolveForceVector(_0x4403ec, geofs[_0xfef7cb(0x183)][_0xfef7cb(0xed)][_0xfef7cb(0x165)])[0x2]]) : (clearInterval(_0x483cf6), _0x1a8f97[_0xfef7cb(0x163)]());
                        }, 0xc8);
                }
            }
        }
    });
}

function remainGroundContact() {
    const _0xcd3919 = _0x4ddc51;
    while (geofs['animation']['values']['groundContact'] == 0x1) {
        geofs[_0xcd3919(0x15a)][_0xcd3919(0xef)]['rigidBody'][_0xcd3919(0x107)][0x1] = -0x1;
    }
}

function inverseMercator(_0x569297, _0x26726a) {
    const _0x1e0f0a = _0x4ddc51;
    let _0x4b6745 = _0x569297 / 20037508.34 * 0xb4,
        _0xcc23bf = _0x26726a / 20037508.34 * 0xb4;
    return _0xcc23bf = 0xb4 / Math['PI'] * (0x2 * Math[_0x1e0f0a(0x181)](Math['exp'](_0xcc23bf * Math['PI'] / 0xb4)) - Math['PI'] / 0x2), {
        'lat': _0xcc23bf,
        'lon': _0x4b6745
    };
}

function getGeoCoords(_0x1e25aa, _0x301e45, _0x4f5324, _0x5ea169) {
    let _0x1d1cff = _0x301e45 * 20037508.34 / 0xb4,
        _0x1dd5b6 = Math['log'](Math['tan']((0x5a + _0x1e25aa) * Math['PI'] / 0x168)) / (Math['PI'] / 0xb4);
    _0x1dd5b6 = _0x1dd5b6 * 20037508.34 / 0xb4;
    let _0x5be6dc = _0x4f5324 - _0x1d1cff,
        _0x30a00a = _0x5ea169 - _0x1dd5b6,
        {
            lat: _0xf6cd79,
            lon: _0x6a1ea1
        } = inverseMercator(_0x5be6dc, _0x30a00a);
    return {
        'lat': _0xf6cd79,
        'lon': _0x6a1ea1
    };
}

function startLights() {}
let lightName;
window['lightAlt'];

function checkForLights() {
    const _0x10811 = _0x4ddc51;
    for (let _0x4c5248 = 0x0; _0x4c5248 < geofs[_0x10811(0x146)][_0x10811(0x16c)][_0x10811(0x12a)]; _0x4c5248++) {
        geofs[_0x10811(0x146)][_0x10811(0x16c)][_0x4c5248][_0x10811(0x11f)] && spawnLights(geofs[_0x10811(0x146)][_0x10811(0x16c)][_0x4c5248][_0x10811(0x11f)]);
    }
}

function spawnLights(_0x1c6ce8) {
    const _0x564988 = _0x4ddc51;
    if (_0x1c6ce8 in lightData) {
        if (_0x1c6ce8 !== lightName) {
            despawnLights();
            for (let _0x22afee = 0x0; _0x22afee < colors['length']; _0x22afee++) {
                for (let _0x1e15b5 = 0x0; _0x1e15b5 < lightData[_0x1c6ce8][colors[_0x22afee]][_0x564988(0x12a)]; _0x1e15b5++) {
                    let _0x55b3d4 = [];
                    _0x55b3d4 = rotatePoint(0x0, 0x0, lightData[_0x1c6ce8][colors[_0x22afee]][_0x1e15b5][0x0], lightData[_0x1c6ce8][colors[_0x22afee]][_0x1e15b5][0x1], lightData[_0x1c6ce8][_0x564988(0x178)]), _0x55b3d4[0x2] = lightData[_0x1c6ce8][colors[_0x22afee]][_0x1e15b5][0x2];
                    let _0x39bc83 = getBuildingPosition(_0x1c6ce8),
                        _0x156e0a = buildings[_0x39bc83][_0x564988(0x151)];
                    var _0x1ba0ec = V3['add'](_0x156e0a, xyz2lla(_0x55b3d4, _0x156e0a));
                    lights[_0x564988(0x121)](new geofs['fx'][(_0x564988(0x134))](_0x1ba0ec, colors[_0x22afee], lightSettings)), lightAlt = lightData[_0x1c6ce8][colors[_0x22afee]][_0x1e15b5][0x2];
                }
            }
            lightName = _0x1c6ce8, hideLights(), adjustLightAlt();
        }
    }
}

function adjustLightAlt() {
    const _0x20e613 = _0x4ddc51;
    for (let _0x42d346 = 0x0; _0x42d346 < lights[_0x20e613(0x12a)]; _0x42d346++) {
        lights[_0x42d346][_0x20e613(0x133)]([lights[_0x42d346][_0x20e613(0x194)][_0x20e613(0x186)][0x0], lights[_0x42d346][_0x20e613(0x194)]['_lla'][0x1], lightAlt]);
    }
}

function despawnLights() {
    const _0x2f39ff = _0x4ddc51;
    for (let _0x117803 = 0x0; _0x117803 < lights[_0x2f39ff(0x12a)]; _0x117803++) {
        lights[_0x117803][_0x2f39ff(0x163)]();
    }
    lights = [];
}

function hideLights() {
    const _0x15b3c8 = _0x4ddc51;
    for (let _0x2bc293 = 0x0; _0x2bc293 < lights[_0x15b3c8(0x12a)]; _0x2bc293++) {
        lights[_0x2bc293][_0x15b3c8(0x14b)](![]);
    }
}

function showLights() {
    const _0x302e31 = _0x4ddc51;
    for (let _0x2c6c8e = 0x0; _0x2c6c8e < lights[_0x302e31(0x12a)]; _0x2c6c8e++) {
        lights[_0x2c6c8e][_0x302e31(0x14b)](!![]);
    }
}

function checkIfNight() {
    geofs['isNight'] == !![] ? showLights() : hideLights();
}

function getBuildingPosition(_0x404c82) {
    const _0x16147f = _0x4ddc51;
    for (let _0x360786 = 0x0; _0x360786 < buildings[_0x16147f(0x12a)]; _0x360786++) {
        if (buildings[_0x360786]['name'] === _0x404c82) return _0x360786;
    }
}

function rotatePoint(_0x214597, _0x57840a, _0x4f341e, _0x4e60dd, _0x1190d4) {
    const _0xa60ab9 = _0x4ddc51;
    let _0x16b1b2 = (_0x4f341e - _0x214597) * Math[_0xa60ab9(0x108)](toRadians(_0x1190d4)) - (_0x4e60dd - _0x57840a) * Math['sin'](toRadians(_0x1190d4)) + _0x214597,
        _0x284569 = (_0x4f341e - _0x214597) * Math[_0xa60ab9(0x14a)](toRadians(_0x1190d4)) + (_0x4e60dd - _0x57840a) * Math[_0xa60ab9(0x108)](toRadians(_0x1190d4)) + _0x57840a;
    return [_0x16b1b2, _0x284569];
}

function toRadians(_0x5bceeb) {
    return _0x5bceeb * Math['PI'] / 0xb4;
}
let itv = setInterval(function() {
        try {
            window['ui'] && window['flight'] && (main(), spawnHTML(), secondMain(), startLights(), clearInterval(itv));
        } catch (_0x2349ed) {}
    }, 0x1f4),
    itv5 = setInterval(function() {
        const _0x31c762 = _0x4ddc51;
        try {
            geofs[_0x31c762(0x15a)][_0x31c762(0xef)][_0x31c762(0xf1)]['instruments'] && (initInstruments(), clearInterval(itv5));
        } catch (_0x38bbd2) {}
    }, 0x1f4);
window[_0x4ddc51(0x1a9)] = {};

function getHTMLForWindow() {
    const _0x44cf86 = _0x4ddc51;
    let _0x2d9178 = document[_0x44cf86(0x1a8)](_0x44cf86(0xfd))['value'];
    if (_0x2d9178 != 0x0 && _0x2d9178 != 0x7 && _0x2d9178 != 0xa) {
        _0x2d9178 = listData[_0x2d9178][_0x44cf86(0x11f)];
        let _0x48a38a = '';
        _0x2d9178 in lightData ? _0x48a38a += _0x44cf86(0x1a7) + _0x2d9178 + _0x44cf86(0x1a1) : _0x48a38a += '';
        if (collData['carriers']['includes'](_0x2d9178)) {
            for (let _0x256458 = 0x0; _0x256458 < collData[_0x2d9178]['actualNodes'][_0x44cf86(0x12a)]; _0x256458++) {
                _0x48a38a += _0x44cf86(0x138) + _0x256458 + ',\x27' + _0x2d9178 + _0x44cf86(0x184) + collData[_0x2d9178][_0x44cf86(0x15b)][_0x256458] + '</button>';
            }
            _0x48a38a += _0x44cf86(0x18d);
            for (let _0x21df80 = 0x0; _0x21df80 < collData[_0x2d9178][_0x44cf86(0x10f)][_0x44cf86(0x12a)]; _0x21df80++) {
                _0x48a38a += '<button\x20class=\x22center\x22\x20type=\x22button\x22\x20onclick=\x22jbd(' + _0x21df80 + ',\x20\x27' + _0x2d9178 + _0x44cf86(0x184) + collData[_0x2d9178][_0x44cf86(0x153)][_0x21df80] + '</button>';
            }
        }
        return _0x48a38a;
    }
}
let winObject;
window[_0x4ddc51(0x144)] = function() {
    const _0x349381 = _0x4ddc51;
    console[_0x349381(0x113)]('window');
    winObject != void 0x0 && winObject[_0x349381(0x18c)]();
    let _0x48dc5f = getHTMLForWindow();
    winObject = window['open']('', 'Title', _0x349381(0x17d) + (screen[_0x349381(0x16e)] - 0x190) + _0x349381(0x15c) + (screen[_0x349381(0x12e)] - 0x348)), winObject[_0x349381(0x16b)]['body'][_0x349381(0x137)] = _0x349381(0xf3) + _0x48dc5f + _0x349381(0x174), winObject[_0x349381(0x117)] = function(_0x43276a) {
        lightHandler(_0x43276a);
    }, winObject['elevator'] = function(_0x2de52d, _0x549daf) {
        elevator(_0x2de52d, _0x549daf);
    }, winObject[_0x349381(0x123)] = function(_0x1bcc2b, _0x2e2387) {
        jbd(_0x1bcc2b, _0x2e2387);
    };
}, window[_0x4ddc51(0x129)] = ![], window['lightHandler'] = function(_0x441cc5) {
    lightsPosition ? turnLightsOff(_0x441cc5) : turnLightsOn(_0x441cc5);
}, window['elevator'] = function(_0x4bf36b, _0x3b7cf3) {
    const _0x4d5869 = _0x4ddc51;
    let _0xdf52dd = collData[_0x3b7cf3][_0x4d5869(0x127)][_0x4bf36b];
    console['log'](_0xdf52dd), clickedNodeHandler(_0xdf52dd);
}, window['jbd'] = function(_0x574e5, _0xe00f59) {
    const _0x2e497e = _0x4ddc51;
    let _0x25fd2e = collData[_0xe00f59][_0x2e497e(0x10f)][_0x574e5];
    console['log'](_0x25fd2e), clickedNodeHandler(_0x25fd2e);
};

function turnLightsOn(_0x4b2e11) {
    const _0x467d5f = _0x4ddc51;
    despawnLights();
    for (let _0x55bb75 = 0x0; _0x55bb75 < colors[_0x467d5f(0x12a)]; _0x55bb75++) {
        for (let _0x546bc7 = 0x0; _0x546bc7 < lightData[_0x4b2e11][colors[_0x55bb75]][_0x467d5f(0x12a)]; _0x546bc7++) {
            let _0x1f4447 = [];
            _0x1f4447 = rotatePoint(0x0, 0x0, lightData[_0x4b2e11][colors[_0x55bb75]][_0x546bc7][0x0], lightData[_0x4b2e11][colors[_0x55bb75]][_0x546bc7][0x1], lightData[_0x4b2e11]['angle']), _0x1f4447[0x2] = lightData[_0x4b2e11][colors[_0x55bb75]][_0x546bc7][0x2];
            let _0x3844e1 = getBuildingPosition(_0x4b2e11),
                _0x4b8eeb = buildings[_0x3844e1][_0x467d5f(0x151)];
            var _0x4d3485 = V3[_0x467d5f(0x128)](_0x4b8eeb, xyz2lla(_0x1f4447, _0x4b8eeb));
            lights[_0x467d5f(0x121)](new geofs['fx'][(_0x467d5f(0x134))](_0x4d3485, colors[_0x55bb75], lightSettings));
        }
    }
    lightsPosition = !![];
}

function turnLightsOff(_0x55d034) {
    despawnLights(), lightsPosition = ![];
}