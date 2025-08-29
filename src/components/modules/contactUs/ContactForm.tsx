import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* heading */}
      <div className="text-center mb-10"></div>

      {/* contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <Phone className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium">+1-316-555-0116</p>
          <p className="font-medium">+1-446-526-0117</p>
        </div>
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <Mail className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium">contact@example.com</p>
          <p className="font-medium">hr@example.com</p>
        </div>
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <MapPin className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium text-center">
            8502 Preston Rd. Ingle, Maine <br /> 98380, USA
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white shadow rounded-lg w-full max-w-4xl p-8">
        <h2 className="text-xl font-semibold text-center mb-6">
          Send us a message
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full border rounded-md p-2 h-28 focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-medium py-2 rounded-md hover:bg-red-700 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
