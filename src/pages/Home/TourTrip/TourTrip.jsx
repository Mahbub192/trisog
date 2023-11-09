import { FaTreeCity } from "react-icons/fa6";

const Tour = [
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
  {
    id: 1,
    logo: <FaTreeCity />,
    name: "City Tours",
    count: "10 Tour+",
  },
];
const TourType = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="">
        <h3 className="text-2xl text-center">Browse By Category</h3>
        <h1 className="text-3xl font-medium mt-2 text-center">
          Pick A Tour Type
        </h1>
      </div>

      <div className="flex container mx-auto justify-between mt-20">
        {Tour.map((singleItem) => (
          <div key={singleItem.id} className="bg-white shadow-2xl px-16 py-5">
            <div className="bg-orange-300 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <p className=" text-5xl">{singleItem.logo}</p>
            </div>
            <h2 className="text-center text-xl font-medium mt-5">{singleItem.name}</h2>
            <h4 className="text-center text-lg mt-1">{singleItem.count}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourType;
