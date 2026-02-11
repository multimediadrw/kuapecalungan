import { NextRequest, NextResponse } from 'next/server';

// Temporary in-memory storage (will be replaced with database)
const questions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, question } = body;

    // Validate required fields
    if (!name || !email || !question) {
      return NextResponse.json(
        { error: 'Name, email, and question are required' },
        { status: 400 }
      );
    }

    // Create question object
    const newQuestion = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      question,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Store question (temporary)
    questions.push(newQuestion);

    // TODO: Save to database using Prisma
    // const result = await prisma.question.create({
    //   data: {
    //     name,
    //     email,
    //     phone,
    //     question,
    //   },
    // });

    return NextResponse.json(
      { message: 'Question submitted successfully', data: newQuestion },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting question:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return all questions (for admin purposes)
  return NextResponse.json({ questions }, { status: 200 });
}
