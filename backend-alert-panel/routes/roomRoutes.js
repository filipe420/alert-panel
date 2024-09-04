import express from 'express';
import RoomController from '../controllers/roomController';

const router = express.Router();

router.post('/register-room', RoomController.registerRoom); 

export default router;