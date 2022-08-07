import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import { DefaultLayout } from '@layouts/DefaultLayout';

import * as S from './style';

const Dashboard = () => {
  const [state, setState] = useState(false);
  const [value, setValue] = useState('');
  return (
    <S.Wrapper>
      Dashboard
      <div>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <Button label="Show" onClick={() => setState(true)} />
        <Dialog visible={state} onHide={() => setState(false)}>
          Teste
        </Dialog>
      </div>
    </S.Wrapper>
  );
};

Dashboard.layout = DefaultLayout;
export default Dashboard;
