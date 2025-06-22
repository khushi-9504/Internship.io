function States() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgadh",
    "Maharashtra",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Hyderabad",
    "Goa",
    "Gujarat",
    "Hariyana",
    "Karnataka",
    "Kerala",
    "Telangana",
  ];

  return (
    <>
      <h1>Lists and Keys implementation</h1>
      <h2>States of India</h2>
      {states.map((state, index) => (
        <li key={index}>{state}</li>
      ))}
    </>
  );
}

export default States;
