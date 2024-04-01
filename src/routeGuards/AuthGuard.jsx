import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../redux/reduxSlice";
import axios from "axios";

const AuthGuard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    if (!token) {
      if (localStorage.getItem("jwtToken")) {
        const jwttoken = localStorage.getItem("jwtToken");
        dispatch(setToken(jwttoken));
      } else {
        navigate("/login");
      }
    } else {
      
      const decodedToken = async () => {
        const response = await axios.get(
          "http://localhost:5000/getRole",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const role = response.data.role;
        console.log(role, " clnt role");
        if (response.data.role == "client") {
          setIsUser(true);
        }
      };

      decodedToken();
    }
  }, [token]);

  return <div>{isUser && <Outlet />}</div>;
};

export default AuthGuard;
