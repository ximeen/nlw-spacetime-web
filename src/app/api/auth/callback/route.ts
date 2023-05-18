import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data
  const redirectURL = new URL('/', request.url)
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // SEGUNDO * MINUTO * DIA * QUANTIDADE DE DIAS DESEJADO

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
