import TodoItem from "./todoitem";
import styles from "./todoItems.module.css"
const TodoItems = ({todoItems ,onDeleteClick}) => {
    return (
    <div className={styles.itemContainer}>
        {todoItems.map(item=> 
        <TodoItem 
        key={item.name}
        todoDate={item.dueDate}  
        todoName={item.name}
        onDeleteClick={onDeleteClick}
        ></TodoItem>)}
        </div>
    )
};

export default TodoItems;