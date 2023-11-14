import footerImg from '../../../assets/images/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full bg-[#d8d8d8]">
      <div className='container py-16'>
        <footer>
          <div className="mx-auto w-full max-w-screen-xl lg:pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
              <div className="space-y-6 lg:w-[30%]">
                <div className="flex items-center gap-4">
                  <img src={footerImg} alt="" />
                  <p className='text-3xl font-bold space-x-1'><span className='text-[#F7A582]'>Doc</span>
                    <span>House</span></p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                <button type="button" className="text-[#F7A582] border border-[#F7A582] transition ease-in-out delay-150 hover:text-white hover:bg-[#F7A582] font-medium rounded-lg py-3 px-8 mt-8 focus:outline-none">Appointment</button>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-md font-semibold text-slate-800 uppercase">Quick Links</h2>
                  <ul className="text-slate-700 font-medium space-y-3">
                    <li><Link>About Us</Link></li>
                    <li><Link>Service</Link></li>
                    <li><Link>Doctors</Link></li>
                    <li><Link>Departments</Link></li>
                    <li><Link>Online Payment</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>My Account</Link></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-slate-800 uppercase">Doc House Services</h2>
                  <ul className="text-slate-700 font-medium space-y-3">
                    <li><Link>Pediatric Clinic</Link></li>
                    <li><Link>Diagnosis Clinic</Link></li>
                    <li><Link>Cardiac Clinic</Link></li>
                    <li><Link>Laboratory Analysis</Link></li>
                    <li><Link>Gynecological Clinic</Link></li>
                    <li><Link>Personal Counseling</Link></li>
                    <li><Link>Dental Clinic</Link></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-slate-800 uppercase">Working Hours</h2>
                  <ul className="text-slate-700 font-medium space-y-3">
                    <li><Link>Monday - 10 am to 7 pm</Link></li>
                    <li><Link>Tuesday - 10 am to 7 pm</Link></li>
                    <li><Link>Wednesday - 10 am to 7 pm</Link></li>
                    <li><Link>Thursday - 10 am to 7 pm</Link></li>
                    <li><Link>Friday - 10 am to 7 pm</Link></li>
                    <li><Link>Saturday - 10 am to 7 pm</Link></li>
                    <li><Link>Sunday - 10 am to 7 pm</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-200 sm:mx-auto" />
            <div>
              <p className="text-sm text-slate-700 text-center">Copyright © 2022 - All right reserved by Doc House Ltd</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
