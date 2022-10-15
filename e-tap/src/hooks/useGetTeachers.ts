import { useQuery } from "@tanstack/react-query";

const useGetTeachers = () => {
  return useQuery(["getTeachers"], getTeachers);
};

const getTeachers = async () => {
  await sleep(1000);
  return [
    {
      id: 1,
      name: "John Doe",
      email: "jonhdoe@gmail.com",
    },
    {
      id: 2,
      name: "John Doe",
      email: "jonhdoe@gmail.com",
    },
    {
      id: 3,
      name: "John Doe",
      email: "jonhdoe@gmail.com",
    },
    {
      id: 4,
      name: "John Doe",
      email: "jonhdoe@gmail.com",
    },
  ];
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default useGetTeachers;
