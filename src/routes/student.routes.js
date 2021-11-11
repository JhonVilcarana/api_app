const { Router } = require ('express')
const router = Router();
const AlumnoCtrl = require ('../controllers/student.controller')
    router.get('/listar/', AlumnoCtrl.readAlumno); 
    router.get('/listarID/:id', AlumnoCtrl.readAlumnoID);
    router.post('/create/', AlumnoCtrl.createAlumno); 
    router.delete('/delete/:id', AlumnoCtrl.deleteAlumno); 
    router.put('/update/:id', AlumnoCtrl.updateAlumno); 

module.exports = router;
