/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/UQF2ANtGPH0
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Reminder from "./reminder"

export function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen p-6 bg-gray-100 dark:bg-gray-800">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Reminder</h1>
      </header>
      <main className="flex flex-wrap gap-2 items-end">
        <Reminder label={"Posture Check"} timerMessage={"FIX POSTURE"} audioSrc="../../static/fix-posture.mp3" />
        <Reminder label={"Hydration Check"} timerMessage={"DRINK UP"} audioSrc="../../static/drink-water.mp3" defaultTime={1800000} />
      </main>
    </div>
  )
}
