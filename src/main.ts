import { el, mount } from 'redom'
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!

class App {
  constructor(){
    this.el = el('div', [
      el('h1', 'Hello VRT!'),
      el('br'),
      el('p', 'VRT is an acronym for the combination of Vite, ReDOM & TypeScript.'),
      el('a', 'Vite Documentation', {href: 'https://vitejs.dev/guide/features.html', target: '_blank'}),
      el('br'),
      el('a', 'ReDOM Documentation', {href: 'https://redom.js.org/', target: '_blank'}),
      el('br'),
      el('a', 'TypeScript Documentation', {href: 'https://www.typescriptlang.org/docs/', target: '_blank'}),
    ])
  }
}

mount(app, new App())
