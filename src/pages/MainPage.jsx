import { useDispatch, useSelector } from "react-redux"
import TodoTask from "../components/todoTask"
import { finishTodoAction, removeTodoAction } from "../store/todo/todo.actions"

const MainPage = () => {
    const {todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const removeDeal = (task) => {
        dispatch(removeTodoAction(task))
    }

    const finishDeal = (title, status) => {        
        dispatch(finishTodoAction(title, status))
    }


    const undoneTasks = todoList.map((item) => item.isComplited === false)

    const doneTasks = todoList.map((item) => item.isComplited === true)

    return(
        <div>
            {undoneTasks.map(t => 
                <TodoTask key={t.index} index={t.index} title={t.title} name={t.name} isComplited={t.isComplited} remove={removeDeal} finish={finishDeal}/>
            )}
            {doneTasks.map(t => 
                <doneTasks key={t.index} index={t.index} title={t.title} name={t.name} isComplited={t.isComplited} remove={removeDeal}/>
            )}
        </div>
    )
} 

export default MainPage