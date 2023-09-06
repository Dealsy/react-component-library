# Table Component Documentation

## Introduction

The `Table` component is a flexible and reusable table for displaying a list of items with various configurations. It supports custom rendering for each row and optional checkboxes for selection.

## Installation

Before using the `Table` component, ensure that it's imported into your file:

```tsx
import { Table } from 'react-component-library';
```


# Props
The Table component accepts the following props:

## headers: string[]
An array of strings that define the header titles for each column.

## rows: T[]
An array of items to be displayed in the table.

## renderRow: (row: T, isSelected: boolean) => React.ReactNode
A function for custom rendering of each row.

## headerStyles?: string
Optional CSS styles for the header.

## tableStyles?: string
Optional CSS styles for the table rows.

## hasCheckboxes?: boolean
Optional. When set to true, checkboxes are added to each row for selection.

## onSelectionChange?: (selectedRows: Set<T>) => void
Optional. A callback function that's triggered whenever the selection changes. It receives a set of the selected rows.

# Usage

## Basic Usage
```tsx
Copy code
import { Table } from '@/components';

const headers = ['ID', 'Name', 'Status'];
const rows = [
  { id: 1, name: 'Alice', status: 'active' },
  { id: 2, name: 'Bob', status: 'inactive' }
];

function App() {
  return (
    <Table
      headers={headers}
      rows={rows}
      renderRow={(row) => (
        <>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.status}</td>
        </>
      )}
    />
  );
}
```
## With Checkboxes
To include checkboxes for row selection, you can set hasCheckboxes to true and provide a onSelectionChange callback.
```tsx
Copy code
import { Table } from '@/components';

const headers = ['ID', 'Name', 'Status'];
const rows = [
  { id: 1, name: 'Alice', status: 'active' },
  { id: 2, name: 'Bob', status: 'inactive' }
];

const handleSelectionChange = (selectedRows: Set<typeof rows[0]>) => {
  console.log('Selected items:', Array.from(selectedRows));
};

function App() {
  return (
    <Table
      headers={headers}
      rows={rows}
      renderRow={(row) => (
        <>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.status}</td>
        </>
      )}
      hasCheckboxes={true}
      onSelectionChange={handleSelectionChange}
    />
  );
}
```


This example will log the selected rows to the console whenever the selection changes.

By following this documentation, you can utilize the Table component effectively in your projects. Feel free to extend its functionalities as needed!