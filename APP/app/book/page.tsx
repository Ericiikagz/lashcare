"use client"

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  { id: 1, name: 'Lash Installation', duration: '60 min', price: '$80' },

]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialServiceId = searchParams.get('service')
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedService, setSelectedService] = useState(initialServiceId || '')
  const [selectedTime, setSelectedTime] = useState('')

  const handleBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking:', { selectedDate, selectedService, selectedTime })
    // Then redirect to a confirmation page or show a success message
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-lavender-800 mb-6">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select a Service</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id.toString()}>
                    {service.name} - {service.duration} - {service.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select a Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Button onClick={handleBooking} disabled={!selectedService || !selectedDate || !selectedTime}>
          Book Appointment
        </Button>
      </div>
    </div>
  )
}

