// import { data } from '../data/test_data.json';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Table from '../components/pages/DataVisualizations/Graphs/TableComponents/Table';

describe('Testing the DataShape', () => {
  let data;
  beforeAll(async () => {
    data = await axios.get('https://hrf-asylum-be-b.herokuapp.com/cases');
    try {
      console.log(data.data[0]);
    } catch (err) {}
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

  describe('Table renders to the screen with data', () => {
    test('[4] Table renders to the screen with data', () => {
      render(<Table />);
      const asylumOfficeString = screen.getByText(/AyS/i);
      expect(asylumOfficeString).toBeInTheDocument();
    });
  });
});
