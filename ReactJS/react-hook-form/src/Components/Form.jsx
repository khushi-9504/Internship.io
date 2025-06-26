import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch } = useForm();

  function handleSubmitForm(data) {
    console.log(data);
  }

  const email = watch("email");
  const password = watch("password");

  return (
    <>
      <div className="container" style={{ margin: "auto" }}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          style={{
            width: "400px",
            height: "300px",
            border: "2px solid black",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            margin: "20px auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "10px auto" }}>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              style={{ padding: "10px", fontSize: "16px" }}
            />
          </div>

          <div style={{ margin: "10px auto" }}>
            <input
              type="password"
              placeholder="************"
              {...register("password", { required: "true" })}
              style={{ padding: "10px", fontSize: "16px" }}
            />
          </div>

          <div style={{ margin: "10px auto" }}>
            <input
              type="submit"
              value="Login"
              style={{ padding: "10px", fontSize: "16px" }}
            />
          </div>
        </form>

        <h1>Email: {email}</h1>
        <h1>password: {password}</h1>
      </div>
    </>
  );
};

export default Form;
