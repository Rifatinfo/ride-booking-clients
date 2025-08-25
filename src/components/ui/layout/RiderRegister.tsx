import { RiderRegisterForm } from "@/components/RiderRegisterForm";
import riderRegister from "../../../assets/images/riderRegister_2.avif"
// import riderRegister from "../../../assets/images/ridesharing.png"
const RiderRegister = () => {
    return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RiderRegisterForm/>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={riderRegister}
          alt="Image"
          className="absolute inset-0 h-full w-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
};

export default RiderRegister;

