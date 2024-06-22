import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {

    const [student, setStudent] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/'); // api link
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thred>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thred>
                    <tbody>
                        {
                            student.map((data, i)=> (
                                <tr key={i}>
                                    <td>{data.Name}</td> {/* Coloun name should be match Name & Email to table*/}
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Student;