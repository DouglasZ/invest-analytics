import React, { FC, useRef } from 'react';

import { Button } from 'primereact/button';
import { FileUpload, FileUploadHandlerParam } from 'primereact/fileupload';

import * as S from './style';

type UploadCSVProps = {
  onChange(data: DataInvest[]): void;
};

export type DataInvest = {
  type: string;
  description: string;
  investedAmount: string;
  grossAmount: string;
  netAmount: string;
  income: number;
};

export const numberFormat = (number: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number);
};

export const UploadCSV: FC<UploadCSVProps> = ({ onChange }) => {
  const fileUploadRef = useRef<FileUpload>(null);

  const removeCharacters = (value: string): number => {
    const number = parseFloat(
      value
        .replace('.', '')
        .replace(',', '.')
        .replace(/[^\d.]/g, '')
    );
    return isNaN(number) ? 0 : number;
  };

  const uploadHandler = (event: FileUploadHandlerParam) => {
    const [file] = event.files;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = e.target?.result;
      const parseData: DataInvest[] = [];
      let rows: string[] = [];

      if (typeof data === 'string') {
        rows = data.split('\n');
      }

      for (let i = 2; i < rows.length - 1; i++) {
        const row = rows[i].split(';');
        const investedAmount = removeCharacters(row[5]);
        const netAmount = removeCharacters(row[7]);
        const income = parseFloat((netAmount - investedAmount).toFixed(2));

        parseData.push({
          type: row[0].replace(/"/g, ''),
          description: row[1].replace(/"/g, ''),
          investedAmount: row[5],
          grossAmount: row[6],
          netAmount: row[7],
          income
        });
      }
      onChange(parseData);
      fileUploadRef.current?.clear();
    };
    fileReader.readAsBinaryString(file);
  };

  return (
    <S.Wrapper>
      <FileUpload
        ref={fileUploadRef}
        uploadHandler={uploadHandler}
        customUpload={true}
        accept=".csv"
        mode="basic"
        maxFileSize={1000000}
        chooseLabel="Adicionar Arquivo"
        auto={true}
      />
      <Button
        label="Limpar"
        className="p-button-secondary"
        icon="pi pi-trash"
        onClick={() => onChange([])}
      />
    </S.Wrapper>
  );
};
