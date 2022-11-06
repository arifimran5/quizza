import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchCategories } from './api/query';

function App() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(['categories'], fetchCategories, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(categories);

  return <div className='bg-gray-50 text-center text-2xl'>Whatupp</div>;
}

export default App;
