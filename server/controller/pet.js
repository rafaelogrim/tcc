const {param, body, query} = require('express-validator');
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

const get = [[
    query('filter').optional(),
    query('limit').optional(),
], async (req, res, next) => {
    try {

        console.log('query', req.query);
        const {limit, skip, filter} = req.query;

        let mongoFilter = {};
        if (filter) {
            if (filter.length > 0) {

            }
        }

        res.finish({
            pets: await Pet.find().limit(limit ? parseInt(limit) : 0),
            carrousel: await getRandomPets(),
            countPets: await Pet.countDocuments(),
        });

    } catch (e) {
        next(e);
    }
}];

const create = [[
    body('name').exists(),
    body('size').exists().isIn(['p', 'm', 'g']),
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

const filter = [[
    query('age').exists(),
    query('size').exists(),
    query('gender').exists(),
], async (req, res, next) => {
    try {

        const {age, size, gender, limit} = req.query;

        const $and = [];
        if (age) $and.push({$or: age.split(',').map((e) => ({age: e}))});
        if (size) $and.push({$or: size.split(',').map((e) => ({size: e}))});
        if (gender) $and.push({$or: gender.split(',').map((e) => ({gender: e}))});

        const f = $and.length > 0 ? {$and} : {};

        res.finish({
            count: await Pet.countDocuments(f),
            documents: await Pet.find(f).limit(parseInt(limit))
        });

    } catch (e) {
        next(e);
    }
}];

const count = async (req, res, next) => {
    try {
        res.finish(await Pet.countDocuments());
    } catch (e) {
        next(e);
    }
};

module.exports = {
    get,
    create,
    filter,
    count,
};
