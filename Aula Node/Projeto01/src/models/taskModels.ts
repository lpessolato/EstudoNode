import {connection} from './connection'

const getAll = async () => {
    const task = await connection.execute ('select * from tbl_task')
    return task
}


export default {

    getAll
}