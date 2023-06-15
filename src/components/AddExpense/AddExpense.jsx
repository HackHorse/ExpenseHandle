import './AddExpense.css'
import Form from './Form';

function AddExpense(props){

    const getFormData = (data) =>{
const expenseData = {
    ...data,
    id: Math.random().toString()
};

props.liftUpData(expenseData);
    }

    return (
<div className='new-expense'>
<Form sendFormData={getFormData} />
</div>
    );
}

export default AddExpense;