import express from 'express'
import taskController from './controller/taskController';

export const router = express.Router()

router.get('/', taskController.getAll)