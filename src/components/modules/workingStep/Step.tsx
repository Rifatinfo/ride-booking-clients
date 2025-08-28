import step_1 from "../../../assets/images/step-1.jpg"
import step_2 from "../../../assets/images/step-2.jpg"
import step_3 from "../../../assets/images/step-4.jpg"
import step_4 from "../../../assets/images/step-5.jpg"
import step_5 from "../../../assets/images/step-6.jpg"
import { Timeline } from "./Timeline";


export function Step() {
    const data = [
        {
            title: "Step 1",
            content: (
       <div className="flex flex-col gap-2 max-w-sm">
                    {/* img */}
                    <img src={step_1} alt="" />
                    <span className="text-2xl font-bold text-gray-200">01</span>

                    {/* title  */}
                    <h3 className="text-2xl font-bold text-gary-900">Login to Account</h3>

                    {/* description  */}
                    <p className="text-gray-600">
                        Sign in securely to book your ride in seconds.
                        Your journey starts with just one tap.
                    </p>

                </div>
      ),
        },
        {
            title: "Step 2",
            content: (
        <div className="flex flex-col gap-2 max-w-sm">
                    <img src={step_2} alt="" />
                    {/* Step Number */}
                    <span className="text-3xl font-bold text-gray-200">02</span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                        Request Your Ride
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">
                        Choose your destination, pick a ride that suits you,
                        and confirm in seconds. Your driver will be on the way.
                    </p>
                </div>
      ),
        },
        {
            title: "Step 3",
            content: (
        <div className="flex flex-col gap-2 max-w-sm">
                    <img src={step_3} alt="" />
                    {/* Step Number */}
                    <span className="text-3xl font-bold text-gray-200">03</span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                        Wait for Your Ride
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">
                        Track your driver in real-time and relax while they
                        head to your location. Your ride is just minutes away.
                    </p>
                </div>
      ),
        },
        {
            title: "Step 4",
            content: (
                <div className="flex flex-col gap-2 max-w-sm">
                    <img src={step_4} alt="" />
                    {/* Step Number */}
                    <span className="text-3xl font-bold text-gray-200">05</span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                        Arrive at Your Destination
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">
                        Reach your destination safely and comfortably.
                        Pay securely and rate your driver to complete the journey.
                    </p>
                </div>
      ),
        },
        {
            title: "Step 5",
            content: (
                 <div className="flex flex-col gap-2 max-w-sm">
                    <img src={step_5} alt="" />
                    {/* Step Number */}
                    <span className="text-3xl font-bold text-gray-200">06</span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                        Pay Cashless for Your Ride
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">
                        Enjoy a hassle-free payment experience with secure in-app
                        payments. No cash, no worries — just ride and go.
                    </p>
                </div>
      ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

