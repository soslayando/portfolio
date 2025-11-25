"use client";
import * as IoIcons from "react-icons/io5";
import { motion } from "framer-motion";

export const ProcessTimeline = ({
  steps,
}: {
  steps: {
    icon: string;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <section className="bg-[var(--projects-bg-color)]">
      <h2 className="text-2xl font-heading text-center font-bold text-[var(--primary-color-weak)] mb-15">
        Process Snapshot
      </h2>
      <div className="relative flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
        {steps.map((step, i) => {
          const Icon = IoIcons[step.icon as keyof typeof IoIcons] || null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center lg:w-1/5"
            >
              <div className="relative z-5 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color-weaker)] mb-3 text-[var(--secondary-color)]">
                <Icon className="c-6 h-6" />
              </div>
              <h3 className="text-base font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-[24ch]">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-full h-[2px] bg-gray-200" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
