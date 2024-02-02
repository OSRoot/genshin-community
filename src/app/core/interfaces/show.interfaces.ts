
export interface IShow {
  _id: string
  title: string
  desc: string
  author: string
  image: string
  when: [
    {
      day: number
      startHour: number
      startMinute: number
      endHour: number
      endMinute: number
    }
  ]
  createdAt: string
  updatedAt: string
}
