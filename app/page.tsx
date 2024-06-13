import Dashboard from "./Dashboard/page";
import Sidebar from "./Components/Sidebar";
export default function Home() {
  return (
    <div>
    <div className="dark:bg-[#e4f2f3]  bg-[#0C0C0D] min-h-[150vh] max-h-full font-inter flex flex-row justify-center items-start w-full xxl:!gap-[1rem] bxl:!gap-[1rem] xl:!gap-[1rem] sxl:!gap-[1rem] ">
      <div className=" xxl:inline bxl:inline xl:inline sxl:inline lg:hidden md:hidden sm:hidden xd:hidden w-[5%]  ">
        <Sidebar />
      </div>
      <Dashboard />
     </div>
  </div >

  );
}
