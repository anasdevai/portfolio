// import * as React from "react"
// import Image from "next/image"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


// export interface Artwork {
//   artist: string
//   art: string
// }

// export const works: Artwork[] = [
//   {
//     artist: "Code Snippet",
//     art: "https://img.freepik.com/free-vector/code-snippets-concept-illustration_114360-8394.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
//   },
//   {
//     artist: "Tom Byrom",
//     art: 'https://img.freepik.com/free-vector/colorful-cartoon-calculator-illustration_1308-174688.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid',
//   },
//   {
//     artist: "hh",
//     art: 'https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1403.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid',
//   },
//   {
//     artist: "hh",
//     art: "https://img.freepik.com/premium-vector/live-chat-messenger-online-support-conversation-with-customer-service_7087-1831.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
//   },
//   {
//     artist: "hh",
//     art: "https://img.freepik.com/free-vector/man-withdraw-money-from-atm-machine-his-wife-cartoon-chara_1308-109770.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
//   },
//   {
//     artist: "hh",
//     art: "https://img.freepik.com/free-vector/work-workout-goals-habits-mobile-tracking-app_23-2148647111.jpg?ga=GA1.1.1801184060.1727798475&semt=ais_hybrid",
//   },
// ]

// export function Slider() {
//   return (
//     <ScrollArea className="w-full whitespace-nowrap rounded-md border -mt-16">
//       <div className="flex w-max space-x-5 p-4">
//         {works.map((artwork) => (
//           <figure key={artwork.artist} className="shrink-0 text-3xl">
//             <div className="overflow-hidden rounded-md m-auto mx-10 ">
//               <Image 
//                 src={artwork.art}
//                 alt={`Photo by ${artwork.artist}`}
//                 className="aspect-[3/4] h-fit w-fit object-cover mx-4 "
//                 width={200}
//                 height={100}
                
//                />
//             </div>
//             <figcaption className="pt-2 text-xs text-muted-foreground">
//               <p className="text-2xl">Project Name:{""}</p>
//               <span className="font-semibold text-foreground">
//                 {artwork.artist}
//               </span>
//             </figcaption>
//           </figure>
//         ))}
//       </div>
//       <ScrollBar className="h-5" orientation="horizontal"  />
//     </ScrollArea>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
}

export const Slider = () => {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    const limit = 2; // number of items per page (adjust as needed)
    const start = (page - 1) * limit;
    const end = start + limit;
    // GROQ query to fetch only title, slug, and image from Sanity
    const query = `*[_type == "project"] | order(_createdAt desc)[${start}...${end}]{ _id, title, slug, image , link }`;
    const data: Project[] = await client.fetch(query);

    setProjects((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
    if (data.length < limit) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchMoreData();
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="scrollableDiv"
      style={{  
        display: "flex",
        overflowX: "auto",
        padding: "1rem",
        whiteSpace: "nowrap",
      }}
    >
      <InfiniteScroll
        dataLength={projects.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>No more projects to show.</p>}
        scrollableTarget="scrollableDiv"
        style={{ display: "flex" }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            style={{ minWidth: "300px", marginRight: "1rem", display: "inline-block" }}
          >
            <Card className="w-full h-[400px]">
              <CardHeader>
                <h2 className="text-3xl font-bold ">{project.title}</h2>
              </CardHeader>
              <CardContent>
                <Link href={`/projects/${project.slug.current}`}>
                {project.image && project.image.asset && (
                  <Image
                  src={urlFor(project.image).width(400).url()}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="  mt-2 h-[200px]"
                  />
                )}
                </Link>
              </CardContent>
              <CardFooter>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Visit Project
                  </Link>
                  )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
