"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data for appointments
const appointments = [
  { id: 1, service: 'Lash installation', date: '2023-07-15', time: '10:00 AM', status: 'Upcoming' },

]

export default function DashboardPage() {
  const [userAppointments, setUserAppointments] = useState(appointments)

  const cancelAppointment = (id: number) => {
    setUserAppointments(userAppointments.filter(app => app.id !== id))
    // Here you would typically send a request to your backend to cancel the appointment
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-lavender-800 mb-6">My Dashboard</h1>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="past">Past Appointments</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {userAppointments.filter(app => app.status === 'Upcoming').map(appointment => (
            <Card key={appointment.id} className="mb-4">
              <CardHeader>
                <CardTitle>{appointment.service}</CardTitle>
                <CardDescription>{appointment.date} at {appointment.time}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" onClick={() => cancelAppointment(appointment.id)}>
                  Cancel Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="past">
          {userAppointments.filter(app => app.status === 'Completed').map(appointment => (
            <Card key={appointment.id} className="mb-4">
              <CardHeader>
                <CardTitle>{appointment.service}</CardTitle>
                <CardDescription>{appointment.date} at {appointment.time}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

