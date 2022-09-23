import React from 'react';
import CountryContext from '../contexts/CountryContext';
import { createStyles } from '../utils/styles';

import closeIcon from '../assets/svg/x_icon.svg';
import useData from '../hooks/useData';
import Api from '../utils/api';
import { FullCountryData } from '../utils/api.interfaces';
import StatGroup from './StatGroup';

const styles = createStyles({
  modalOverlay: [
    "fixed",
    "inset-0",
    "bg-black",
    "bg-opacity-50",
    "z-50",
  ],
  modal: [
    "m-auto",
    "bg-pink-light",
    "p-4",
    "text-pink-light-fg",
    "rounded-lg",
    "mt-8",
    "max-w-[400px]",
    "w-[90%]",
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
  closeIcon: [
    "cursor-pointer",
    "hover:scale-105",
    "active:scale-95"
  ]
});

const CountryModal: React.FC = () => {
  const { country, setCountry } = React.useContext(CountryContext);
  const countryData: FullCountryData | null = useData(async () => Api.getCountryData(country?.name || null));

  if (country === null) {
    return null;
  }
  return (
    <div className={styles.modalOverlay} onClick={() => setCountry(null)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <span className={styles.countryName}>{country.name}</span>
          <img onClick={() => setCountry(null)} className={styles.closeIcon} src={closeIcon} />
        </header>
        {
          countryData === null
          ? <div className={styles.loading}>Loading...</div>
          : <div className={styles.content}>
            { Object.keys(countryData.cases).map((key: string) =>
              <StatGroup key={key} number={countryData.cases[key]} label={key} />
            ) }
          </div>
        }
      </div>
    </div>
  );
}

export default CountryModal;