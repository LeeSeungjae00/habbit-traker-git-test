
import React , {useRef , memo} from 'react'

export default memo(function HabitAddForm({ onAdd }) {
    const inputRef = useRef();
    const formRef = useRef();
    const onSubmit = e => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"></input>
            <button>ADD</button>
        </form>
    )
})
