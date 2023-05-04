import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleDelete = (id) => {
    //idArr stores an array of only ids of the elms of the array
    let idArr = Employees.map((e) => e.id);
    //index finds the id in idArr and returns its index in the array
    //this is the same index of the elem in the orig array correspoinding to the id
    let index = idArr.indexOf(id);

    Employees.splice(index, 1);

    history("/");
  };

  const changeToCreate = () => {
    history("/create");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              //{} inside jsx means javascript
              Employees && Employees.length > 0
                ? Employees.map((item) => {
                    return (
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>
                          <Link to={`/edit`}>
                            <Button onClick={() => alert(item.id)}>Edit</Button>
                          </Link>
                          &nbsp;
                          <Button onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No data available"
            }
            {
              // if statements dont work inside jsx
              // if (Employees && Employees.length > 0){
              // }
            }
          </tbody>
        </Table>
        <br />
        {/* <Link className="d-grid gap-2" to="/create">
        </Link> */}
        <Button size="lg" onClick={changeToCreate}>
          Create
        </Button>
      </div>
    </Fragment>
  );
}

export default Home;
