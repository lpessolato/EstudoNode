import {response} from 'express'
import taskModels from '../models/taskModels'

const getAll = async (_req, res) =>{
    const listTask = await taskModels.getAll
    return res.status(200).json(listTask)
}

export default{
    getAll
}