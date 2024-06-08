"use client";
import { IUserExperience } from "@/types/IUserExperience";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface IAttestsContext {
  experiences: IUserExperience[];
}

export const AttestsContext = createContext({} as IAttestsContext);

export const AttestsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [experiences, setExperiences] = useState<IUserExperience[]>([]);

  useEffect(() => {
    const fetchGetMessage = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setExperiences(data.documents);
    };
    fetchGetMessage();
  }, []);

  const contextStates = useMemo(
    () => ({
      experiences,
    }),
    [experiences]
  );

  return (
    <AttestsContext.Provider value={contextStates}>
      {children}
    </AttestsContext.Provider>
  );
};
