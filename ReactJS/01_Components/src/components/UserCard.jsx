function UserCard({ profilePhoto, name, email, contact, role, location }) {
  return (
    <div
      className="userInfo"
      style={{
        border: "1px solid black",
        minwidth: "200px",
        width: "250px",
        height: "300px",
        padding: "5px 10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        lineHeight: "0",
        justifyContent: "center",
      }}
    >
      <img
        src={profilePhoto}
        alt="Profile Photo"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          alignSelf: "center",
          marginBottom: "10px",
        }}
      />
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>ContactNo: </strong>
        {contact}
      </p>
      <p>
        <strong>Role: </strong>
        {role}
      </p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
    </div>
  );
}

export default UserCard;
