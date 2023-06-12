import {createContext, useContext} from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)


    if(context == undefined){
        throw new Error('App context must be withit in appContextProvider!')
    }

    else return context;
}


const AppContextProvider = ({childrean}) => {
    const [favorites,setFavorites] = useState([]);

    const addToFavorites = (sneaker) => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(sneaker)

        setFavorites(newFavorites);

    }

    const removeFromFavorites = (id) => {

        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book)=>book.id !== id);

        setFavorites(newFavorites);
    }


    return (
        <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;