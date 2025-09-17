import { pageContent } from "~/config/pages";
import { siteConfig } from "~/config/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {pageContent.about.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Learn about our journey, mission, and the people making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid text-center gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                {siteConfig.organization.mission}
              </p>
              <p className="text-gray-600">
                Since our founding in {siteConfig.organization.founded}, we have been dedicated to creating lasting change through education, empowerment, and community support. Every program we develop is designed with sustainability and long-term impact in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to meaningful impact - here's how we started and where we're going
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                How It All Began
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in {siteConfig.organization.founded}, our organization began with a simple yet powerful belief: that education is the key to breaking cycles of poverty and creating lasting change in communities.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small group of volunteers helping local students with their studies has grown into a comprehensive support system that addresses the multifaceted challenges facing underserved communities.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a registered {siteConfig.organization.registrationNumber} organization, working with communities, schools, and families to create opportunities for success.
              </p>
            </div>
            <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Organization Story Image</span>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The dedicated people behind our mission
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.about.team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
