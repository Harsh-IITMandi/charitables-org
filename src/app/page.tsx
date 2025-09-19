import Link from "next/link";
import Image from "next/image";
import { pageContent } from "~/config/pages";
import { siteConfig } from "~/config/site";
import Button from "~/components/ui/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {pageContent.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageContent.home.hero.subtitle}
            </p>
            <div className="space-x-4">
              <Link href="/donate">
                <Button size="lg" variant="inverse">
                  Donate Now
                </Button>
              </Link>
              <Link href="/application">
                <Button size="lg" variant="inverse">
                  Apply for Scholarship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pageContent.home.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {siteConfig.organization.mission}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Since {siteConfig.organization.founded}, we have been committed to creating lasting change in communities worldwide through education, support, and empowerment.
              </p>
              <Link href="/about">
                <Button>Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/about/mission-image.jpg"
                alt="Our mission in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Aid for Students
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide scholarships and emergency financial assistance to help students achieve their educational goals.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <span className="text-sm font-medium text-gray-700">Scholarships</span>
            </div>
          </div>

          <Link href="/application">
            <Button size="lg">Apply for Scholarship</Button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create educational opportunities for everyone. Every contribution makes a real impact.
          </p>
          <div className="space-x-4">
            <Link href="/donate">
              <Button size="lg" variant="outline">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}