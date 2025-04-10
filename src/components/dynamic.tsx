// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// // You might want to import your custom notFound handler or define your error state here.

// interface Project {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   video?: {
//     asset: {
//       url: string;
//     };
//   };
//   link?: string;
//   description?: string;
//   tags?: string[];
// }

// export default function ProjectPage() {
//   const { slug } = useParams(); // Grab the dynamic slug from the URL.
//   const router = useRouter();
//   const [project, setProject] = useState<Project | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Ensure the slug exists before fetching
//     if (!slug) return;
//     const fetchProject = async () => {
//       const query = `*[_type == "project" && slug.current == $slug][0]{
//         _id,
//         title,
//         slug,
//         tags,
//         video{
//           asset->{
//             url
//           }
//         },
//         link,
//         description
//       }`;
//       const data: Project = await client.fetch(query, { slug });
//       if (!data) {
//         // Handle not found – you can either redirect or set an error state.
//         router.push("/404");
//         return;
//       }
//       setProject(data);
//       setLoading(false);
//     };

//     fetchProject();
//   }, [slug, router]);

//   if (loading) return <p>Loading...</p>;
//   if (!project) return <p>Project not found</p>;

//   return (
//     <div className="container mx-auto px-4 py-8 mt-20">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-7xl text-[#1b939c] italic font-bold">
//           {project.title}
//         </h1>
//         <div className="py-[40px]">
//           {project.video && project.video.asset && (
//             <div className="mb-6">
//               <video controls className="w-full rounded-md shadow-lg">
//                 <source src={project.video.asset.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           )}
//         </div>
//         {project.link && (
//           <div className="mb-6 flex flex-wrap items-center gap-2">
//             <Link
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Visit Project
//             </Link>
//             {project.tags &&
//               project.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
//                 >
//                   {tag}
//                 </span>
//               ))}
//           </div>
//         )}
//         <div className="w-[90%] font-normal">
//           {project.description && (
//             <div className="prose max-w-none">
//               {project.description}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
