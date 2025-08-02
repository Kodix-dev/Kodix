import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import TypingText from "@/components/typingText";
import Marquee from "@/components/quotes";
import { PricingPlans } from "@/components/pricingPlans";
import HowWeWork from "@/components/HowWeWork";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <h1 className={subtitle()}>We Design, Develop, & Secure</h1>
              <h1 className="mt-6 text-4xl font-normal sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                  You Dream it,
                </span>{" "}
                <br></br>
                We Build it.
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal sm:mt-8">
                At Kodix, we develop, design, and secure modern web
                applications. From idea to launch, we craft custom solutions
                that are fast, visually striking, and built with security in
                mind — helping your business grow with confidence.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-orange-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
                <Link
                  to={siteConfig.navItems[2].href}
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold border border-transparent rounded-full"
                  role="button"
                >
                  See what we're about
                </Link>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                      stroke="url(#a)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="3"
                        y1="7.00003"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--color-red-500)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "var(--color-purple-500)" }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="ml-2 text-base font-normal">
                    Scroll down to learn more
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt="swirly 3D illustration"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pt-50 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="py-3 text-transparent bg-clip-text text-5xl font-bold text-center bg-gradient-to-r from-orange-300 to-red-500">
            Here at Kodix
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are your partner in digital innovation — combining top-notch web
            development, stunning design, and reliable security to bring your
            ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">💻 Development</h3>
              <p className="text-base leading-relaxed">
                We build custom, scalable web applications tailored to your
                needs, using the latest technologies and clean code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">🎨 Design</h3>
              <p className="text-base leading-relaxed">
                Our designs are crafted to captivate — blending functionality
                and aesthetic to create seamless user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">🔐 Security</h3>
              <p className="text-base leading-relaxed">
                From secure coding practices to penetration testing, we make
                sure your digital products are protected from the start.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <TypingText />
      <Marquee />
      <HowWeWork />
      <PricingPlans />
    </DefaultLayout>
  );
}
