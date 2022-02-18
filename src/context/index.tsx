import React, {createContext, useContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

interface IContextProps {
  networkState: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const InternetContext = createContext({} as IContextProps);

export const InternetProvider = ({children}: Props) => {
  const [networkState, setNetworkState] = useState(true);

  const onNetworkStateChange = (newState: any) => {
    setNetworkState(newState.isConnected);
    if (!newState.isConnected) {
      console.log('this is not connected', newState);
    }
  };

  const initialCheck = () =>
    NetInfo.fetch().then(connectionInfo => {
      setNetworkState(connectionInfo.isConnected as any);
    });

  useEffect(() => {
    initialCheck();
    NetInfo.addEventListener(onNetworkStateChange);
  }, [networkState]);

  return (
    <InternetContext.Provider value={{networkState}}>
      {children}
    </InternetContext.Provider>
  );
};

export const useInternet = () => useContext(InternetContext);
