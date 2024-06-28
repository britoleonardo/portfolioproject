import { motion } from "framer-motion";
//variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
// Calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; //Numbers of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*render 6 motion divs, each representing a step of the stairs
    each div will have yhe same animation defined by the satirsAnimation object.
    The delay for each div calculated dinamically based on it's reversed index
    creating a staggered effect with decreasing delay for esch subsequent step.
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
