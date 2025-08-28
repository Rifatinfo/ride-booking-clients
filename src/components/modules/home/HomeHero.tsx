import { Button } from "@/components/ui/button";
import heroBanner from "../../../assets/images/heroBanner.jpg"
import { Step } from "../workingStep/Step";
import Service from "../service/Service";
const HomeHero = () => {
    return (
        <div>
            <div className="mt-[100px]">
                <div className="space-y-4 text-center md:p-0 p-2">
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-red-500 font-semibold">Your Ride, Your Way — Anytime, Anywhere</h1>
                    <p className="text-[14px] md:tex-lg font-medium">Book rides instantly, track drivers in real time, and travel with safety and comfort</p>
                    <div className="flex justify-center items-center gap-3">
                        <Button>Book a Ride</Button>
                        <Button>Become a Driver</Button>
                    </div>
                </div>
                {/* img section  */}
                <div>
                    <img className="mx-auto" src={heroBanner} alt="" />
                </div>
            </div>
            <Service/>
            <Step/>
            
        </div>
    );
};

export default HomeHero;

