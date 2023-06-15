import './Button.css';

const Button = (props) =>{
    const action = props.getAction;

    return(
    <button onClick={action}>Add New Expenses</button>
    );

}

export default Button;