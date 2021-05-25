import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";

function useAuth() {
  const [accessToken, setAccessToken] = useState();
  const [userProfile, setUserProfile] = useState();

  const username = "p@p.com";
  const password = "parola";

  useEffect(() => {
    const urlApi = "http://localhost:3001/login";
    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAccessToken(res.accessToken);
        setUserProfile({
          email: jwtDecode(res.accessToken).email,
        });
      });
  }, []);

  return {
    accessToken,
    userProfile,
  };
}

export { useAuth };
