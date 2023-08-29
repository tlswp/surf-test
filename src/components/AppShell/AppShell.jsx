const AppShell = ({ children }) => {
  return (
    <div>
      <div className=" w-full h-[60px] border-b border-gray-200 bg-white" />
      <div className=" flex">
        <div className=" w-[320px] h-screen drop-shadow-sm bg-white" />
        <div className="w-full px-[30px] pt-[36px]">{children}</div>
      </div>
    </div>
  );
};

export default AppShell;
