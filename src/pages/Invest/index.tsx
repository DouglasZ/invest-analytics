import React, { useState } from 'react';

import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { DataTable } from 'primereact/datatable';
import { Row } from 'primereact/row';

import {
  DataInvest,
  numberFormat,
  UploadCSV
} from '@components/UploadCSV/Upload';
import { DefaultLayout } from '@layouts/DefaultLayout';

import * as S from './style';

const Invest = () => {
  const [data, setData] = useState<DataInvest[]>([]);

  const statusValue = (rowData: DataInvest) => {
    return (
      <span style={{ color: rowData.income < 0 ? 'var(--red-600)' : '' }}>
        {numberFormat(rowData.income)}
      </span>
    );
  };

  const incomeTotal = () => {
    let total = 0;
    for (const item of data) {
      total += item.income;
    }
    return numberFormat(total);
  };

  const footer = (
    <ColumnGroup>
      <Row>
        <Column footer="Totals:" colSpan={5} align="right" />
        <Column footer={incomeTotal} align="right" />
      </Row>
    </ColumnGroup>
  );

  return (
    <S.Wrapper>
      <UploadCSV
        onChange={(data) => {
          setData(data);
        }}
      />
      <DataTable
        value={data}
        responsiveLayout="stack"
        footerColumnGroup={footer}
      >
        <Column field="type" header="Tipo de Investimento"></Column>
        <Column field="description" header="Descrição"></Column>
        <Column
          field="investedAmount"
          header="Valor Aplicado"
          align="right"
        ></Column>
        <Column field="grossAmount" header="Valor Bruto" align="right"></Column>
        <Column field="netAmount" header="Valor Líquido" align="right"></Column>
        <Column
          field="income"
          header="Rendimento"
          align="right"
          body={statusValue}
        ></Column>
      </DataTable>
    </S.Wrapper>
  );
};

Invest.layout = DefaultLayout;
export default Invest;
