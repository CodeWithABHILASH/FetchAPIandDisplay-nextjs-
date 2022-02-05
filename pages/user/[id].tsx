import { InferGetStaticPropsType } from "next";
import {Card,Col,Button} from "react-bootstrap"
import {useRouter} from 'next/router'
function Details({ user }:  InferGetStaticPropsType<typeof getStaticProps>){
    const router=useRouter()
    const handleClick = ()=>{
        router.push("/")
    }
return(
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
            <Card.Text><h3>Address:</h3>
            <ul>
                <li><h4>Street:  {user.address.street} </h4></li>
                <li><h4>Suite: {user.address.suite}</h4></li>
                <li><h4>City: {user.address.city} </h4></li>
                <li><h4>Zipcode: {user.address.zipcode} </h4></li>

            </ul>
            </Card.Text>

            <Button variant="danger" onClick={handleClick}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
)
}

export default Details

export async function getStaticPaths(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const paths = data.map((user: any)=>{
        return{
            params:{
                id:`${user.id}`
            }
        }
    })
    return{
        // paths:[
        //     {
        //         params:{id:'1'}
        //     }
        // ],
        paths: paths,
        fallback:false,
    }
}
export async function getStaticProps(context: any){
    const {params} =context
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await response.json()
    return{
        props:{
            user:data,
        }
    }
 
}
    
