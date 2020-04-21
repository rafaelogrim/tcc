const {validationResult} = require('express-validator');
// const xml2js = require('xml2js');

module.exports.validate = (req, details = false) => {
    if (!validationResult(req).array().length) return;
    const error = {cod: '003'};
    if (details) error.details = validationResult(req).formatWith(({location, msg, param}) => `${location}[${param}]: ${msg}`).array().join(', ');
    throw error;
};

// module.exports.x2j = (xml) => new Promise((resolve, reject) => {
//     let parser = xml2js.Parser({explicitArray: false});
//     parser.parseString(xml, (err, json) => err ? reject(err) : resolve(json));
// });
//
// module.exports.j2x = (json, xmldec, attrkey) => {
//     let options = {attrkey: attrkey || '$', headless: true, renderOpts: {pretty: false, indent: '', newline: '\n'}};
//     if (xmldec) options = {
//         ...options,
//         headless: false,
//         xmldec: {version: '1.0', encoding: 'utf-8'}
//     };
//     const parser = new xml2js.Builder(options);
//     return parser.buildObject(json);
// };
