import { Mail, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";

export default memo(function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl px-4 py-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-md bg-neutral-200 dark:bg-neutral-800"
          tabIndex={0}
          aria-label="Profile photo of Mark Dixon"
        >
          <img
            src="/assets/MyPhotograph.png"
            alt="Pencil-sketch portrait of Mark Dixon with his goat herd"
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
            style={{ aspectRatio: "1/1", objectPosition: "center 32%" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Me
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-foreground text-center md:text-left">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
              Mark Dixon
            </span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>B.App Sci (Hons Geology), Grad Cert Geospatial Science</span>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4 text-center md:text-left">
            Mark is an agricultural and environmental consultant with high-level
            expertise in{" "}
            <span className="text-foreground font-medium">
              soil, hydrology, hydrogeology, and spatial analysis
            </span>
            , developed across regional salinity monitoring, nutrient management,
            reclaimed-water irrigation, contaminated land, and water resource
            projects. He also farms — as managing director of a successful
            regenerative grazing enterprise in western Victoria built on
            innovative grazing and soil-biology practices.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4 text-center md:text-left">
            He holds a Grad Cert in Geospatial Science and has decades of GIS and
            mapping experience across agriculture, environment, mining, and
            transport. Most recently, as a{" "}
            <span className="text-foreground font-medium">Geospatial Specialist</span>{" "}
            on agricultural soil carbon projects, he led multi-attribute spatial
            analysis for site selection, developed mobile apps for baseline data
            capture, and co-designed project maps with farmers using bespoke
            web-based tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="mailto:mark@markingmaps.au"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});
