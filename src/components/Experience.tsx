import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Medal } from "lucide-react";
import { EXPERIENCES } from "@/constants";

const getIcon = (category: string) => {
  switch (category) {
    case "Award":
      return <Award className="h-5 w-5 text-yellow-500" />;
    case "Competition":
      return <Trophy className="h-5 w-5 text-blue-500" />;
    case "Scholarship":
      return <GraduationCap className="h-5 w-5 text-green-500" />;
    default:
      return <Medal className="h-5 w-5 text-purple-500" />;
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Achievements & Certifications</h2>

        <p className="section-subtitle">
          Awards, competitions and certifications throughout my academic journey
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {EXPERIENCES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="glass-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                {getIcon(item.category)}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.organization}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="pill text-xs">
                    {item.category}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}