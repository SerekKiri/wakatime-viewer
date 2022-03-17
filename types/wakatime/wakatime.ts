import { Day } from './day'
import { User } from './user'
import { Range } from './range'

export interface WakatimeData {
  user: User,
  range: Range,
  days: Day[]
}