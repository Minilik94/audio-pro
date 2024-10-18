import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      color="orange"
      loading={loading}
      cssOverride={override}
      size={150}
      className="max-w-[72rem] mx-auto"
    />
  );
};
export default Spinner;
