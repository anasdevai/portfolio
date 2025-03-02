// app/projects/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  video: {
    asset: {
      url: string;
    };
  };
  link: string;
  description: string;
  tags: string[];
}

// Optional: Generate static paths for SSG
export async function generateStaticParams() {
  const query = `*[_type == "project"]{ 'slug': slug.current }`;
  const projects: { slug: string }[] = await client.fetch(query);
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    tags[],
    video{
      asset->{
        url
      }
    },
    link,
    description
  }`;
  
  const project: Project = await client.fetch(query, { slug });

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold my-4">{project.title}</h1>
      <div className="py-[40px]">
      {project.video && project.video.asset && (
          <div className="mb-6">
            <video controls className="w-full rounded-md shadow-lg">
              <source src={project.video.asset.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
        {project.link && (
          <div className="mb-6">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Visit Project
            </Link>
            {project.tags.map((tag ,_id:number)=>(
              <span key={_id} className="bg-gray-200 text-gray-800 px-2 py-1 rounded ml-2">{tag}</span>
            ))}

          </div>
        )}
        <div className="w-[90%] font-normal">
        {project.description && (
          <div className="prose max-w-none">
            {project.description}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
