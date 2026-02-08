import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma, Age 8",
      content:
        "My daughter has absolutely flourished since joining Strivor! The coaches are patient, encouraging, and really know how to make sports fun. Emma's confidence has grown so much, both on and off the field.",
      rating: 5,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      name: "Michael Chen",
      role: "Parent of Jake, Age 10",
      content:
        "The holiday camps are fantastic! Jake comes home exhausted but happy every single day. The program strikes the perfect balance between skill development and having fun. Highly recommend!",
      rating: 5,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "Lisa Williams",
      role: "Parent of Olivia, Age 7",
      content:
        "The one-to-one coaching has been a game-changer for Olivia. She's learned so much in just a few sessions, and the personalized attention has really helped her overcome her initial shyness.",
      rating: 5,
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "David Thompson",
      role: "Parent of Max, Age 9",
      content:
        "Strivor has become such an important part of our family's routine. Max looks forward to every session, and we've seen incredible improvements in his teamwork and communication skills.",
      rating: 5,
      color: "from-lime-400 to-lime-600",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-200",
    },
    {
      name: "Rachel Martinez",
      role: "Parent of Sofia, Age 6",
      content:
        "The after-school club at our school is amazing! Sofia has made so many new friends and learned valuable life lessons about perseverance and respect. The coaches are wonderful role models.",
      rating: 5,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
    },
    {
      name: "James Anderson",
      role: "Parent of Noah, Age 11",
      content:
        "We've tried several sports programs, but Strivor stands out. The focus on both physical skills and character development is exactly what we were looking for. Noah has grown so much!",
      rating: 5,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">What Parents</span>{" "}
            <span className="text-gray-600">Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Real stories from families who have experienced the Strivor difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative ${testimonial.bgColor} rounded-2xl p-6 lg:p-8 border-2 ${testimonial.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col`}
            >
              {/* Quote Icon with Gradient */}
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <Quote className="h-6 w-6 text-white" fill="white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t-2 border-gray-200 pt-4">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>

              {/* Decorative Gradient Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-full blur-3xl -z-0`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Join hundreds of happy families at Strivor Sports Academy
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold ml-2">
              4.9/5 Average Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
