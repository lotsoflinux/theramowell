export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, problem, date, time } = body

    // Validate input
    if (!name || !phone || !problem || !date || !time) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate phone number format
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      return Response.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Validate date is in future
    const bookingDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (bookingDate < today) {
      return Response.json(
        { error: 'Please select a future date' },
        { status: 400 }
      )
    }

    // Log booking data
    console.log('Appointment booking:', {
      name,
      phone,
      problem,
      date,
      time,
      timestamp: new Date().toISOString()
    })

    // TODO: Store in database
    // TODO: Send confirmation email to user
    // TODO: Send notification to clinic

    return Response.json(
      {
        success: true,
        message: 'Your appointment has been booked successfully',
        booking: {
          name,
          phone,
          problem,
          date,
          time
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return Response.json(
      { error: 'Failed to process your booking' },
      { status: 500 }
    )
  }
}
