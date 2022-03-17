import { Data } from './data'
import { GrandTotal } from './grandTotal'
import { Project } from './project'

export interface Day {
  categories: Data[],
  date: string,
  dependencies: Data[],
  editors: Data[],
  grand_total: GrandTotal
  languages: Data[],
  machines: Data[],
  operating_systems: Data[],
  projects: Project[]
}
