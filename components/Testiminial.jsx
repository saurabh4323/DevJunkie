"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "DevJunkie's React course completely transformed my understanding of modern web development. The projects were challenging but incredibly rewarding.",
      author: "Rahul Gujjar",
      role: "Frontend Developer",
      avatar: "/api/placeholder/48/48",
    },
    {
      content:
        "I went from zero coding knowledge to building full-stack applications in just 6 months thanks to DevJunkie's structured learning path.",
      author: "Vishal Yadav",
      role: "Software Engineer",
      avatar: "/api/placeholder/48/48",
    },
    {
      content:
        "The community is what makes DevJunkie special. Getting feedback on my projects from experienced developers accelerated my growth tremendously.",
      author: "Riya Singh",
      role: "Web Developer Student",
      avatar: "/api/placeholder/48/48",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories from Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Community
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Join thousands of developers who have transformed their careers with
            DevJunkie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 relative"
            >
              <div className="absolute -top-4 -left-4 text-5xl text-blue-500/20 font-serif">
                "
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-700 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
