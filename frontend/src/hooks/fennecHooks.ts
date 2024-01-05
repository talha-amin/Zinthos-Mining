import { fennecIcoContractConfig } from '@/data/constants';
import { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi';

// Define the type for the data you'll be fetching
interface Data {
  // Define your data structure here
  id: number;
  name: string;
}

// Define the type for the hook
interface useFennecTxHistoryResult {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

// Define your custom hook
const UseFennecTxHistory = (address: string,txIndex:string): any => {
//   const [data, setData] = useState<Data | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);


  const { data:userTxData, } = useContractRead({
    ...fennecIcoContractConfig,
    functionName: 'noOfTx',
    args: [address,txIndex],
    watch:true
  })



//   return { data, loading, error };
  return userTxData;
};

export default UseFennecTxHistory;
