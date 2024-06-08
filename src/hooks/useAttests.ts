import { useContext } from "react";
import { AttestsContext } from "../../context/AttestsContext";

export const useAttests = () => useContext(AttestsContext);
