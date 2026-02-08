import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Pop Global?",
      answer:
        "Pop Global is a premium soccer training platform for adults. We specialize in teaching beginners using iconic old-school methods mixed with modern techniques.",
    },
    {
      question: "Who can join your lessons?",
      answer:
        "Our lessons are designed for adults of all skill levels, from complete beginners to those looking to refine their techniques. Whether you've never kicked a ball or played recreationally, you're welcome to join.",
    },
    {
      question: "How can I enroll in a program?",
      answer:
        "You can enroll by visiting our website and selecting a program that fits your schedule and skill level. Simply create an account, choose your preferred training times, and complete the registration process online.",
    },
    {
      question: "Where are your training sessions held?",
      answer:
        "Our training sessions are held at premium soccer facilities across multiple locations. Once you enroll, you'll receive specific venue information based on your chosen location and program.",
    },
    {
      question: "Do you provide one-on-one coaching?",
      answer:
        "Yes, we offer personalized one-on-one coaching sessions for those who want more focused attention. These sessions can be scheduled separately and are tailored to your individual goals and skill development needs.",
    },
    {
      question: "What should I bring to my first session?",
      answer:
        "For your first session, bring comfortable athletic wear, soccer cleats or training shoes, shin guards, a water bottle, and a positive attitude. We'll provide the soccer balls and any additional training equipment needed.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Frequently <span className="text-gray-600">Asked Questions</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Everything you need to know before joining Pop Global
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop"
                alt="Soccer player kicking ball"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop"
                alt="Orange soccer ball"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-left font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-600 ml-4 flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
