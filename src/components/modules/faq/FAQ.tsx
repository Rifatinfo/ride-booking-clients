import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<null | number>(null);
   const faqData = [
  {
    title: "What is Ride-Sharing?",
    content:
      "Ride-sharing is a modern transportation service that connects passengers with nearby drivers using a mobile application. Instead of owning a car or relying on traditional taxis, passengers can request rides instantly through the app. Drivers, who are verified and registered on the platform, accept these requests and provide convenient door-to-door service. This system reduces traffic congestion, lowers travel costs, and makes transportation more accessible to everyone, all while promoting eco-friendly mobility options."
  },
  {
    title: "How Do I Book a Ride?",
    content:
      "Booking a ride is quick and simple. Just open the ride-sharing app, enter your pickup and drop-off locations, and choose your preferred ride type—such as economy, premium, or shared. Once confirmed, the system instantly matches you with the nearest available driver, who then navigates to your location using GPS. You’ll receive details about your driver, vehicle, and estimated arrival time, ensuring a smooth and transparent booking experience without the need for phone calls or waiting on the street."
  },
  {
    title: "Is Ride-Sharing Safe?",
    content:
      "Safety is our top priority. Every driver on the platform undergoes a strict verification process, including background checks and vehicle inspections. All rides are GPS-tracked in real time, and passengers can share their live location with family or friends. Features like driver and passenger ratings, emergency SOS buttons, and 24/7 support provide an additional layer of security. By combining technology with accountability, ride-sharing ensures that every journey is not only convenient but also safe and reliable."
  },
  {
    title: "How Are Fares Calculated?",
    content:
      "Fares in ride-sharing are determined by a combination of distance, travel time, demand, and the type of vehicle you select. During peak hours or high-demand times, surge pricing may apply, ensuring that drivers are fairly compensated for their service. Before confirming a ride, the app displays an upfront fare estimate so passengers know exactly what to expect, eliminating surprises at the end of the trip. This transparent pricing model makes ride-sharing both predictable and fair."
  },
  {
    title: "What Payment Options Are Available?",
    content:
      "Ride-sharing apps are designed to provide flexibility in payments. Passengers can pay using cash, credit or debit cards, mobile wallets, or in-app digital payment systems. Many platforms also allow riders to save preferred payment methods for faster checkout and even split fares with friends when sharing a ride. This variety ensures that everyone—from cash-preferred riders to digital-first users—can enjoy a seamless and convenient payment experience."
  },
  {
    title: "Can I Share a Ride with Others?",
    content:
      "Yes, many ride-sharing platforms offer a pooling option that allows passengers heading in the same direction to share a single ride. This not only lowers the overall fare for each rider but also reduces the number of cars on the road, making it an environmentally friendly choice. Ride-pooling encourages community connections, helps reduce traffic congestion, and supports sustainable urban mobility. It’s an excellent option for cost savings and eco-conscious passengers."
  },
  {
    title: "What If I Need to Cancel a Ride?",
    content:
      "If you need to cancel a ride, you can do so easily from within the app before the driver arrives. While cancellations are sometimes free if done promptly, fees may apply if the driver has already traveled a significant distance toward your pickup location. This ensures fairness for both riders and drivers, respecting the driver’s time and effort. Clear cancellation policies are outlined within the app, giving passengers full transparency and control over their booking."
  }
];


    const toggleFAQ = (index : number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-30">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-red-500 sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Everything You Need to Know About Ride-Sharing</p>
            </div>

            <div className="space-y-2.5 px-4 mt-10 mb-10 max-w-7xl mx-auto">
                {faqData.map((faq, index) => (
                    <div key={index} className="rounded-lg shadow-md overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center p-4 text-lg font-semibold text-white bg-red-600 border-red-500 border-2"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.title}
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-700 font-semibold">{faq.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;