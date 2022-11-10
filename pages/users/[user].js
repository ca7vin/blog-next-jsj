import React from "react";

export default function user(props) {
  console.log(props);
  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center mb-4">
        User {props.user.id}
      </h1>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="card p-2">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Nom</strong> : {props.user.name}
              </h5>
              <h5 className="card-subtitle text-muted mb-2">
                <strong>Username</strong> : {props.user.username}
              </h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Email</strong> : {props.user.email}
                </li>
                <li className="list-group-item">
                  <strong>Website</strong> : {props.user.email}
                </li>
                <li className="list-group-item">
                  <strong>Email</strong> : {props.user.website}
                </li>
                <li className="list-group-item">
                  <strong>Phone</strong> : {props.user.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}
