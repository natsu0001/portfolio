"use client";

import { motion } from "framer-motion";

import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ContactInfo />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-2xl" />

            {/* Form Card */}

            <div
              className="
                relative
                overflow-hidden

                border
                border-border

                bg-bg-2
                rounded-lg

                p-6
                md:p-8

                card-pattern-gold

                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >
              {/* Decorative Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-30

                  bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                  bg-[size:32px_32px]
                "
              />

              {/* Accent Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

              {/* Corner Decorations */}

              <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-accent/40" />

              <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-accent/40" />

              {/* Form */}

              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;