
export const pause = (timer: number) => new Promise((resolve) => setTimeout(resolve, timer))
export const loop = (timer: number,resolve1:Function) => new Promise((resolve) => setInterval(resolve1, timer))
// export function test(timer1:number){
//   return  new Promise((resolve) => setTimeout(resolve, timer1))
// }
