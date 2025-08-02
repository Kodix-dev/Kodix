import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-20">
        {/* Introduction */}
        <div className="text-center">
          <h1 className="py-3 text-transparent bg-clip-text text-5xl font-bold text-center bg-gradient-to-r from-orange-300 to-red-500">
            About Kodix
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Kodix is a passionate team of developers, designers, and security
            enthusiasts who believe that every business deserves a powerful and
            secure online presence. We blend creativity, precision, and
            cutting-edge technologies to build digital experiences that not only
            look amazing but also perform and protect.
          </p>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold py-3 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-violet-500">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed">
              Our mission is simple — to empower businesses of all sizes with
              tailor-made websites and web applications that are visually
              striking, technically robust, and fortified with modern security
              standards.
            </p>
            <p className="text-base leading-relaxed">
              We partner with our clients, ensuring transparency and
              collaboration at every stage, so the final product truly
              represents their vision.
            </p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
            {/* Placeholder for an image or animation */}
            <img
              src="/purple-office.jpg"
              alt="an office in an orange to purple gradient"
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Craftsmanship",
                description:
                  "We care deeply about the quality of our code, design, and security implementations.",
              },
              {
                title: "Transparency",
                description:
                  "We believe in open communication and keeping our clients informed every step of the way.",
              },
              {
                title: "Continuous Learning",
                description:
                  "The web evolves daily — so do we. We're always upgrading our skills and tools.",
              },
              {
                title: "Security First",
                description:
                  "Security is at the core of everything we build, ensuring your digital presence stays safe.",
              },
              {
                title: "Client Partnership",
                description:
                  "We see every project as a partnership, not just a transaction.",
              },
              {
                title: "Simplicity & Usability",
                description:
                  "We strive for clean, intuitive designs that users love to interact with.",
              },
            ].map((value, idx) => (
              <motion.div
                initial={{ y: "10vh", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div
                  key={idx}
                  className="p-6 h-full rounded-2xl shadow-md border dark:shadow-orange-400 dark:hover:shadow-violet-500 shadow-violet-500 hover:shadow-orange-300  space-y-2"
                >
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Let’s Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're starting from scratch or revamping an existing
            project, Kodix is ready to bring your vision to life with skill,
            passion, and precision.
          </p>
          <Link
            to={siteConfig.navItems[3].href}
            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide bg-gradient-to-r from-orange-500 to-purple-500 capitalize text-white rounded-md hover:from-orange-600 hover:to-purple-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors duration-300"
            role="button"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
