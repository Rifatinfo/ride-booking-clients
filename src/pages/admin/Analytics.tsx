
const Analytics = () => {
    return (
        <div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-5 ">
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={""} />
                    <p className="text-3xl font-semibold text-center">Total Rides: <span className="text-red-500"> </span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={""} />
                    <p className="text-3xl font-semibold text-center">Earnings: <span className="text-red-500"></span> </p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={""} />
                    <p className="text-center text-3xl font-semibold ">Daily: <span className="text-red-500"></span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={""} />
                    <p className="text-3xl text-center font-semibold">Weekly: <span className="text-red-500"></span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={""} />
                    <p className="text-3xl font-semibold text-center">Monthly: <span className="text-red-500"></span></p>
                </div>
              </div>
          </div>
    );
};

export default Analytics;