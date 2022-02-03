import react, { useState }  from "react";


function FormAddTodo(props) {

    const [ text , setText ] = useState('');

    let formHandler = e => {
        e.preventDefault();
        props.add(text);
        setText('');
    }

    let inputHandler = e => setText(e.target.value)

    return (
        <form className="form-inline" onSubmit={formHandler}>
            <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="i want to ..."  aria-describedby="basic-addon2"value={text} onChange={inputHandler}></input>
                 <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit">add</button>
                 </div>
                 </div>
            {/* <div className="form-group mb-3">
                <input type="text.dark" className="form-control mx-sm-3 col-xs-2" placeholder="i want to ..." value={text} onChange={inputHandler}/>
                <button type="submit btn-outline-secondary" className="btn btn-dark">add</button>
            </div> */}
            
            
        </form>
    )
}


export default FormAddTodo;