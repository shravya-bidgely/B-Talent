import { useState } from "react";
import Link from "next/Link";
import Router from "next/router";
const inputBx = `flex-grow w-full h-12 px-4 my-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm focus:border-emerald-300 focus:outline-none ; `;

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (data, type) => {
    // const res = await fetch(
    //   type == "trainee"
    //     ? "http://localhost:5000/api/session/"
    //     : "http://localhost:5000/api/session2/",
    //   {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
    const res = await fetch("https://randomuser.me/api");

    const response = await res.json();
    if (res.status == 200) {
      //   const { token } = response;
      //   localStorage.setItem("jwtToken", token);
      let userData = { id: 1, type: "trainee" };
      //   Router.push({
      //     pathname: "/dashboard",
      //     query: { data: JSON.stringify(userData) },
      //   });

      Router.push(`/dashboard?_id=${userData?.id}&type=${userData?.type}`);
    } else {
      console.log(response.msg);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = data;
    if (!email || !password) return console.error("All Fields are Required");

    loginUser(data, e.target.name);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full border border-emerald-300 sm:shadow-emerald-50 shadow-none p-5 py-10 sm:p-10 rounded-xl sm:shadow-lg flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl lg:text-4xl font-semibold text-emerald-600 mb-4 text-center">
          User Login
        </h1>

        <input
          className={inputBx}
          type="email"
          name="email"
          required
          placeholder="Enter an Email"
          value={data.email}
          onChange={handleChange}
        />

        <input
          className={inputBx}
          type="password"
          name="password"
          required
          placeholder="Enter an password"
          value={data.password}
          onChange={handleChange}
        />
        <div className="flex space-x-4 items-center">
          <input
            className="py-2 px-5 my-4 rounded-3xl bg-emerald-500 text-white max-w-max text-xl font-semibold cursor-pointer"
            type="submit"
            value="Login As Manager"
            name="manager"
          />

          <input
            className="py-2 px-5 my-4 rounded-3xl bg-emerald-500 text-white max-w-max text-xl font-semibold cursor-pointer"
            type="submit"
            value="Login As Trainee"
            name="trainee"
          />
        </div>
      </form>
    </section>
  );
}

export default Login;
