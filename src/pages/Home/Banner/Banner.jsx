import { useForm } from "react-hook-form";
import image1 from "../../../assets/Banner/image1.jpg";
import image2 from "../../../assets/Banner/image2.jpg";


const Banner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => { console.log(data)};
  return (
    <div className="bg-[#1D5D9B] relative h-[800px]">
      <div className="flex container mx-auto items-center justify-between pt-10">
        <div>
          <h3 className="text-[#FFCD4B]">Explore the</h3>
          <h1 className="text-6xl font-bold text-white">
            Travel & <br /> Adventures
          </h1>
          <p className="text-lg mt-2 text-white">
            Find awesome hotel, tour, car and activities in London{" "}
          </p>
        </div>
        <div className="flex ">
          <div className="h-96 w-1/2">
            <img className="h-full w-4/5 mx-auto" src={image1} alt="" />
          </div>
          <div className="h-[600px] w-1/2">
            <img className="h-full" src={image2} alt="" />
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="bg-white rounded-2xl  absolute bottom-32 left-52"> 
        <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-5 items-center gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Destination</span>
            </label>
            
            <input
              type="text"
              {...register("destination", { required: true })}
              name="Destination"
              placeholder={` Where to go?`}
              className="input input-bordered"
            />
            {errors.destination && (
              <span className="text-red-600">Destination is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            
            <input
              type="text"
              {...register("type", { required: true })}
              name="type"
              placeholder={` Activity`}
              className="input input-bordered"
            />
            {errors.type && (
              <span className="text-red-600">Type is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">When</span>
            </label>
            
            <input
              type="text"
              {...register("date", { required: true })}
              name="date"
              placeholder={`Date`}
              className="input input-bordered"
            />
            {errors.date && (
              <span className="text-red-600">Date is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Guests</span>
            </label>
            
            <input
              type="text"
              {...register("guests", { required: true })}
              name="guests"
              placeholder={` 0`}
              className="input input-bordered"
            />
            {errors.guests && (
              <span className="text-red-600">Guests is required</span>
            )}
          </div>
          <div className="form-control mt-6 w-1/2 mx-auto">
            <input
              className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
