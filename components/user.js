import { Card, Button, Col } from "react-bootstrap";
import Link from "next/link";
import {useRouter} from 'next/router'
function User({ user }) {
    const router=useRouter()
    const handleClick = ()=>{
        router.push(`/user/${user.id}`)
    }
  return (
    <>
      <Col>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h2>id: {user.id}</h2>
            </Card.Title>
            <Card.Title>
              <h1>{user.name}</h1>
            </Card.Title>
            <ul>
              <li>
                {" "}
                <Card.Title>
                  <h2>username: {user.username}</h2>
                </Card.Title>
              </li>
              <li>
                {" "}
                <Card.Title>
                  <h2>email: {user.email}</h2>
                </Card.Title>
              </li>
              <li>
                {" "}
                <Card.Title>
                  <h3>Phone: {user.phone}</h3>
                </Card.Title>
              </li>
              <li>
                {" "}
                <Card.Title>
                  <h3>website: {user.website}</h3>
                </Card.Title>
              </li>
            </ul>

           
            <Button variant="danger" onClick={handleClick}><h5>Details</h5></Button>
             
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default User;
