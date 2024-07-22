import Intro from '@/components/intro';
import PageHeader from '@/components/page-header';
import SectionDivider from '@/components/section-divider';
import SectionHeading from '@/components/section-header';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-24 px-12 sm:p-24">
      <PageHeader>Home</PageHeader>
      <Intro />
      <SectionDivider />
      <SectionHeading>Skills</SectionHeading>
      <Skills />
    </div>
  );
}
