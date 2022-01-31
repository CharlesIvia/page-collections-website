import React, { useState, useEffect } from "react";
import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { AuthenticatedHeader } from "./AuthenticatedHeader";
import { HeroSearch } from "./HeroSearch";
import { PopularSection } from "./PopularSection";
import EndlessReading from "../assets/bookshelf_.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase";

const auth = getAuth();

export const HomeDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = collection(db, "users");
    const data = await getDocs(response);
    data.docs.forEach((item) => {
      setUsers([...users, item.data()]);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <AuthenticatedHeader />
      <HeroSearch
        searchmain="Once you learn to read, you will be forever free."
        searchimage={EndlessReading}
      />
      <Categories />
      <PopularSection />
      <Footer />
    </div>
  );
};
