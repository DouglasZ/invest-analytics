import React, { FC } from 'react';

import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { DataTable as DataTableDefault } from 'primereact/datatable';
import { Row } from 'primereact/row';

import { DataInvest, numberFormat } from '@components/UploadCSV/Upload';

import * as S from './style';

type DataTableProps = {
  data: DataInvest[];
};

export const DataTable: FC<DataTableProps> = ({ data }) => {
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
      <DataTableDefault
        value={data}
        responsiveLayout="stack"
        scrollable
        scrollHeight="flex"
        footerColumnGroup={footer}
      >
        <Column
          field="type"
          header="Tipo de Investimento"
          headerClassName="column-nowrap"
        ></Column>
        <Column
          field="description"
          header="Descrição"
          headerClassName="column-nowrap"
        ></Column>
        <Column
          field="investedAmount"
          header="Valor Aplicado"
          headerClassName="column-nowrap"
          align="right"
        ></Column>
        <Column
          field="grossAmount"
          header="Valor Bruto"
          headerClassName="column-nowrap"
          align="right"
        ></Column>
        <Column
          field="netAmount"
          header="Valor Líquido"
          headerClassName="column-nowrap"
          align="right"
        ></Column>
        <Column
          field="income"
          header="Rendimento"
          headerClassName="column-nowrap"
          align="right"
          body={statusValue}
        ></Column>
      </DataTableDefault>
    </S.Wrapper>
  );
};
