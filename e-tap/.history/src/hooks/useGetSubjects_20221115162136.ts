import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import enviroment from "../environments/enviroment";
import { usersRoles } from "../utils/usersEnum";

const useGetSubjects = () => {
  return useQuery(["getSubjects"], getSubjects());
};

const getSubjects = () => {
  return () =>
    axios
      .get(`${enviroment.railway}adm/getall/subject/`)
      .then(({ data }) => data);
};

export default useGetSubjects;
