import React, { useEffect, useState } from "react";

export default function UseEffect() {
  // cach 1: useEffect(callback)
  // + callback se duoc goi khi component duoc mounted
  // + callback duoc goi khi component guoc gan vao DOM
  // + callback se duoc goi khi state thay doi =>it dung

  // cach 2: useEffect(callback,[])
  // + phu hop cho viec goi API de hien thi thong tin
  // + callback se duoc goi khi component duoc mounted
  // + callback chi duoc goi 1 lan sau khi component duoc mounted

  // cach 3: useEffect(callback,[deps])
  // + callback se duoc goi khi component duoc mounted
  // + callback duoc goi khi dependency (co the la state, props hoac du lieu khac) thay doi

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   //Cach 1:
  //   useEffect(() => {
  //     // thay doi tieu de tren tab trinh duyet
  //     document.title = name;
  //     console.log("useEffect duoc goi...");
  //   });

  //   // cach 2:
  //   useEffect(() => {
  //     console.log("userEffect o cach thu 2 duoc goi");
  //   }, []);

  // cach 3:
  useEffect(() => {
    console.log("userEffect o cach thu 3 duoc goi", name);
  }, [name]);
  useEffect(() => {
    console.log("userEffect o cach thu 3 duoc goi", email);
  }, [email]); //su dung toan tu === de so sanh
  const handleSubmit = (e) => {
    e.preventDefault();
    // lay du lieu tu cac o input va gui len server
    const newUser = {
      name: name,
      email: email,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(newUser);
  };

  return (
    <>
      {console.log("render")}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter username..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
