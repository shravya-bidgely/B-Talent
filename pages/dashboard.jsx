import React from "react";
import { useRouter } from "next/router";
import Trainee from "../components/Trainee";
import Manager from "../components/Manager";

function Dashboard() {
  const router = useRouter();
  var response = router.query;

  const data = JSON.parse(response.data);
  // console.log("In DashBoard", obj.isTrainee);

  return <>{data.isTrainee == true ? <Trainee /> : <Manager />}</>;
}

export default Dashboard;
