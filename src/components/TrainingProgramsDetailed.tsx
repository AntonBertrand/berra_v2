import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  BookOpen,
  Heart,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import IMAGE_1 from "../assets/services-1.jpg";
import IMAGE_2 from "../assets/services-2.jpg";
import IMAGE_3 from "../assets/services-3.jpg";

export function TrainingProgramsDetailed() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-[1.1] pb-3">
            Training <span className="text-gray-600">Programs</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to develop skills, build confidence,
            and foster a love for sports. Each program is carefully structured
            to meet the needs of different age groups and skill levels.
          </p>
        </div>

        {/* After School Clubs - Detailed Section */}
        <div className="mb-24 lg:mb-32">
          <div className="bg-green-50 rounded-3xl p-8 lg:p-12 border-2 border-green-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-1 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={IMAGE_1}
                    alt="After School Clubs"
                    className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2 space-y-6">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                    SCHOOL PROGRAMS
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                    After School Clubs
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    We offer schools the opportunity to run an exclusive sports
                    club for their pupils. These sessions can take place during
                    breakfast club, lunchtime or after-school, providing
                    flexible scheduling options that work around your school's
                    timetable.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Calendar className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Flexible Scheduling
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sessions available during breakfast club, lunchtime, or
                        after-school hours.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Users className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Professional Coaching
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Qualified coaches deliver structured sessions focusing
                        on skill development.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Curriculum Integration
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Programs align with PE curriculum standards and Sports
                        Premium objectives.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Heart className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Inclusive Environment
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        All abilities welcome with adapted activities for every
                        child.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-50 text-white font-bold px-10 py-5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                >
                  Enroll in After School Clubs
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* One to One Coaching - Detailed Section */}
        <div className="mb-24 lg:mb-32">
          <div className="bg-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-emerald-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                    PERSONALIZED TRAINING
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                    One to One Coaching
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    This is particularly imperative at the ages of 4+, as it's
                    the perfect time to educate children on particular ball
                    developments, singular abilities, essential passing and
                    accepting methods. Our personalized approach ensures each
                    child receives focused attention tailored to their
                    individual needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Target className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Personalized Attention
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        One-on-one sessions allow coaches to focus entirely on
                        your child's specific needs.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Age-Appropriate Development
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Specialized programs for ages 4+ focusing on fundamental
                        motor skills.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Skill Progression
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Structured progression from basic techniques to advanced
                        skills.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Clock className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Flexible Booking
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Schedule sessions at times that work for your family.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-50 text-white font-bold px-10 py-5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                >
                  Book One to One Coaching
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={IMAGE_2}
                    alt="One to One Coaching"
                    className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Holiday Camps - Detailed Section */}
        <div className="mb-12">
          <div className="bg-lime-50 rounded-3xl p-8 lg:p-12 border-2 border-lime-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-1 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={IMAGE_3}
                    alt="Holiday Camps"
                    className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2 space-y-6">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                    HOLIDAY PROGRAMS
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                    Holiday Camps
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    All camp days are held outdoors, however we have access to
                    an indoor area if needed for lunch and if the weather
                    doesn't permit the children to play outside, we are still
                    able to play games and competitions inside. Our camps
                    provide a perfect blend of fun, learning, and physical
                    activity during school holidays.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Outdoor & Indoor Facilities
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Weather-proof camps with both outdoor and indoor spaces.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Calendar className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Full Day Programs
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Structured daily schedules with sports activities,
                        games, and competitions.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Multi-Sport Activities
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Children experience a variety of sports and activities.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Shield className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Safe & Supervised
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        All activities supervised by qualified coaches with
                        safety measures.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-50 text-white font-bold px-10 py-5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                >
                  Join Holiday Camps
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
