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

type getUsersByRoleRes =
  | {
      educators?: user[];
      students?: user[];
    }
  | user[];

const useQueryNameByRole = {
  [usersRoles.teacher]: "getTeacher",
  [usersRoles.student]: "getStudents",
  [usersRoles.all]: "getAll",
};

const useGetUsersByRole = (role: usersRoles) => {
  return useQuery([useQueryNameByRole[role]], getUsersByRole(role));
};

const getUsersByRole = (role: usersRoles) => {
  return () =>
    axios
      .get<getUsersByRoleRes>(`${enviroment.railway}adm/getall/${role}/`)
      .then(({ data }) => data);
};

export default useGetUsersByRole;
