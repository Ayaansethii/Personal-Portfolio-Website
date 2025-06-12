import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Timeline
      </motion.h2>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl px-4">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-500 z-0 transform -translate-x-1/2" />

          <div className="flex flex-col gap-20">
            {/* Cashly Inc. - Left Side */}
            <div className="relative flex justify-start">
              <div className="absolute top-1/2 left-1/2 -translate-x-[calc(100%+12px)] -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border border-white z-10" />
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0px 8px 24px rgba(255, 105, 180, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[45%] rounded-2xl bg-neutral-900 p-4 shadow-md z-10"
              >
                Computer Engineer - TMU
              </motion.div>
            </div>

            {/* Environment Canada - Right Side */}
            <div className="relative flex justify-end">
              <div className="absolute top-1/2 left-1/2 translate-x-[calc(100%+12px)] -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border border-white z-10" />
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0px 8px 24px rgba(255, 105, 180, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[45%] rounded-2xl bg-neutral-900 p-4 shadow-md z-10 translate-x-[12px]"
              >
                Software Developer – Environment Canada
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;