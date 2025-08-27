import Verify from "./Verify";
import verifyImage from "../../src/assets/images/verify.avif"

const VerifyFrontPage = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <Verify/>
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <img
                    src={verifyImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
};

export default VerifyFrontPage;