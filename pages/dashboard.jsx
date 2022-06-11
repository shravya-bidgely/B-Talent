import React from "react";
import { useRouter } from "next/router";
import Trainee from "../components/Trainee";
import Manager from "../components/Manager";

function Dashboard() {
  const router = useRouter();
  //console.log(router.query.type);
  var data = router.query;
  return <>{data?.type == "trainee" ? <Trainee /> : <Manager />}</>;
}

export default Dashboard;
