import Link from "next/link";
import { pageContent } from "~/config/pages";
import Button from "~/components/ui/Button";

export default function ApplicationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Home/About style */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {pageContent.application.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageContent.application.description}
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to submit your application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Review Eligibility
              </h3>
              <p className="text-gray-600">
                Make sure you meet our eligibility criteria before applying
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Complete Application
              </h3>
              <p className="text-gray-600">
                Fill out our comprehensive application form with all required information
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Submit & Wait
              </h3>
              <p className="text-gray-600">
                Submit your application and we'll review it within 2-3 weeks
              </p>
            </div>
          </div>

          {/* Application Button - Using your Button component */}
          <div className="text-center">
            <a
              href={pageContent.application.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600">
              Please ensure you meet the following requirements before applying
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="space-y-4">
              {pageContent.application.eligibility.map((criterion, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600">
              Please have these documents ready before starting your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Current transcript or report card</li>
                <li>• Letter of enrollment from your institution</li>
                <li>• Academic reference letter (if available)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Family income documentation</li>
                <li>• Bank statements (last 3 months)</li>
                <li>• Any existing scholarship information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Matching your style */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your Application?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help you through the application process
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Page
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
