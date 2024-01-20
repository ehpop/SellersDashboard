import {createContext} from "react";
import {SellersAspect} from "../components/widgets/SalesQualityWidget";

interface IWorstAspectsContext {
    worstAspects: Array<SellersAspect>,
    setWorstAspects: (worstAspects: Array<SellersAspect>) => void
}

const WorstAspectsContext = createContext<IWorstAspectsContext>(
    {
        worstAspects: [],
        setWorstAspects: (worstAspects: Array<SellersAspect>) => {
        }
    }
)

export default WorstAspectsContext;
