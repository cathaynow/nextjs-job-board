import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import JobDetailPage from "@/components/JobDetailPage";
import AdminSidebar from "@/app/admin/jobs/[slug]/AdminSidebar";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="max-w-55xl m-auto my-10 flex flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobDetailPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
}
