import React from 'react';
import CompaniesTable from './Companies/CompaniesTable';

function Main() {
  return (
    <div className="text-center mt-4">
      <h1 className="mb-5">Task Adept, Tables Service Companies & Employees</h1>
      <div className="px-3">
        <CompaniesTable />
      </div>
    </div>
  );
}

export default Main;
