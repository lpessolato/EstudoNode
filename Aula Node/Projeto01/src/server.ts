import {app} from './app'
import {config} from 'dotenv'

config()

app.listen(process.env.PORT,() =>{
    console.log(`Servidor rodadndo na porta: ${process.env.PORT}`)
})
