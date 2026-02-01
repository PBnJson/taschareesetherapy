import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://www.taschareesetherapy.com'
  
  const content = `# Tascha Reese Therapy

> Therapy website offering services in Canton and Dallas, TX.

## Summary
Tascha Reese Therapy provides professional therapy services. This website includes information about services, accepted insurances, supervision for professionals, and service areas.

## Site Structure

### Main Pages
- [Home](${baseUrl}) - Main landing page with overview of services and about section.
- [Insurances](${baseUrl}/insurances) - Information about accepted insurance plans.
- [Supervision](${baseUrl}/supervision) - Details on supervision services for other therapists.
- [Professional Accountability and Client Rights](${baseUrl}/legal) - Legal rights and regulatory contact information.

### Service Areas
- [Canton, TX](${baseUrl}/service-areas/canton-tx) - Therapy services available in Canton.
- [Dallas, TX](${baseUrl}/service-areas/dallas-tx) - Therapy services available in Dallas.
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

