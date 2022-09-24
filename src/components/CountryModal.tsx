import React from 'react';
import CountryContext from '../contexts/CountryContext';
import { createStyles } from '../utils/styles';
import useData from '../hooks/useData';
import Api from '../utils/api';
import { FullCountryData } from '../utils/api.interfaces';
import StatGroup from './StatGroup';
import { CloseIcon } from './icons';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const styles = createStyles({
  modalOverlay: [
    "fixed",
    "inset-0",
    "bg-black",
    "bg-opacity-50",
    "dark:bg-opacity-10",
    "dark:bg-white",
    "z-50",
  ],
  modal: [
    "m-auto",
    "bg-pink-light",
    "dark:bg-dark-pink-light",
    "p-4",
    "text-pink-light-fg",
    "dark:text-dark-pink-light-fg",
    "rounded-lg",
    "mt-8",
    "max-w-[400px]",
    "w-[90%]",
    "shadow-xl",
  ],
  header: [
    "text-4xl",
    "font-light",
    "flex",
    "justify-between",
    "mb-4",
    "gap-4"
  ],
  countryName: [
    "relative",
    "top-1"
  ],
  loading: [
    "mb-[17.5rem]"
  ]
});

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    maxHeight: 0
  },
  show: {
    opacity: 1,
    maxHeight: '90%',
    transition: {
      duration: 0.4,
      delay: 0.2,
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    maxHeight: 0
  }
}

const CountryModal: React.FC = () => {
  const { country, setCountry } = React.useContext(CountryContext);
  const countryData: FullCountryData | null = useData(async () => Api.getCountryData(country?.name || null));
  return (
    <AnimatePresence>
      { country &&
      <motion.div
        className={styles.modalOverlay}
        onClick={() => setCountry(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { when: "afterChildren" } }}
        transition={{ duration: 0.2 }}>
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial='initial'
          animate='show'
          exit='exit'>
          <header className={styles.header}>
            <span className={styles.countryName}>{country.name}</span>
            <a onClick={() => setCountry(null)}><CloseIcon /></a>
          </header>
          { countryData === null
          ? <div className={styles.loading}>Loading...</div>
          : <div className={styles.content}>
            { Object.keys(countryData.cases).map((key: string) =>
              <StatGroup key={key} number={countryData.cases[key]} label={key} />
            ) }
          </div> }
        </motion.div>
      </motion.div> }
    </AnimatePresence>
  );
}

export default CountryModal;