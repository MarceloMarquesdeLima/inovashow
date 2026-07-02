const sequelize = require('../config/database');

const CidadeModel = require('./CidadeModel');
const PessoaModel = require('./PessoaModel');
const ExpositorModel = require('./ExpositorModel');
const VendedorModel = require('./VendedorModel');
const VisitaModel = require('./VisitaModel');

PessoaModel.belongsTo(CidadeModel, {
    foreignKey: 'codcidade'
});

PessoaModel.belongsTo(ExpositorModel, {
    foreignKey: 'codexpositor'
});

VisitaModel.belongsTo(PessoaModel, {
    foreignKey: 'Id_Pessoa'
});

module.exports = {
    sequelize,
    CidadeModel,
    PessoaModel,
    ExpositorModel,
    VendedorModel,
    VisitaModel
};