import React from 'react';
import { QuoteBlock, TextMonospaced } from 'Components';

export const LicenceBlock = ({ className = '', children }) => {
  return (
    <QuoteBlock className={className}>
      <TextMonospaced>{children}</TextMonospaced>
    </QuoteBlock>
  );
};
