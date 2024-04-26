const Ubicacion = require('../models').Ubicacion;

const ubicacionController = {
  // Obtener todas las ubicaciones
  async getAll(req, res) {
    try {
      const ubicaciones = await Ubicacion.findAll();
      res.json(ubicaciones);
    } catch (error) {
      console.error('Error al obtener las ubicaciones:', error);
      res.status(500).json({ error: 'Error al obtener las ubicaciones' });
    }
  },

  // Obtener una ubicación por su ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const ubicacion = await Ubicacion.findByPk(id);
      if (!ubicacion) {
        return res.status(404).json({ error: 'Ubicación no encontrada' });
      }
      res.json(ubicacion);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      res.status(500).json({ error: 'Error al obtener la ubicación' });
    }
  },

  // Crear una nueva ubicación
  async create(req, res) {
    const { descripcion, imagen } = req.body;
    try {
      const nuevaUbicacion = await Ubicacion.create({
        descripcion,
        imagen
      });
      res.status(201).json(nuevaUbicacion);
    } catch (error) {
      console.error('Error al crear la ubicación:', error);
      res.status(500).json({ error: 'Error al crear la ubicación' });
    }
  },

  // Actualizar una ubicación por su ID
  async update(req, res) {
    const { id } = req.params;
    const { descripcion, imagen } = req.body;
    try {
      const ubicacion = await Ubicacion.findByPk(id);
      if (!ubicacion) {
        return res.status(404).json({ error: 'Ubicación no encontrada' });
      }
      await ubicacion.update({
        descripcion,
        imagen
      });
      res.json(ubicacion);
    } catch (error) {
      console.error('Error al actualizar la ubicación:', error);
      res.status(500).json({ error: 'Error al actualizar la ubicación' });
    }
  },

  // Eliminar una ubicación por su ID
  async delete(req, res) {
    const { id } = req.params;
    try {
      const ubicacion = await Ubicacion.findByPk(id);
      if (!ubicacion) {
        return res.status(404).json({ error: 'Ubicación no encontrada' });
      }
      await ubicacion.destroy();
      res.json({ mensaje: 'Ubicación eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar la ubicación:', error);
      res.status(500).json({ error: 'Error al eliminar la ubicación' });
    }
  }
};

module.exports = ubicacionController;
