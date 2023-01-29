import ProjectForm from '../../project/ProjectForm'
import './style.css'

export default function NewProject(){
    return(
        <div className='newproject_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adiconar os serviços</p>
            <ProjectForm/>
        </div>
    )
}