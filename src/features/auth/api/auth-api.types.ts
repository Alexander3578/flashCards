export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type ResponseLogin = {
  accessToken: string
}

export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type UpdateUserDataArg = {
  avatar?: string
  name?: string
}

export type RecoveryEmailArgs = {
  email: string
  html?: string
  subject?: string
}

export type ResetPasswordArgs = {
  password: string
  token: string | undefined
}
