import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import enviroment from "../environments/enviroment";
import { usersRoles } from "../utils/usersEnum";

type user = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};

const useGetUsersByRole = (role: usersRoles) => {
  return useQuery(["getSubjects"], getUsersByRole());
};

const getUsersByRole = () => {
  return () =>
    axios
      .get(`${enviroment.railway}adm/getall/subject/`)
      .then(({ data }) => data);
};

export default useGetUsersByRole;
