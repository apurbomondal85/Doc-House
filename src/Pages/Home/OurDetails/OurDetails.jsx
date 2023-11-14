import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

function OurDetails() {
    const cartList = [
        {
            name : "Opening Hours",
            des : "Open 9.00 am to 5.00pm Everyday",
            icon : <FaClock></FaClock>
        },
        {
            name : "Our Locations",
            des : "Dhanmondi 17, Dhaka -1200, Bangladesh",
            icon : <FaLocationDot></FaLocationDot>
        },
        {
            name : "Contact Us",
            des : "+88 01750 00 00 00 +88 01750 00 00 00",
            icon : <FaPhoneFlip></FaPhoneFlip>
        }
    ]
  return (
    <div className="container lg:py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {
            cartList?.map((item, index) => 
            <div key={index} className={`rounded-lg p-12 shadow-md flex justify-center gap-4 ${item.name === "Our Locations" ? 'bg-[#F7A582]': 'bg-[#07332F]'}`}>
                <div className=""><span className="text-4xl text-white">{item.icon}</span></div>
                <div className="space-y-3 text-white">
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                    <p>{item.des}</p>
                </div>
            </div>
            )
        }
      </div>
    </div>
  )
}

export default OurDetails
