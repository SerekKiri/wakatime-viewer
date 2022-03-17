import { onMount, createSignal, For } from 'solid-js'
import type { Component } from 'solid-js'

// Styles
import styles from './App.module.css'

// JSON
import * as wakatimeJSON from './data/wakatime.json'

// Types
import { WakatimeData } from '../types'


const App: Component = () => {
  const [user, setUser] = createSignal({} as any)
  const [data, setData] = createSignal([] as any)

  onMount(async () => {
    setUser((wakatimeJSON as WakatimeData).user)
    setData((wakatimeJSON as WakatimeData).days)
  })

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Wakatime Viewer of {user().display_name} data
        </p>
      </header>

      <For each={data()}>
        {(day: any) => <>
          ---------------------
          {day.projects.length > 0 ? <div>Day: {day.date}</div> : ''}
          <For each={day.projects}>
            {(project: any) =>
              <>
                <div>Project: {project.name}</div>
                <div>Grand total: {project.grand_total.decimal}</div>
              </>
            }
          </For>
        </>
        }
      </For>
    </div>
  )
}

export default App
