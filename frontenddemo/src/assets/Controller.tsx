import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import styles from './Controller.module.scss'

const Controller: Component = () => {
  let toggle : HTMLAnchorElement;
  const [count, setCount] = createSignal<number>(0) 
  const [enable, setEnable] = createSignal<Boolean>(false)

  createEffect(() => {
    let els: Element | null = document.querySelector("[class*='App']")
    for (let el of (els!.children as HTMLCollectionOf<HTMLElement>)) {
      if (!enable()) {
	el.style.opacity = '1'
	el.style.transform = 'translateY(0) translateX(0) rotate(0deg)'
      } else {
	el.style.opacity = (1.0 - (count() * 0.1)).toString()
	el.style.transform = `translateY(-${count() * 20}px) translateX(-${count() * 20}px)
			      rotate(${count() * 30}deg)`
      } 
    }

    let p: HTMLCollectionOf<HTMLParagraphElement> | null = document.getElementsByTagName('p')
    for (let el of p) {
      if (!enable()) {
	el.style.opacity = '1'
	el.style.transform = 'translateY(0) translateX(0) rotate(0deg)'
      } else {
	el.style.opacity = (1.0 - (count() * 0.1)).toString()
	el.style.transform = `translateY(-${count() * 20}px) translateX(-${count() * 20}px)
			      rotate(${count() * 30}deg)`
      } 
    }
  })


  const togglePaid = () => {
    setEnable(!enable())
    if (enable()) toggle.style.color = '#84c6a7';
    else toggle.style.color = 'white';
  }

  return (
    <div class={styles.nav}>
     <div class={styles.header}>
	<h2>PTWD Demonstration</h2>
	<a>{`${count()} days`}</a>
      </div>

      <div class={styles.controls}>
	<a onClick={togglePaid} ref={toggle!}>
	  toggle
	</a>
	<a onClick={() => {
	  if (count() - 1 < 0) return;
	  setCount(count() - 1)
	}}>
	  ←
	</a>
	<a onClick={() => setCount(count() + 1)}>
	  →
	</a>
      </div>
    </div>
  )
}

export default Controller
