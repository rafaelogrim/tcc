const {param, body} = require('express-validator');
const {validate} = require('../helper/util');
const moment = require('moment');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const {promisify} = require('util');
const rename = promisify(fs.rename);
const {v4: uuid} = require('uuid');

const Pet = require('../model/Pet');

const getRandomPets = () => new Promise(((resolve, reject) => Pet.findRandom({}, {
    createdAt: 0,
    updatedAt: 0
}, {limit: 3}, (err, result) => (err) ? reject(err) : resolve(result))));

const get = async (req, res, next) => {
    try {

        res.finish({
            pets: await Pet.find(),
            carrousel: await getRandomPets(),
            countPets: await Pet.countDocuments(),
        });

    } catch (e) {
        next(e);
    }
};

const create = [[
    body('name').exists(),
    body('size').exists().isIn(['pp', 'p', 'm', 'g', 'gg']),
    body('vaccinated').exists().isBoolean(),
    body('castrated').exists().isBoolean(),
    body('dewormed').exists().isBoolean(),
    body('age').exists().isIn(['puppy', 'young', 'adult']),
    body('gender').exists().isIn(['m', 'f']),
    body('description').exists().isString().isLength({max: 255}),
], async (req, res, next) => {
    try {

        let avatar = 'nopet.png';

        if (req.files) {

            // return next({message: 'Nenhuma foto enviada'});

            const {file} = req.files;

            const extension = path.extname(file.name).toLowerCase();

            // if (extension !== '.png' ) return next({cod: '003', message: 'A foto deve ser do tipo .png'});

            avatar = uuid() + extension;

            await rename(file.path, `./uploads/pets/${avatar}`);

        }

        await Pet.create({
            ...req.body,
            avatar,
        });

        res.finish();

    } catch (e) {
        console.log('e', e);
        next(e);
    }
}];

module.exports = {
    get,
    create,
};
