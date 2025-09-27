import { Button } from "@/components/ui/button";
import {
    Stepper,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/ui/stepper";
import { useCancelRideStatusMutation, useSingleRiderRequestQuery } from "@/redux/features/ride/ride.api";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const Tracking = () => {

    const { data , refetch} = useSingleRiderRequestQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
    
    const [cancelRideStatus] = useCancelRideStatusMutation();

    const steps = [
        {
            step: 1,
            url: "https://i.ibb.co.com/JW76sjZ6/Rider-features.jpg",
            description: "PENDING",
        },
        {
            step: 2,
            url: "https://img.freepik.com/premium-vector/lets-go-road-trip-icon-white-background-6_1119689-5163.jpg?w=1060",
            description: "REQUESTED",
        },
        {
            step: 3,
            url: "https://img.freepik.com/free-vector/taxi-service-app-design_23-2148472067.jpg?t=st=1756795586~exp=1756799186~hmac=d0fffe822ec955cd15607025eb1f9253888b74694fd6ac549ec8d20153c80925&w=1060",
            description: "ACCEPTED",
        },
        {
            step: 4,
            url: "https://i.ibb.co.com/h148Qm3b/Pngtree-food-delivery-rider-on-red-20753691.png",
            description: "PICKED",
        },
        {
            step: 5,
            url: "https://i.ibb.co.com/21HxL4Pb/couple-Rider.png",
            description: "IN_TRANSIT",
        },
        {
            step: 6,
            url: "https://img.freepik.com/premium-vector/people-order-taxi-app-concept-design_8499-1577.jpg?w=1060",
            description: "COMPLETED",
        }
    ]

    const getStepFromStatus = (status: string) => {
        const stepObj = steps.find(s => s.description === status);
        return stepObj ? stepObj.step : 1;
    }
    console.log(data?.data?.status);



    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        if (data?.data?.status) {
            setCurrentStep(getStepFromStatus(data?.data?.status));
        } else {
            setCurrentStep(1); // no ride yet
        }
    }, [data]); // works only if data updates

    return (

        <div className="min-h-screen">
            <div className="mt-[150px] mb-[80px] text-center gap-2.5 flex flex-col md:p-0 p-10 md:flex-row justify-around">
                {["ACCEPTED", "PICKED", "IN_TRANSIT", "REQUESTED", "PENDING", "COMPLETED", "CANCEL_BY_RIDER", "CANCEL_BY_DRIVER"].includes(data?.data?.status) && (
                    <Link to="/rider-emergency-way"><Button className="cursor-pointer">Emergency</Button></Link>
                )}
                {["REQUESTED", "ACCEPTED", "PICKED", "IN_TRANSIT"].includes(data?.data?.status) && (
                    <Button className="cursor-pointer" onClick={() => {
                        cancelRideStatus({ id: data?.data?._id, status: "CANCEL_BY_RIDER" })
                            .unwrap()
                            .then((res) => {
                                console.log("Ride cancel : ", res)
                                toast.success("Ride Cancel Successfully");
                                refetch();
                            }).catch((err) => {
                                console.log("Ride Error : ", err);
                            })
                    }}>Cancel Ride</Button>
                )}
                {["COMPLETED"].includes(data?.data?.status) && (
                    <Button className="cursor-pointer">Make Payment</Button>
                )}
            </div>

            <div className="flex items-center justify-center min-h-3/4 mb-[50px] md:mt-[150px]">
                <div className="w-full">
                    <div className="space-y-8 text-center">
                        <Stepper value={currentStep}>
                            {steps.map(({ step, description, url }) => (
                                <StepperItem
                                    key={step}
                                    step={step}
                                    className="relative flex-1 flex-col!"
                                >
                                    <StepperTrigger className="flex-col gap-3 rounded">
                                        <StepperIndicator />
                                        <div className="space-y-0.5 px-2">
                                            {/* <StepperTitle>{title}</StepperTitle> */}
                                            <StepperTitle className="max-sm:hidden te">
                                                {description}
                                            </StepperTitle>
                                            <img className="md:w-auto md:h-40" src={url} />
                                        </div>
                                    </StepperTrigger>
                                    {step < steps.length && (
                                        <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
                                    )}
                                </StepperItem>
                            ))}
                        </Stepper>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Tracking;