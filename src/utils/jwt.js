import jwtDecode from "jwt-decode";

const isValidToken = async (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const { exp } = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  const isValid = exp > currentTime;

  if (!isValid) {

    const refreshToken = window.localStorage.getItem("refreshToken");
    const response = await fetch("http://localhost:3001/api/auth/get-access-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    const data = await response.json();
    if (data.msg === "oke") {
      setSession(data.token, data.refreshToken);
    } else {
      return false;
    }
  }

  return true;
};



const setSession = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
