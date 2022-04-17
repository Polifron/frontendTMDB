import React, {useState, createContext, useEffect} from 'react';
import { isPersistedStateLocalStorage } from './helpers';

export const Context = createContext();

const UserProvider =({children}) =>{
    const [state, setState] = useState(undefined);
    
    useEffect(() => {
        const localStorage = isPersistedStateLocalStorage('user')
            if(localStorage){
                console.log(`local storage ${localStorage}`);
                setState(localStorage);
                return
                
        }
      }, []);
    
    
    
 



    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default UserProvider;