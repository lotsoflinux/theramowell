export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would integrate with your email service
    // For now, just log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Send email notification to clinic
    // TODO: Send confirmation email to user

    return Response.json(
      { success: true, message: 'Your message has been received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
