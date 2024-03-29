export function msToTime(duration: number) {
   var seconds:string|number = Math.floor((duration / 1000) % 60);
   var minutes:string|number = Math.floor((duration / (1000 * 60)) % 60);
   var hours:string|number = Math.floor((duration / (1000 * 60 * 60)) % 24);

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   return hours + ":" + minutes + ":" + seconds;
}
