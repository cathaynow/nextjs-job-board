import prisma from "@/lib/prisma";
import JobFilterSidebar from "@/components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { jobFilterSchema, JobFilterValues } from "@/lib/validation";
import type { Metadata } from "next";

interface Pageprops {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? `${remote} Remote developer jobs`
        : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix} ${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: Pageprops): MetaData {
  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | Flow Jobs`,
  };
}

const Page = async ({
  searchParams: { q, type, location, remote, page },
}: Pageprops) => {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  );
};
export default Page;
