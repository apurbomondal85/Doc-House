import ReviewSlider from "./ReviewSlider/ReviewSlider"


function PatientsReviews() {
  return (
    <div className="container py-16">
        <div className="space-y-4 text-center w-[80%] lg:w-[70%] mx-auto">
            <h1 className="text-4xl font-semibold">What Our Patients Says</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="pt-16">
            <ReviewSlider></ReviewSlider>
        </div>
    </div>
  )
}

export default PatientsReviews
