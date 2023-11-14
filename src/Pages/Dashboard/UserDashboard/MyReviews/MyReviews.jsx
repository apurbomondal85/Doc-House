import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Spinner } from "flowbite-react";
import axios from "axios";
import ReviewList from "../ReviewList/ReviewList";
import { Helmet } from "react-helmet";

function MyReviews() {
  const { user, token } = useContext(AuthContext);
  const [selectService, setSelectService] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (user?.email && token) {
      axios({
        method: 'get',
        headers: { "authorization": `berrer ${token}` },
        url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/appointmentBook/${user?.email}`
      },
        { email: user?.email })
        .then(data => {
          const remaining = data.data.filter(item => item?.userEmail === user.email);
          setSelectService(remaining)
          setLoader(false)
        })
    }
  }, [token])

  if (loader) {
    return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
  }
  return (
    <div className="lg:pr-16">
      <Helmet><title>My-Reviews</title></Helmet>
      <ReviewList service={selectService} />
    </div>
  )
}

export default MyReviews
