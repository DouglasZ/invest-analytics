import React, { useState } from 'react';

import { DataTable } from '@components/DataTable/DataTable';
import { DataInvest, UploadCSV } from '@components/UploadCSV/Upload';
import { DefaultLayout } from '@layouts/DefaultLayout';

import * as S from './style';

const Invest = () => {
  const [data, setData] = useState<DataInvest[]>([]);

  return (
    <S.Wrapper>
      <UploadCSV
        onChange={(data) => {
          setData(data);
        }}
      />
      <DataTable data={data} />
    </S.Wrapper>
  );
};

Invest.layout = DefaultLayout;
export default Invest;
