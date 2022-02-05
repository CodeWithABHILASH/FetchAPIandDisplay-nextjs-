import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Top from "../components/navbar";
import User from "../components/user";
import { Row } from "react-bootstrap";

function UserList({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Top />
      {
        <Row xs={1} md={3} className="g-4">
          {users.map((user: any) => (
            <User key={user.id} user={user} />
          ))}
        </Row>
      }
    </>
  );
}

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};
