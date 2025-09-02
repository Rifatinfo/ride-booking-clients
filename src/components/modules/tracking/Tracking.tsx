import {
    Stepper,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/ui/stepper";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const Tracking = () => {
    const { data } = useUserInfoQuery(undefined, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });
    console.log(data);

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
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full">
                <div className="space-y-8 text-center">
                    <Stepper value={getStepFromStatus(data?.data?.status)}>
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
                                        <img className="w-auto h-40" src={url} />
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
    );
};

export default Tracking;