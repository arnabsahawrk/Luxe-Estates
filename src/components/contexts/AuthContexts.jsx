import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignIn User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //SignOut User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Update Profile
  const updateUserProfile = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: url || user?.photoURL,
    });
  };

  //Sign In With Medium
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInWithMedium = (medium) => {
    switch (medium) {
      case "google":
        return signInWithPopup(auth, googleProvider);
      case "facebook":
        return signInWithPopup(auth, facebookProvider);
      case "github":
        return signInWithPopup(auth, githubProvider);
    }
  };

  //Observer On User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const everyAuth = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
    signInWithMedium,
  };
  return (
    <AuthContext.Provider value={everyAuth}>{children}</AuthContext.Provider>
  );
};

AuthContexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContexts;
