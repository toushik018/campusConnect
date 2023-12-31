
import { useQuery } from "@tanstack/react-query";

const useUsersData = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://campus-connect-server-toushik018.vercel.app/users');
    return res.json();
  });

  console.log(users);

  return { users, refetch };
};

export default useUsersData;
