import ContactForm from "@/app/(frontend)/components/contact/ContactForm";
import ContactInfo from "@/app/(frontend)/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main id="contact-page" className="mb-12 px-4 xl:container md:px-8 xl:mx-auto xl:px-0">
      <h1 className="mb-12">Get In Touch with Us</h1>

      <section className="md:container md:mx-auto md:max-w-2xl lg:px-0">
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <ContactForm />
        </div>
      </section>

      <section className="mt-12 space-y-6 md:container md:mx-auto md:max-w-2xl lg:max-w-5xl lg:px-0">
        <ContactInfo />
      </section>
    </main>
  );
}
