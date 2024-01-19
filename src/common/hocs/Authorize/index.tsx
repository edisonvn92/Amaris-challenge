import React from 'react';
import { Spin, FullView } from '@/components';

import './index.css';

export const Authorize =
  (Component: React.FC): React.FC =>
  () => {
    if (true) {
      return <Component />;
    }
    return (
      <FullView className="container-center">
        <Spin />
      </FullView>
    );
  };
