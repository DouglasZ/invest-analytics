import { FC, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

import * as S from './style';

type LayoutProps = {
  children: ReactNode;
};

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/')
    },
    {
      label: 'Upload',
      icon: 'pi pi-fw pi-upload',
      command: () => navigate('/invest')
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  const start = (
    <img
      alt="logo"
      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      height="40"
      className="mr-2"
    ></img>
  );

  return (
    <>
      <S.Header>
        <Menubar model={items} start={start} />
      </S.Header>
      <S.Wrapper>
        <Card>{children}</Card>
      </S.Wrapper>
    </>
  );
};
