import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-md max-h-md bg-accent/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/3 w-[30vw] h-[30vw] max-w-sm max-h-sm bg-[hsl(190,80%,50%,0.1)] rounded-full blur-[80px]"
      />
    </div>
  );
}
