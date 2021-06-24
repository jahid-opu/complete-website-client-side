import React from 'react';

const ManageService = ({service,handleDelete}) => {

    
    return (
        <tr>
        <td><img style={{width:"50px"}} src={service.imageURL} alt="" /></td>
        <td>{service.name}</td>
        <td>{service.price}</td>
        <td>{service.description}</td>
        <td> <button className="btn btn-primary"onClick={ () =>handleDelete(service._id)}>Delete</button></td>
      </tr>
    );
};

export default ManageService;