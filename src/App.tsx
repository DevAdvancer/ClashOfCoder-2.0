import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mic,
  Shield,
  Megaphone,
  Utensils,
  Lightbulb,
  Gavel,
  Coffee,
  Handshake,
  Code2,
  Trophy,
  Users,
  Clock,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Gift,
  Award,
  BookOpen,
} from "lucide-react";

function FallingLanguage({
  language,
  delay,
}: {
  language: string;
  delay: number;
}) {
  const randomX = Math.random() * 100;
  return (
    <motion.div
      initial={{ y: -20, x: `${randomX}vw`, opacity: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="absolute text-purple-500/20 font-mono text-2xl whitespace-nowrap">
      {language}
    </motion.div>
  );
}

function TypingText({ text }: { text: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className="text-3xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient"
      variants={container}
      initial="hidden"
      animate="visible">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function App() {
  const languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
    "Rust",
    "TypeScript",
    "Kotlin",
    "Scala",
    "R",
    "MATLAB",
    "Perl",
    "C#",
    "Dart",
    "Elixir",
    "Clojure",
    "Julia",
    "Haskell",
    "F#",
    "Crystal",
    "Lua",
    "Groovy",
    "Objective-C",
    "Nim",
    "Erlang",
    "WebAssembly",
    "Solidity",
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to trigger animations every time
    threshold: 0.2, // Adjusted amount for smoother animations
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-purple-900/20 to-[#0a0a0a] animate-gradient"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ y: -10, x: Math.random() * 100, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative min-h-screen flex items-center justify-center z-10">
        {/* Falling Languages */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {languages.map((lang, index) => (
            <FallingLanguage key={lang} language={lang} delay={index * 0.5} />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <TypingText text="Clash of Coders 2.0" />
            <p className="text-base md:text-2xl text-gray-300 mb-8">
              Presented by WebDesert Technologies Private Limited
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 px-4">
              {[
                {
                  src: "https://cdn.universitykart.com//Content/upload/admin/hbwo2zyu.bgx.jpg",
                  size: "h-16 md:h-24",
                },
                {
                  src: "https://res.cloudinary.com/ds2xh85dt/image/upload/c_crop,ar_16:9/v1703685536/Untitled_design_30_zeqjiv.png",
                  size: "h-16 md:h-24",
                },
                {
                  src: "/acm.png",
                  size: "h-16 md:h-24",
                },
                {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyRyjptPHq17q2JDbHz_4N1mPGGjz44FAew&s",
                  size: "h-16 md:h-24",
                },
                {
                  src: "/csoi.jpeg",
                  size: "h-16 md:h-24",
                },
              ].map((logo, index) => (
                <motion.img
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  src={logo.src}
                  alt="Sponsor"
                  className={`${logo.size} object-contain`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-purple-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-lg shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
                onClick={() => scrollToSection("register-form")}>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}>
                  <Star className="w-5 h-5" />
                </motion.div>
                Register Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-lg shadow-lg flex items-center justify-center gap-2"
                onClick={() => scrollToSection("guidelines")}>
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}>
                  <BookOpen className="w-5 h-5" />
                </motion.span>
                Learn More
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-yellow-400 text-lg mt-8">
              <span className="animate-pulse">⚡</span> Exclusively for First
              Year Students
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <section id="register-form">
        <div className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] z-10">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Event Timeline
            </motion.h2>

            <div className="gap-8 md:gap-12">
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: Clock,
                    title: "Registration",
                    time: "9:00 AM - 9:15 AM",
                    description: "Check-in and receive event materials.",
                  },
                  {
                    icon: Megaphone,
                    title: "Inauguration",
                    time: "9:15 AM - 10:00 AM",
                    description: (
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Words of wisdom from Dr. Sajal Saha</li>
                        <li>
                          Award distribution for LeetCode top achievers and NAAC
                          volunteers
                        </li>
                      </ul>
                    ),
                  },
                  {
                    icon: Mic,
                    title: "Talk Seminar By Mr. Abhirup Kumar",
                    time: "10:00 AM - 10:30 AM",
                    description: "How to Crack Competative Coding for Competetion"
                  },
                  {
                    icon: Code2,
                    title: "Round 1: Coding Round",
                    time: "10:30 AM - 12:30 PM",
                    description:
                      "Solve coding challenges on CodeChef or HackerRank.",
                  },
                  {
                    icon: Utensils,
                    title: "Lunch Break",
                    time: "12:30 PM - 1:30 PM",
                    description:
                      "Take a break and refresh yourself before the next round.",
                  },
                  {
                    icon: Gavel,
                    title: "Round 1: Result Declaration",
                    time: "1:30 PM - 2:00 PM",
                    description: "Result will be declare for qualification for next round.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Round 2: Ideation & Pitching",
                    time: "2:00 PM - 3:30 PM",
                    description: "Teams will develop ideas and present them.",
                  },
                  {
                    icon: Gavel,
                    title: "Round 2 Judgement",
                    time: "3:30 PM - 5:00 PM",
                    description: "Evaluation of pitched ideas.",
                  },
                  {
                    icon: Coffee,
                    title: "Break",
                    time: "5:00 PM - 5:30 PM",
                    description:
                      "Short refreshment break before the final round.",
                  },
                  {
                    icon: Code2,
                    title: "Final Round: Implementation",
                    time: "5:30 PM - 8:00 PM",
                    description:
                      "Final coding challenge to determine the winner.",
                  },
                  {
                    icon: Trophy,
                    title: "Final Round Results & Valedictory Session",
                    time: "8:00 PM - 8:45 PM",
                    description:
                      "Announcement of winners and closing ceremony.",
                  },
                  {
                    icon: Handshake,
                    title: "Vote of Thanks",
                    time: "8:45 PM - 9:00 PM",
                    description: "Gratitude and conclusion of the event.",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { x: -50, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: 1,
                        transition: { delay: index * 0.2 },
                      },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="relative">
                    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                          <event.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-purple-300">
                            {event.title}
                          </h3>
                          <p className="text-gray-400">{event.time}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 ml-16">{event.description}</p>
                    </div>
                    {index < 3 && (
                      <div className="absolute left-[2.35rem] top-[5rem] h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-16 md:py-24 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Amazing Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Trophy,
                title: "1st Prize",
                description: "Winner Award",
                items: [
                  "Victory Award",
                  "Certificate for Winner",
                  "Allowence for next round",
                ],
              },
              {
                icon: Award,
                title: "2nd Prize",
                description: "Runner-Up Award",
                items: [
                  "Runner-Up Award",
                  "Certificate for runner-Up",
                  "Allowence for next round",
                ],
              },
              {
                icon: Gift,
                title: "3rd Prize",
                description: "2nd Runner-Up Award",
                items: [
                  "2nd Runner-Up Award",
                  "Certificate of Achievement",
                  "Allowence for next round",
                ],
              },
            ].map((prize, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 md:p-8 rounded-xl backdrop-blur-xl border border-purple-500/20">
                <prize.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
                  {prize.title}
                </h3>
                <p className="text-gray-300 mb-4">{prize.description}</p>
                <ul className="space-y-2">
                  {prize.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-400">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Guidelines Section */}
      <div
        id="guidelines"
        className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Guidelines
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 p-6 md:p-8 rounded-xl backdrop-blur-lg border border-purple-500/20">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-purple-300">
                Eligibility
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  <span>Exclusively for First Year Students</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  <span>Team Size: 3 Members</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  <span>Basic Programming Knowledge Required</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 p-6 md:p-8 rounded-xl backdrop-blur-lg border border-purple-500/20">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-purple-300">
                Event Details
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>Date: March 12th, 2025</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>Time: 9:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Venue: SOET 4001 LAB</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* New Rules and Regulations Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="bg-gray-800/30 p-6 md:p-8 rounded-xl backdrop-blur-lg border border-purple-500/20">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-purple-300">
              Rules and Regulations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Each team must have exactly 2-3 members; individual
                    participation is not allowed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    No spot registration; all teams must register before the
                    deadline.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Participants must report to the venue by 8:45 AM sharp.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    The competition consists of multiple rounds, with top teams
                    advancing further.
                  </span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Personal laptops are prohibited; systems will be provided by
                    organizers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Usage of external reference materials and internet (except
                    coding platform) is not allowed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Any form of plagiarism or malpractice will result in
                    immediate disqualification.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    Judges' decisions are final and cannot be challenged.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Event Leaders Section */}
      <div
        id="event-leaders"
        className="py-16 md:py-24 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Convenor
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                name: "Prof. (Dr.) Radha Tamal Goswami",
                role: "Pro Vice Chancellor, Adamas University",
              },
              {
                name: "Prof. (Dr.) Susanta Chakraborty",
                role: "Dean Academics, Director SOET, Adamas University",
              },
              {
                name: "Prof. (Dr.) Sajal Saha",
                role: "Head of Department, CSE, SOET, Adamas University",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/30 p-6 md:p-8 rounded-xl text-center backdrop-blur-lg border border-purple-500/20">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                  {leader.name}
                </h3>
                <p className="text-gray-400">{leader.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Coordinators Section */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Coordinators
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Dr. Debdutta Pal",
                role: "Faculty Coordinator",
              },
              {
                name: "Dr. Bodhi Chakraborty",
                role: "Faculty Coordinator",
              },
              {
                name: "Mr. Ayushman Bilas Thakur",
                role: "Faculty Coordinator",
              },
            ].map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/30 p-6 md:p-8 rounded-xl text-center backdrop-blur-lg border border-purple-500/20">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                  {coordinator.name}
                </h3>
                <p className="text-gray-400">{coordinator.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 text-center border-t border-purple-500/20 z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-400">
          Powered by WebDesert Technologies Private Limited
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
