"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { urlFor } from "../sanity/lib/image";
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
    const limit = 2; // Number of items per page (adjust as needed)
    const start = (page - 1) * limit;
    const end = start + limit;
    // GROQ query to fetch only the required fields from Sanity
    const query = `*[_type == "project"] | order(_createdAt desc)[${start}...${end}]{ _id, title, slug, image, link }`;
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
        endMessage={
          <p style={{ textAlign: "center" }}>No more projects to show.</p>
        }
        scrollableTarget="scrollableDiv"
        style={{ display: "flex" }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              minWidth: "300px",
              marginRight: "1rem",
              display: "inline-block",
            }}
          >
            <Card className="w-full h-[400px]">
              <CardHeader>
                <h2 className="text-3xl font-bold">{project.title}</h2>
              </CardHeader>
              <CardContent>
                <Link href={`/projects/${project.slug.current}`}>
                  {project.image && project.image.asset && (
                    <Image
                      src={urlFor(project.image).width(400).url()}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="mt-2 h-[200px]"
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
