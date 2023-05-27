import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const PageAnimeWrap = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default PageAnimeWrap;
