import GoogleProvider from "next-auth/providers/google"

const google = GoogleProvider({
  clientId: process.env.AUTH_PROVIDER_GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.AUTH_PROVIDER_GOOGLE_CLIENT_SECRET ?? '',
})

export const authProviders = [google]