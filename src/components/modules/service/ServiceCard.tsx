
const services = [
  {
    id: 1,
    title: "Bike",
    description:
      "Quick and affordable bike rides for short city trips, make sure your daily travel faster , easier and save.",
    icon: "https://img.freepik.com/premium-vector/realistic-motorcycle-vector-illustration-concept_1253202-17447.jpg?w=1480",
  },
  {
    id: 2,
    title: "Car",
    description:
      "Comfortable and safe car rides for meetings, airport transfers, or longer city commutes anytime.",
    icon: "https://img.freepik.com/premium-vector/realistic-car-vehicle-vector-illustration-concept_1253202-15739.jpg",
  },
  {
    id: 3,
    title: "Food",
    description:
      "Get your favorite meals delivered hot and fresh from local restaurants right to your doorstep fast.",
    icon: "https://i.ibb.co.com/h148Qm3b/Pngtree-food-delivery-rider-on-red-20753691.png",
  },
  {
    id: 4,
    title: "Courier",
    description:
      "Send or receive packages securely with real-time tracking and verified delivery partners you trust.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2P10DbyKVZRSSrmA2st6xYo8AmCvtSZaEfg&usqp=CAU",
  },
  {
    id: 5,
    title: "Parcel",
    description:
      "Affordable parcel delivery service for personal or business needs with safe and timely handovers.",
    icon: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  },
  {
    id: 6,
    title: "Shopping",
    description:
      "Shop your favorite products online and enjoy fast, reliable doorstep delivery with secure payments.",
    icon: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg",
  },
];


export default function ServiceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div>
        {/* slider */}
        <div
          className="max-w-lg bg-white rounded-2xl shadow-xl p-6 
                cursor-pointer border-2 border-transparent 
                hover:border-red-700 hover:border-2 
                transition-all duration-300"
        >
          {/* Icon */}
          <div className="mb-4">
            <img
              src={service.icon}
              alt="Web Dev Icon"
              className="w-20 h-20"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-gray-500  mb-4">
            {service.description}
          </p>

          {/* Read More */}
          <div className="text-orange-500 font-semibold text-sm cursor-pointer inline-flex items-center group">
            Read More
            <span className="ml-1 transition-transform group-hover:translate-x-1 duration-200">
              ▢
            </span>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
