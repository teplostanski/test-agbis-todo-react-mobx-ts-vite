import { observer } from 'mobx-react-lite'
import { todosStore } from '../../stores/todosStore'

type TTodosItem = {
  title: string
  body: string
  //checkbox: boolean
  id: string
}

const TodosItem = observer(({ title, body, id }: TTodosItem) => {
  console.log(todosStore.todos[0].isChecked ? 'check' : 'no check')

  return (
    <div>
      <input type='checkbox' onClick={() => todosStore.setCompleted(id)} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
})

export default TodosItem
