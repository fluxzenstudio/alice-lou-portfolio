// src/app/about/page.tsx
import About from "@/components/About";

export const metadata = {
  title: "Alice Lou | About",
  description:
    "Learn about Alice, her multicultural family, and her hometown of Hangzhou.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}