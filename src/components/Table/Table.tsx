import clsx from 'clsx'
import React from 'react'

type TableProps<T> = {
  rows: T[]
  renderRow: (row: T) => React.ReactNode
  headers: string[]
  headerStyles?: string
}

export function Table<T>({ headers, rows, renderRow, headerStyles }: TableProps<T>) {
  return (
    <table className="min-w-full border-collapse table-auto">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className={clsx(headerStyles, 'px-6 py-3 text-sm text-left border-b-2')}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={index}
            className={clsx(
              'text-sm border-b-2',
              'odd:bg-white odd:border-gray-200',
              'even:bg-slate-100 even:border-slate-300'
            )}
          >
            {renderRow(row)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
