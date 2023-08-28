/* eslint-disable react/prop-types */
import "./Task.css"

function Task(props) {
    const { title, description, status } = props.task
    return (
        <div className={`todoContainer ${!status && "redBackground"}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            {status ?
                <p>👌</p>
                :
                <p>❌</p>
            }
        </div>
    )
}

export default Task; 