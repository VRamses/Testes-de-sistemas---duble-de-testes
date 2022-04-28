export type EmailNotificationServiceSendInput = {
  to: string
  subject: string
  body: string
}

export class EmailNotificationService {
  send (_input: EmailNotificationServiceSendInput): boolean {
    return true
  }
}