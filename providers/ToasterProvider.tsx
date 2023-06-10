import { Toaster } from "react-hot-toast";

type Props = {};

const ToasterProvider = (props: Props) => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterProvider;
