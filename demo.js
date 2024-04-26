const models = require('./models');
async function consulta() {  
   
    const tags = await models.Tag.findAll();
   tags.forEach(tag =>{
       console.log(tag.dataValues);
   });
   
   const activos = await models.Activo.findAll();
   activos.forEach(activo =>{
       console.log(activo.dataValues);
   });

   const activoTags = await models.ActivoTags.findAll();
   activoTags.forEach(activoTag =>{
       console.log(activoTag.dataValues);
   });

   const t = await models.Activo.findByPk(1);
   const ta = await models.Tag.findByPk(1);

   await t.addTag(ta);
   await t.update({ ubicacion: 1, responsable: 1});

   models.sequelize.close();
}
consulta();