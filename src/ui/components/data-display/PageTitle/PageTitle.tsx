import React from 'react';
import { PageTitleContainer, PageTitleSyled } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleSyled>{props.title}</PageTitleSyled>
      {props.subtitle}
    </PageTitleContainer>
  );
};

export default PageTitle;
