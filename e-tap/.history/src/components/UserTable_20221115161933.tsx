import useFilterData from "../hooks/useFilterData";
import useGetUsersByRole from "../hooks/useGetUsersByRole";
import { usersRoles } from "../utils/usersEnum";
import GenericTable from "./GenericTable";

type Props = {
  searchText?: string;
  role: usersRoles;
};

const UserTable = ({ searchText, role }: Props) => {
  const { data: users, error, isLoading } = useGetUsersByRole(role);
  const filteredUsers = useFilterData(users, searchText);

  if (isLoading) return <div>CARREGANDO...</div>;
  if (error) return <div>ERRO</div>;
  if (!users?.length) return <div>SEM DADOS</div>;

  return (
    <GenericTable
      values={filteredUsers ?? users}
      columns={Object.keys(users[0])}
    />
  );
};

export default UserTable;
