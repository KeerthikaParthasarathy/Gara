"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Property } from "@/types/property";

interface ModalState {
  isOpen: boolean;
  type: "enquiry" | "visit" | "partnership" | null;
  property?: Property;
}

interface AppContextType {
  currency: "INR" | "USD";
  setCurrency: (c: "INR" | "USD") => void;
  savedIds: string[];
  toggleSaveProperty: (id: string) => void;
  isSaved: (id: string) => boolean;
  modal: ModalState;
  openEnquiryModal: (property?: Property) => void;
  openVisitModal: (property?: Property) => void;
  openPartnershipModal: () => void;
  closeModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: null,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gara_saved_residences");
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access safe catch
    }
  }, []);

  const toggleSaveProperty = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("gara_saved_residences", JSON.stringify(next));
      } catch {
        // safe
      }
      return next;
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const openEnquiryModal = (property?: Property) => {
    setModal({ isOpen: true, type: "enquiry", property });
  };

  const openVisitModal = (property?: Property) => {
    setModal({ isOpen: true, type: "visit", property });
  };

  const openPartnershipModal = () => {
    setModal({ isOpen: true, type: "partnership" });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null, property: undefined });
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        savedIds,
        toggleSaveProperty,
        isSaved,
        modal,
        openEnquiryModal,
        openVisitModal,
        openPartnershipModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
