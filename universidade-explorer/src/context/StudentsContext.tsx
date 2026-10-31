import React, { createContext, useContext, useState, ReactNode } from "react";

type StudentsContextType = {
  getStudents: (course: string) => string[] | undefined;
  saveStudents: (course: string, students: string[]) => void;
};

const StudentsContext = createContext<StudentsContextType | null>(null);

export function StudentsProvider({ children }: { children: ReactNode }) {
  const [lists, setLists] = useState<Record<string, string[]>>({});

  const getStudents = (course: string) => lists[course];

  const saveStudents = (course: string, students: string[]) => {
    setLists((prev) => ({ ...prev, [course]: students }));
  };

  return (
    <StudentsContext.Provider value={{ getStudents, saveStudents }}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error("useStudents deve ser usado dentro de StudentsProvider");
  }
  return context;
}