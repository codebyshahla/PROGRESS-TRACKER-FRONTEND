import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../redux/reduxSlice";
import axios from "axios";

function AdminRoute() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (!token) {
      if (localStorage.getItem("jwtToken")) {
        const jwtToken = localStorage.getItem("jwtToken");
        dispatch(setToken(jwtToken));
      } else {
        navigate("/login");
      }
    } else {
      const decodedToken = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getRole", {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            console.log(response.data.role );
            if (response.data.role === "admin") {
                setIsAdmin(true);
            } 
        } catch (error) {
            console.error("Error fetching role:", error);
        }
    };
    decodedToken();

    }
  }, [token]);
  return isAdmin ? <Outlet /> : null;
}

export default AdminRoute;
