export default function Todo({task, isDone}){
    return (
        <li>{isDone ? "Finished: " : "Work On: "} {task}</li>
    )
}