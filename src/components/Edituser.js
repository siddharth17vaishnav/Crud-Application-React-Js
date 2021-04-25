import React,{useState,useContext,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Link,useHistory} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const Edituser = (props) => {
    const [selectedUSer,setSelectedUser]=useState({
        id: '',
        name:''
    });
    const { users,editUser }  = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect (()=>{
        const userId = currentUserId;
        const selectedUser= users.find(user => user.id === Number(userId))
        setSelectedUser(selectedUser);
    },[currentUserId,users])

    const onSubmit = (e) => {
        e.preventDefault();
        
        editUser(selectedUSer);
        
        history.push("/");
    }

    const onChange = (e) =>{
        setSelectedUser({ ...selectedUSer, [e.target.name]: e.target.value })

    }

    return (
        <div>
            <h1>Edit</h1>
        <Form onSubmit={onSubmit}>
           <FormGroup>
               <Label>Name</Label>
               <Input type="text" value={selectedUSer.name } name="name" onChange={onChange} placeholder="Enter Name"/>
           </FormGroup>
           <Button type="submit">Edit</Button>
           <Link to="/" className="btn btn-danger ml-2 "> Cancel</Link>
       </Form>
       </div> 
    )
}

export default Edituser
