export const fadeIn = (dir, i=1, d=0) => ({
  initial: {
    y: dir === 'up' ? 60 : -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const fadeInSide = (dir, i=1, d) => ({
  initial: {
    x: dir === 'right' ? 60 : -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
}

export const alatWrapper = {
  initial: {
    y: -300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
}

export const alat = (i) => ({
  initial: {
    y: 0,
  },
  animate: {
    y: [20, 0, 20],
    transition: {
      delay: 1,
      duration: 1 * i,
      ease: "linear",
      repeat: Infinity,
    },
  },
})

export const leavesContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.2,
    },
  },
};

export const bounce = (i) => ({
  initial: {
    y: 0,
  },
  animate: {
    y: [5, -2.5, 5],
    transition: {
      delay: 1,
      duration: 1 * i,
      ease: "linear",
      repeat: Infinity,
    },
  },
})

export const fadeInHidden = (dir, i=1, d=0) => ({
  hidden: {
    y: dir === 'up' ? 60 : -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const fadeInSideHidden = (dir, i=1, d) => ({
  hidden: {
    x: dir === 'right' ? 60 : -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const scaleHide = (i=1, d) => ({
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    duration: 0.4 * i,
    delay: d,
    ease: "easeInOut"
  },
})

export const exitEnter = () => ({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

export const fade = (i, d) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})
