import WorstAspectsContext from "../context/WorstAspectsContext";
import {useState} from "react";
import {SellersAspect} from "../components/widgets/SalesQualityWidget";

const WorstAspectsProvider = ({children}: any) => {
    const [worstAspects, setWorstAspects] = useState<Array<SellersAspect>>([]);

    return (
        <WorstAspectsContext.Provider value={{worstAspects, setWorstAspects}}>
            {children}
        </WorstAspectsContext.Provider>
    );
}

export default WorstAspectsProvider;
