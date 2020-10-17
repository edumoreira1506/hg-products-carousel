import React from 'react';
import I18NextContainer from '../containers/I18NextContainer';

const withI18Next = (Component) => () => (
  <I18NextContainer>
    <Component />
  </I18NextContainer>
);

export default withI18Next;
