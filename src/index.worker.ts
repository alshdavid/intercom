



// import { Context } from './remote-execution'
// import { BehaviorSubject } from 'rxjs'
// import { map } from 'rxjs/operators'

// class Foo {
//   value = 'hello'
//   onValue = new BehaviorSubject(this.value)

//   getOnValue(...args: string[]) {
//     return this.onValue.pipe(map(v => `${v} ${args.join(', ')}`))
//   }

//   getValue(...args: string[]) {
//     return {
//       value: this.value,
//       args
//     }
//   }

//   getSetValue() {
//     return (update: string) => {
//       return () => this.setValue(update)
//     }
//   }

//   setValue(update: string) {
//     this.value = update
//     this.onValue.next(update)
//     return true
//   }
// }

// const ctx = new Context(self as any)

// ctx.provide('foo', new Foo)