"use client"

type EventFormProps = {
    userId: string
    type: "create" | "update"
}

export const EventForm = ({ userId, type }: EventFormProps) => {
  return (
    <div>EventForm {type}</div>
  )
}

export default EventForm