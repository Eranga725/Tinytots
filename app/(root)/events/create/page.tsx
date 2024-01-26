import EventForm from "@/components/ui/shared/EventForm"
import { auth } from "@clerk/nextjs"

const createEvent = () => {
  
  const { sessionClaims } = auth();

  const userID =sessionClaims?.userID as string;
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-cover
    bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Create content</h3>
    </section>

    <div className="wrapper my-8">
      <EventForm userId={userID} type="Create"/>
    </div>
    </>
  )
}

export default createEvent