
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    id: 1,
    name: 'Lash Installation',
    description: 'A lash & brows extension service according to customers needs.',
    duration: '60 min',
    price: '$80'
  },

  // Add more services as needed
]

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-lavender-800 mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold">{service.price}</span>
              <Button asChild>
                <Link href={`/book?service=${service.id}`}>Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

