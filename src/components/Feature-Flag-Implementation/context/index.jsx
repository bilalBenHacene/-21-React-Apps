import { createContext, useEffect, useState } from "react";
import apiServices from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [eanbledFeatures, setEnabledFeatures] = useState({});
  const fetchFeatrueFlags = async () => {
    setIsLoading(true);
    try {
      const response = await apiServices();
      setEnabledFeatures(response);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatrueFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ isLoading, eanbledFeatures }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
