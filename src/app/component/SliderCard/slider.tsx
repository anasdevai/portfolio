import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Code Snippet",
    art: "https://img.freepik.com/free-vector/code-snippets-concept-illustration_114360-8394.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
  },
  {
    artist: "Tom Byrom",
    art: 'https://img.freepik.com/free-vector/colorful-cartoon-calculator-illustration_1308-174688.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid',
  },
  {
    artist: "hh",
    art: 'https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1403.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid',
  },
  {
    artist: "hh",
    art: "https://img.freepik.com/premium-vector/live-chat-messenger-online-support-conversation-with-customer-service_7087-1831.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
  },
  {
    artist: "hh",
    art: "https://img.freepik.com/free-vector/man-withdraw-money-from-atm-machine-his-wife-cartoon-chara_1308-109770.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
  },
  {
    artist: "hh",
    art: "https://img.freepik.com/free-vector/work-workout-goals-habits-mobile-tracking-app_23-2148647111.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
  },
]

export function Slider() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border -mt-16">
      <div className="flex w-max space-x-5 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0 text-3xl">
            <div className="overflow-hidden rounded-md m-auto mx-10 ">
              <Image 
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover mx-4 "
                width={200}
                height={100}
                
               />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <p className="text-2xl">Project Name:{""}</p>
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar className="h-5" orientation="horizontal"  />
    </ScrollArea>
  )
}
