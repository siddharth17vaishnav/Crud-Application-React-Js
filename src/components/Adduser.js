import React ,{useContext,useState}from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Link,useHistory} from 'react-router-dom'
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const Adduser = () => {
    const [name,setName]=useState('');
    const { addUser }  = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id:uuid(),
            name
        }
        addUser(newUser);
        
        history.push("/");
    }

    const onChange = (e) =>{
        setName(e.target.value);
    }

    return (
        <div>
        <h1>Add User</h1>
       <Form onSubmit={onSubmit}>
           <FormGroup>
               <Label>Name</Label>
               <Input type="text" name="name" value={name} onChange={onChange} placeholder="Enter Name" required/>
           </FormGroup>
           <Button type="submit">Submit</Button>
           <Link to="/" className="btn btn-danger ml-2 "> Cancel</Link>
       </Form>
       </div>
    )
}

export default Adduser
