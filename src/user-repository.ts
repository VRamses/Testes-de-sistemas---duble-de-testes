
export type User = {
  name: string
  email: string
}

export class UserRepository {
  add (_: User): boolean {
    return true
  }

  findBy (_: string): User | null {
    return null
  }
}