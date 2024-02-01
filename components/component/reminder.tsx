"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";
import { msToTime } from "@/helper/ms-to-time";

interface ReminderProps {
   label: string;
   timerMessage: string;
   audioSrc: string;
   defaultTime?: number;
}

const Reminder = ({ label, timerMessage, audioSrc, defaultTime=900000 }: ReminderProps) => {
   let time = useRef(defaultTime);
   const [start, setStart] = useState(false);
   const [convertedTime, setConvertedTime] = useState(msToTime(time.current));
   const audioRef:any = useRef()

   useEffect(() => {
      const interval = setInterval(() => {
         time.current -= 1000;

         //Restarts timer
         if(time.current === -5000) {
            time.current = defaultTime
         }

         //Plays audio
         if(time.current === 0 && audioRef.current){
            audioRef.current.play()
         }

         setConvertedTime(msToTime(time.current));
      }, 1000);
      if (!start) {
         clearInterval(interval);
      }
      return () => clearInterval(interval);
   }, [start]);

   return (
      <Card className={cn("flex-grow basis-[350px]", time.current<=0 && " animate-pulse bg-red-500")}>
         <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">{label}</CardTitle>
         </CardHeader>
         <CardContent className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">
               {time.current <= 0 ? `⚠️ ${timerMessage} ⚠️` : convertedTime}
            </div>
            <audio src={audioSrc} ref={audioRef} />
            <div className="w-full mt-4" />
            <div className="flex gap-4 mt-4">
               <Button
                  className={cn(
                     "text-white",
                     start
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                  )}
                  onClick={() => setStart(!start)}
               >
                  {start ? "Stop" : "Start"}
               </Button>
            </div>
         </CardContent>
      </Card>
   );
};

export default Reminder;
