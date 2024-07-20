import PageHeader from '@/components/page-header';
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <PageHeader>Home</PageHeader>
      <section>{/* Skills Section */}</section>
      <SectionDivider />
    </div>
  );
}
