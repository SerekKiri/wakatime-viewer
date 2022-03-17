import { Time } from './time'

export interface Entity extends Time {
  name: string,
  type: string
}