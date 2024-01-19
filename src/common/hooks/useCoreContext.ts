import React, { useContext } from 'react';
import PageContext, { AppContext } from '../context/PageContext';

export const useCoreContext = () => {
  return useContext(PageContext);
};

export const useAppContext = () => {
  return useContext(AppContext);
};
