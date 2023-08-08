import React from 'react';
import { Button, Table } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

import Employees from './Employees';

function Home() {

    const history = useNavigate();

    const handleDelete = (id) =>{
        let index = Employees.map((e)=>{
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/home');

    }

  return (
    <>
    <div style={{margin:"10rem"}}>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Employees && Employees.length > 0 
                    ?
                    Employees.map((item)=>{
                        return(
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                   <Link to='/edit'> 
                                   <Button>
                                    Edit</Button>
                                   </Link> 
                                    &nbsp;
                                    <Button onClick={() => handleDelete(item.id)}>
                                    Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No data available"
                }
            </tbody>
        </Table>
        <br>
        </br>
        <Link to="/create">
        <Button>Create</Button>
        </Link>
    </div>
    </>
  )
}

export default Home