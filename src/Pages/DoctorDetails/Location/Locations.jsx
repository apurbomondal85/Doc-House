import { FaLocationDot } from "react-icons/fa6";


function Locations({ doctor }) {
  const { location, aboutMe } = doctor;
  return (
    <div className="text-[#3B3A3A]">
      <h3 className='text-xl font-semibold text-black mb-4'>About Me</h3>
      <p>{aboutMe} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero deserunt possimus magnam et autem architecto, nihil quas repudiandae beatae at ullam nisi sunt consequatur aperiam harum iste laudantium neque?</p>
      <div className="mt-12">
        <h3 className='text-xl font-semibold text-black mb-4'>Location</h3>
        <p className="flex items-center gap-2 mb-8"><FaLocationDot></FaLocationDot><span>{location}</span></p>
        <div className="w-full h-[500px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52159814.07453338!2d-53.45856958805517!3d37.06743350436718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1696211315775!5m2!1sen!2sbd" className="w-full h-full" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Locations
