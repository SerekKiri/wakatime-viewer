import { Data } from './data'
import { Entity } from './Entity'
import { GrandTotal } from './grandTotal'
import { Machine } from './machine'

export interface Project {
  branches: Data[],
  categories: Data[],
  dependencies: Data[],
  editors: Data[],
  entities: Entity[],
  grandTotal: GrandTotal,
  languages: Data[],
  machines: Machine[]
  name: string,
  operating_systems: Data[]
}