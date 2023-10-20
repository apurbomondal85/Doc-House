import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Spinner } from "flowbite-react";
import axios from "axios";
import ReviewList from "../ReviewList/ReviewList";

function MyReviews() {
  const { user, token } = useContext(AuthContext);
  const [selectService, setSelectService] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (user?.email && token) {
      axios({
        method: 'get',
        headers: { "authorization": `berrer ${token}` },
        url: `http://localhost:5000/appointmentBook/${user?.email}`
      },
        { email: user?.email })
        .then(data => {
          setSelectService(data.data)
          setLoader(false)
        })
    }
  }, [token])

  if (loader) {
    return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
  }
  return (
    <div className="pr-16">
      <ReviewList service={selectService} />
    </div>
  )
}

export default MyReviews
