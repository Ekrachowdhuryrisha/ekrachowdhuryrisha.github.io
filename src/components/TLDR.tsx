import { motion } from "framer-motion";
import { Brain, GraduationCap, Rocket, Code2 } from "lucide-react";

const floatAnimation = (delay: number) => ({
  y: [0, -6, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

function StatCard({
  icon: Icon,
  value,
  label,
  delay,
}: {
  icon: typeof Brain;
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass-card p-4"
    >
      <motion.div animate={floatAnimation(delay)}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Icon className="h-5 w-5 text-accent" />
          </div>

          <div>
            <div className="text-2xl font-bold leading-tight">
              {value}
            </div>
            <div className="text-xs text-muted-foreground">
              {label}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card overflow-hidden"
    >
      <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

        <span className="ml-2 text-[10px] text-muted-foreground">
          ekra.ts
        </span>
      </div>

      <div className="px-4 py-3 font-mono text-xs leading-loose">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-sky-400">developer</span>{" "}
        <span className="text-muted-foreground">=</span>{" "}
        <span className="text-yellow-400">{"{"}</span>

        <br />

        {"  "}
        <span className="text-sky-300">name</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          "Ekra Chowdhury Risha"
        </span>
        <span className="text-muted-foreground">,</span>

        <br />

        {"  "}
        <span className="text-sky-300">role</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          "Aspiring AI/ML Engineer"
        </span>
        <span className="text-muted-foreground">,</span>

        <br />

        {"  "}
        <span className="text-sky-300">university</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          "University of Asia Pacific"
        </span>
        <span className="text-muted-foreground">,</span>

        <br />

        {"  "}
        <span className="text-sky-300">interests</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          ["Machine Learning", "LLMs", "RAG", "Backend Development"]
        </span>
        <span className="text-muted-foreground">,</span>

        <br />

        {"  "}
        <span className="text-sky-300">currentlyLearning</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          ["Deep Learning", "Computer Vision", "MLOps"]
        </span>
        <span className="text-muted-foreground">,</span>

        <br />

        {"  "}
        <span className="text-sky-300">goal</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-green-400">
          "Build AI solutions that solve real-world problems."
        </span>

        <br />

        <span className="text-yellow-400">{"}"}</span>
        <span className="text-muted-foreground">;</span>
      </div>
    </motion.div>
  );
}

export default function TLDR() {
  return (
    <section id="tldr" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Developer Profile
        </h2>

        <p className="section-subtitle">
          A quick overview of my journey, interests, and career goals.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {/* Stats */}

        <div className="grid grid-cols-2 gap-3 md:col-span-2">
          <StatCard
            icon={GraduationCap}
            value="CSE"
            label="University of Asia Pacific"
            delay={0}
          />

          <StatCard
            icon={Brain}
            value="AI/ML"
            label="Career Focus"
            delay={0.1}
          />

          <StatCard
            icon={Rocket}
            value="3+"
            label="Major Projects"
            delay={0.2}
          />

          <StatCard
            icon={Code2}
            value="Python"
            label="Primary Language"
            delay={0.3}
          />
        </div>

        {/* Code Block */}

        <div className="md:col-span-3">
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}