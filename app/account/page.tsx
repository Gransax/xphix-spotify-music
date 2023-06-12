import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

type Props = {};

const account = (props: Props) => {
  return (
    <div
      className="
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        rounded-lg
        bg-neutral-900  
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold text-white">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default account;
