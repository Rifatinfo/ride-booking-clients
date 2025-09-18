
import { FaPlus, FaMinus } from "react-icons/fa";
import goal from '../../../assets/images/out-goal.jpg';
import { useState } from "react";

const faqData = [
  {
    title: "Mission",
    content:
      "Our mission is to transform everyday travel by providing safe, reliable, and affordable rides for all. We strive to empower drivers with fair opportunities, ensure passengers have transparent and comfortable journeys, and contribute to building smarter, greener, and more connected cities through innovative mobility solutions.",
  },
  {
    title: "Vision",
    content:
      "Our vision is to create the most trusted and accessible ride-sharing platform that redefines urban mobility. We envision a future where technology connects people seamlessly, ride-sharing reduces congestion and emissions, and communities benefit from inclusive, sustainable, and equitable transportation for generations to come.",
  },
];


export default function MissionVision() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
    
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* FAQ Section */}
        <div className="space-y-6 w-full md:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-8">Achieve Goal</h2>
          <div>
            <p className="text-lg font-semibold">
            At XRide, our mission is to provide safe, reliable, and affordable on-demand transportation that connects riders and drivers while improving urban mobility. We build technology and services that prioritize passenger safety, driver fairness, and community impact — reducing congestion, lowering emissions through ride-pooling options, and expanding convenient transport access for underserved neighborhoods.
            </p>
          </div>
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
                <div className="p-4 text-gray-700">{faq.content}</div>
              )}
           </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img className="rounded-xl w-full object-cover" src={goal} alt="Goal" />
        </div>
      </div>
    </div>
  );
}