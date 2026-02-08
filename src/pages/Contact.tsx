import { Mail, Phone, Instagram, Linkedin, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { PageHero } from "../components/PageHero";
import HERO_IMAGE from "../assets/hero-img.png";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "Info@berra-ltd.co.uk",
    href: "mailto:Info@berra-ltd.co.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 123 456 7890",
    href: null,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@Berra_Ltd",
    href: "https://www.instagram.com/berra-ltd",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@Berra_Ltd",
    href: "https://www.linkedin.com/company/berra-ltd",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mdadryvp");

  return (
    <>
      <PageHero
        variant="dark"
        title="Get In Touch"
        description="Have a question or want to learn more about our services? We'd love to hear from you."
        imageUrl={HERO_IMAGE}
        imageAlt="Drylining and interior construction"
      />

      <section
        className="relative w-full py-16 lg:py-24 bg-white"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header – aligned with About, CTA, Services */}
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="flex flex-col items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact us
              </span>
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="block w-12 h-0.5 bg-primary rounded-full" />
                <span className="block w-6 h-0.5 bg-secondary rounded-full" />
              </div>
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-4"
            >
              We're here to help
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Reach out for a no-obligation quote or to discuss your next
              project. We typically respond within one working day.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact information cards */}
            <div className="lg:col-span-1 space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-tertiary border border-gray-700/60 hover:border-primary/40 transition-all duration-200"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center ring-1 ring-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-200 hover:text-primary transition-colors break-all font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-200 font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-gray-700/60 bg-tertiary shadow-xl">
                <div className="p-6 sm:p-8 lg:p-10 border-l-4 border-primary">
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-primary bg-primary/15 border border-primary/30 w-fit mb-4">
                    Send a message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                    Get a quote or ask a question
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Fill in the form below and we'll get back to you as soon as
                    we can.
                  </p>

                  {state.succeeded ? (
                    <div className="p-5 rounded-xl bg-primary/15 border border-primary/30 text-primary font-medium">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </div>
                  ) : (
                    <form
                      action="https://formspree.io/f/mdadryvp"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="John Doe"
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="john@example.com"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="+44 123 456 7890"
                          />
                          <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Your company name"
                          />
                          <ValidationError
                            prefix="Company"
                            field="company"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-100 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                      >
                        {state.submitting ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
