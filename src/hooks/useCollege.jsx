import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useColleges = () => {
  const { user } = useContext(AuthContext);

  const { data: colleges, isLoading, error } = useQuery(['colleges', user?.email], async () => {
    const res = await fetch('https://campus-connect-server-toushik018.vercel.app/colleges');
    return res.json();
  });

  return { colleges, isLoading, error };
};

export default useColleges;
