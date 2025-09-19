import Link from "next/link";
import { pageContent } from "~/config/pages";
import { siteConfig } from "~/config/site";
import { featureConfig } from "~/config/features";
import Button from "~/components/ui/Button";

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {pageContent.donate.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageContent.donate.description}
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Every donation, no matter the size, makes a real difference in someone is life.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Donate
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Transfer Option */}
            {featureConfig.payments.enableBankTransfer && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bank Transfer
                  </h3>
                  <p className="text-gray-600">
                    Direct bank transfer - No processing fees
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Account Name:</span>
                        <p className="text-gray-900">{pageContent.donate.bankDetails.accountName}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Account Number:</span>
                        <p className="text-gray-900 font-mono">{pageContent.donate.bankDetails.accountNumber}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Routing Number:</span>
                        <p className="text-gray-900 font-mono">{pageContent.donate.bankDetails.routingNumber}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Bank Name:</span>
                        <p className="text-gray-900">{pageContent.donate.bankDetails.bankName}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Please include your name and email in the transfer memo so we can send you a receipt and thank you note.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Online Payment Option (Future Razorpay Integration) */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Online Payment
                </h3>
                <p className="text-gray-600">
                  Secure online donations with instant receipt
                </p>
              </div>

              {featureConfig.payments.enableRazorpay ? (
                <div className="space-y-4">
                  <p className="text-gray-700 text-center">
                    Make a secure donation using your credit card or PayPal
                  </p>
                  <Button size="lg" className="w-full">
                    Donate Online
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Powered by Razorpay - Your payment information is secure
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800 text-center">
                      <strong>Coming Soon!</strong><br />
                      We are working on setting up secure online payments. For now, please use bank transfer or contact us directly.
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="w-full">
                      Contact Us to Donate
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparency & Trust
            </h2>
            <p className="text-lg text-gray-600">
              We believe in complete transparency about how your donations are used
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">85%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Direct Impact
              </h3>
              <p className="text-gray-600">
                85% of donations go directly to programs and student support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">10%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Operations
              </h3>
              <p className="text-gray-600">
                10% covers essential operational costs and infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fundraising
              </h3>
              <p className="text-gray-600">
                5% supports fundraising activities to grow our impact
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tax Deductible Donations
              </h3>
              <p className="text-gray-600 mb-4">
                {siteConfig.name} is a registered {siteConfig.organization.registrationNumber} organization. 
                All donations are tax-deductible to the full extent allowed by law.
              </p>
              <p className="text-sm text-gray-500">
                You will receive a receipt for your donation for tax purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us continue our mission of providing educational opportunities to those who need it most.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
