import UserCard from "./UserCard";

const UserList = () => {
  const userInfo = [
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Krupali Patel",
      Email: "krupali@gmail.com",
      ContactNo: "1234567890",
      Role: "Intern",
      Location: "Rajasthan",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Rohan Mehta",
      Email: "rohan.mehta@example.com",
      ContactNo: "9876543210",
      Role: "Frontend Developer",
      Location: "Maharashtra",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Anjali Verma",
      Email: "anjali.v@gmail.com",
      ContactNo: "9123456789",
      Role: "Backend Developer",
      Location: "Uttar Pradesh",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Siddharth Singh",
      Email: "siddharth.singh@domain.com",
      ContactNo: "9988776655",
      Role: "UI/UX Designer",
      Location: "Delhi",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Meena Joshi",
      Email: "meena.joshi123@mail.com",
      ContactNo: "9090909090",
      Role: "HR Manager",
      Location: "Gujarat",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Aarav Shah",
      Email: "aaravshah@email.com",
      ContactNo: "8855223366",
      Role: "Intern",
      Location: "Punjab",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Priya Nair",
      Email: "priya.nair@workplace.com",
      ContactNo: "7777888899",
      Role: "QA Engineer",
      Location: "Kerala",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Vikram Chauhan",
      Email: "vikram.ch@gmail.com",
      ContactNo: "9988001122",
      Role: "Product Manager",
      Location: "Haryana",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Sneha Kulkarni",
      Email: "sneha.kulkarni@company.com",
      ContactNo: "8007006005",
      Role: "DevOps Engineer",
      Location: "Karnataka",
    },
    {
      ProfilePhoto:
        "https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg",
      Name: "Manish Tiwari",
      Email: "manish.tiwari@mail.in",
      ContactNo: "8899776655",
      Role: "Intern",
      Location: "Bihar",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {userInfo.map((user, index) => (
        <UserCard
          key={index}
          profilePhoto={user.ProfilePhoto}
          name={user.Name}
          email={user.Email}
          contact={user.ContactNo}
          role={user.Role}
          location={user.Location}
        />
      ))}
    </div>
  );
};

export default UserList;
