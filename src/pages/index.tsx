import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import TypingText from "@/components/typingText";
import Marquee from "@/components/quotes";


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
          <h2 className="py-3 text-transparent bg-clip-text text-5xl font-bold text-center bg-gradient-to-r from-orange-300 to-red-500">Here at Kodix</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are your partner in digital innovation — combining top-notch
            web development, stunning design, and reliable security to bring
            your ideas to life.
          </p>
        </div>
<motion.div
        initial={{ y: "10vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">💻 Development</h3>
            <p className="text-base leading-relaxed">
              We build custom, scalable web applications tailored to your needs,
              using the latest technologies and clean code.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">🎨 Design</h3>
            <p className="text-base leading-relaxed">
              Our designs are crafted to captivate — blending functionality and
              aesthetic to create seamless user experiences.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 backdrop-blur border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">🔐 Security</h3>
            <p className="text-base leading-relaxed">
              From secure coding practices to penetration testing, we make sure
              your digital products are protected from the start.
            </p>
          </div>
        </div>
          </motion.div>
      </section>

    <TypingText />
    <Marquee />
      
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div
          className="sm:flex sm:flex-col sm:align-center pw-10 pt-25"
        >
          <h2 className={" py-3 text-transparent bg-clip-text text-5xl font-bold text-center bg-gradient-to-r from-red-500 to-purple-500"}>view our plans</h2>
          <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold">Basic</h2>
                <p className="mt-2 text-base leading-tight">
                For individuals & small businesses
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tighter">
                  €150
                  </span>
                </p>
                <Link
                  to="/contact"
                  className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
                >
                  Contact us for a Basic plan
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">1-5 page static website</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Custom design (basic)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Mobile responsive</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">SEO setup (basic)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">
                    Basic security setup (HTTPS, form spam protection)
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Delivery in 7–10 days</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Real-time analytics</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border shadow-[0px_8px_19px_-2px_rgba(140,_0,_255,_0.65)] border-slate-200 rounded-lg divide-y divide-slate-200 ">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold">Professional</h2>
                <p className="mt-2 text-base leading-tight">
                For growing businesses
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tighter">
                  €500
                  </span>
                </p>
                <Link
                  to="/contact"
                  className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
                >
                  Contact us for a Professional plan
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Up to 10 pages</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Custom design with animations</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Mobile responsive</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">SEO setup (basic)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">
                    Contact form + mailing integration
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Security hardening (headers, basic WAF, etc.)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Delivery in 10–14 days</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Real-time analytics</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold">Premium</h2>
                <p className="mt-2 text-base leading-tight">
                For serious brands/startups
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tighter">
                  €1,200+
                  </span>
                </p>
                <Link
                  to="/contact"
                  className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
                >
                  Contact us for a Premium plan
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Custom web app or e-commerce</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Mobile Responsive</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Advanced SEO</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Contact form + mailing integration</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Security hardening (headers, basic WAF, etc.)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Admin panel/backend</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Ongoing support (1 month included)</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Delivery in 3–4 weeks</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">Real-time analytics</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base">+ more custom features per request!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}
