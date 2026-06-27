"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

import { contactData } from "@/data/contact";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: contactData.github,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: contactData.linkedin,
  },
  {
    icon: FaDiscord,
    label: "Discord",
    href: contactData.blog,
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: contactData.photography,
  },
];

export default function ContactInfo() {
  return (
    <div>

      {/* Label */}

      <div className="flex items-center gap-3 mb-5">
        <span className="w-10 h-px bg-accent" />

        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Contact
        </p>
      </div>

      {/* Heading */}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Let's Build Something Meaningful.
      </h2>

      {/* Intro */}

      <p className="text-text-2 leading-8 mb-10 max-w-lg">
        Whether it's a product, startup,
        collaboration, freelance work or simply
        a conversation about development,
        I'd love to hear from you.
      </p>

      {/* Contact Details */}

      <div className="space-y-5 mb-10">

        {/* Email */}

        <div className="flex items-center gap-4">
          <div
            className="
            w-11
            h-11

            border
            border-border

            flex
            items-center
            justify-center
          "
          >
            <Mail
              size={18}
              className="text-accent"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-3">
              Email
            </p>

            <a
              href={`mailto:${contactData.email}`}
              className="hover:text-accent transition-colors"
            >
              {contactData.email}
            </a>
          </div>
        </div>

        {/* Location */}

        <div className="flex items-center gap-4">
          <div
            className="
            w-11
            h-11

            border
            border-border

            flex
            items-center
            justify-center
          "
          >
            <MapPin
              size={18}
              className="text-accent"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-3">
              Location
            </p>

            <p>{contactData.location}</p>
          </div>
        </div>

        {/* Availability */}

        <div
          className="
          inline-flex
          items-center
          gap-3

          mt-4

          px-4
          py-2

          border
          border-border

          text-xs
          uppercase
          tracking-[0.2em]
        "
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          Available for Freelance
        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mb-12">

        <Button
          asChild
          variant="primary"
          className="group"
        >
          <a href={`mailto:${contactData.email}`}>
            Email Me

            <ArrowUpRight
              size={18}
              className="
                ml-2

                transition-transform

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
        >
          <a
            href={contactData.resume}
            target="_blank"
          >
            Resume
          </a>
        </Button>

      </div>

      {/* Socials */}

      <div className="flex gap-4">

        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}

              whileHover={{
                y: -5,
              }}

              className="
                w-12
                h-12

                border
                border-border

                flex
                items-center
                justify-center

                hover:border-accent
                hover:text-accent

                transition-all
                duration-300
              "
            >
              <Icon size={18} />
            </motion.a>
          );
        })}

      </div>

    </div>
  );
}