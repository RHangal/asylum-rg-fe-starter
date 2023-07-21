// import { data } from '../data/test_data.json';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Table from '../components/pages/DataVisualizations/Graphs/TableComponents/Table';

describe('Testing the DataShape', () => {
  let data;
  beforeAll(async () => {
    data = await axios.get('https://hrf-asylum-be-b.herokuapp.com/cases');
  });
  describe('Asylum Office is a string', () => {
    test('[1] asylumOffice is a string', () => {
      expect(typeof data.data[0].asylum_office).toBe('string');
    });
  });

  describe('Citizenship data is a string', () => {
    test('[2] citizenship is a string', () => {
      expect(typeof data.data[0].citizenship).toBe('string');
    });
  });

  describe('Race or Ethnicity data is a string', () => {
    test('[3] raceOrEthnicity is a string', () => {
      expect(typeof data.data[0].race_or_ethnicity).toBe('string');
    });
  });
});

describe('Table renders to the screen with data', () => {
  test('[4] Table renders to the screen with data', async () => {
    const res = await axios.get(
      'https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary'
    );
    render(
      <Table
        columns={[
          'Fiscal Year',
          'Total Cases',
          '% Granted',
          '% Admin Close / Dismissal',
          '% Denied',
        ]}
        rows={[res.data]}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    );
    const asylumOfficeString = screen.getByText(/fiscal year/i);
    expect(asylumOfficeString).toBeInTheDocument();
  });
});
