import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const checkUser = async () => {
    try {
      const result = await axios.post(`https://services.digitalcredit.mn/api/check/leasing`, {
        income: 1600939426988,
        income_type: 16417876953131,
        register: "ГЮ97112518",
        type: 16082024283142,
        channel: 1626864048648,
      });
      setUserData(result.data.data);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return [userData, error];
};
