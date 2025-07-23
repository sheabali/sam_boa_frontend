export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-8">
            At Vine, we value your trust and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and protect your data when you use our platform.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect the following information when you use Vine:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Account Details: Name, email, username, and password</li>
              <li>Profile Information: Gender, location, profile image</li>
              <li>
                Listings & Activity: Items posted, bids made, messages sent
              </li>
              <li>
                Device & Usage Info: IP address, browser, device type, login
                history
              </li>
              <li>
                Uploaded Media: Product images, screenshots, chat attachments
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your data to:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Create and manage your account</li>
              <li>Enable buying, selling, and bidding features</li>
              <li>Show relevant products and suggestions</li>
              <li>Facilitate chat and communication between users</li>
              <li>Improve platform performance and user experience</li>
              <li>Prevent fraud, abuse, and policy violations</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How We Protect Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use modern security practices, including:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Encrypted passwords</li>
              <li>Secure database storage</li>
              <li>Limited internal access to sensitive information</li>
              <li>Regular monitoring and software updates</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Sharing Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal data.
            </p>
            <p className="text-gray-700 mb-4">
              We may share limited data with:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Service providers for analytics, hosting, support</li>
              <li>Law enforcement (if legally required)</li>
              <li>
                Other users, as part of the platform (e.g., your username and
                listings are public)
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Choices
            </h2>
            <p className="text-gray-700 mb-4">You can:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Edit or delete your profile anytime</li>
              <li>Deactivate your account</li>
              <li>Contact us to request data removal</li>
              <li>Turn off email notifications via settings</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700">
              Vine is not intended for users under 13. If we learn we&apos;ve
              collected data from a child under 13, we will delete it
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              International Users
            </h2>
            <p className="text-gray-700">
              By using Vine, you agree to the transfer and processing of your
              data in the countries where we operate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
