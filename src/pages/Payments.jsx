import Pay from "../components/Pay";
import useFetchUserProfile from "../components/useFetchUserProfile";

const Payments = () => {
  useFetchUserProfile();
  return (
    <div>
      <Pay />
    </div>
  );
};

export default Payments;
