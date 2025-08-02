import { motion } from "motion/react";

export default function HowWeWork() {
  const steps = [
    {
      title: "Discovery & Consultation",
      description:
        "We kick off with a discovery session to understand your business goals, target audience, and unique challenges. This allows us to propose tailored digital solutions that align with your vision and objectives.",
      icon: "🔍",
    },
    {
      title: "Creative Design & Prototyping",
      description:
        "Our design team crafts sleek, user-friendly interfaces that reflect your brand's identity. We create wireframes and interactive prototypes to ensure the look and feel matches your expectations before development begins.",
      icon: "🎨",
    },
    {
      title: "Development & Implementation",
      description:
        "Using modern technologies like React, TypeScript, and secure coding practices, we develop fast, scalable, and reliable web applications. We keep you updated with regular progress demos and feedback loops.",
      icon: "💻",
    },
    {
      title: "Quality Assurance & Launch",
      description:
        "Before launch, we rigorously test for performance, usability, and security vulnerabilities. Once approved, we handle deployment and monitor the launch to ensure everything runs smoothly.",
      icon: "🚀",
    },
    {
      title: "Ongoing Support & Growth",
      description:
        "Our relationship doesn’t end at launch. We offer continuous support, maintenance, and upgrades to help your platform grow and stay ahead in a rapidly evolving digital landscape.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4 text-transparent bg-clip-text text-5xl font-bold text-center bg-gradient-to-r from-red-500 to-violet-500">
          How We Work
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          At Kodix, we follow a collaborative and transparent process to deliver
          digital solutions that meet real business needs.
        </p>
      </div>
        <div className="flex flex-col md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
            <div
              key={index}
              className="flex flex-col border sm:flex-row items-center gap-4 rounded-2xl shadow-md p-6 backdrop-blur border-gray-200 dark:border-slate-900 dark:shadow-white/10"
            >
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
    </section>
  );
}
