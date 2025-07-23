export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto mb-[300px] px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Terms of Use</h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p>
          Welcome to Vine — the community-driven platform where users buy, sell,
          and bid on fashion and lifestyle items. By using Vine, you agree to
          the following Terms of Use. Please read them carefully.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Eligibility</h2>
          <p className="mb-3">To use Vine, you must:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Be at least 13 years old</li>
            <li>Create an account with accurate information</li>
            <li>Use the platform for legal and respectful purposes only</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            User Accounts
          </h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              You are responsible for keeping your login credentials secure.
            </li>
            <li>
              You may not impersonate others or misrepresent your identity.
            </li>
            <li>
              You may act as a buyer, seller, or both using a single account.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            Buying & Bidding
          </h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Buyers can place bids, make counter offers, or purchase items
              directly if a seller has enabled Buy Now.
            </li>
            <li>
              Once a bid is accepted, buyers and sellers must complete the
              transaction outside Vine (via screenshot and manual payment).
            </li>
            <li>
              Vine is not responsible for payment disputes or delivery issues —
              it is your responsibility to deal fairly and communicate clearly.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            Selling on Vine
          </h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Sellers can post items based on their subscription plan (Free,
              Standard, Unlimited).
            </li>
            <li>
              All listings must be accurate, legal, and owned by the seller.
            </li>
            <li>
              Vine reserves the right to remove any item that violates community
              standards or applicable laws.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            Content Ownership
          </h2>
          <p>
            You retain ownership of the content (photos, descriptions, profile
            info) you upload. However, by posting on Vine, you grant us a
            license to display, promote, and share your content within the
            platform and across social media for promotional purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            Platform Changes
          </h2>
          <p>
            We may modify, update, or discontinue parts of Vine without prior
            notice. We also reserve the right to update these Terms at any time.
            We&apos;ll notify users of major changes.
          </p>
        </section>
      </div>
    </div>
  );
}
