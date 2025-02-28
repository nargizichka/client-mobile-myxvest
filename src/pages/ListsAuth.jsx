import React from "react";

import HistoryAuth from "../components/HistoryAuth";
import useFetchUserProfile from "../components/useFetchUserProfile";

const ListsAuth = () => {
  useFetchUserProfile();
  return (
    <div>
      <HistoryAuth />
    </div>
  );
};

export default ListsAuth;
