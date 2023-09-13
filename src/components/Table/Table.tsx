'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { TableProps } from '../../types/tableTypes'
import clsx from 'clsx'

export function Table<T extends Record<string, any>>({
  headers,
  rows,
  renderRow,
  headerStyles,
  tableStyles,
  hasCheckboxes = false,
  onSelectionChange,
  sortableColumns = [],
  hasSortFilters = false,
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<T>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [sortedRows, setSortedRows] = useState<T[]>([])

  const headerKeyMap = useMemo(() => {
    return {
      ID: 'id',
      Name: 'name',
      Address: 'address',
      Status: 'status',
    }
  }, [])

  useEffect(() => {
    let newSortedRows = [...rows]
    if (sortKey) {
      newSortedRows.sort((a, b) => {
        const actualKey = headerKeyMap[sortKey as keyof typeof headerKeyMap] || sortKey
        if (a[actualKey] < b[actualKey]) return sortDirection === 'asc' ? -1 : 1
        if (a[actualKey] > b[actualKey]) return sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }
    setSortedRows(newSortedRows)
  }, [rows, sortKey, sortDirection, headerKeyMap])

  const toggleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const toggleRow = (row: T) => {
    const newSelectedRows = new Set(selectedRows)
    if (newSelectedRows.has(row)) {
      newSelectedRows.delete(row)
    } else {
      newSelectedRows.add(row)
    }
    setSelectedRows(newSelectedRows)
    onSelectionChange?.(newSelectedRows)
  }

  const toggleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      const newSelectedRows = new Set(rows)
      setSelectedRows(newSelectedRows)
      onSelectionChange?.(newSelectedRows)
    } else {
      setSelectedRows(new Set())
      onSelectionChange?.(new Set())
    }
  }

  return (
    <table className="min-w-full border-collapse table-auto">
      <thead>
        <tr>
          {hasCheckboxes && (
            <th className={clsx(headerStyles, 'px-6 py-3 text-sm text-left border-b-2')}>
              <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
            </th>
          )}
          {headers.map((header) => (
            <th
              key={header}
              className={clsx(headerStyles, 'px-6 py-3 text-sm text-left border-b-2')}
            >
              <div className="flex items-center gap-2">
                <span>{header}</span>
                {hasSortFilters && sortableColumns.includes(header) ? (
                  <button onClick={() => toggleSort(header)}>
                    {sortKey === header ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                  </button>
                ) : null}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr
            key={index}
            className={clsx(
              tableStyles ? tableStyles : 'text-sm border-b-2',
              'odd:bg-white odd:border-gray-200',
              'even:bg-slate-100 even:border-slate-300'
            )}
          >
            {hasCheckboxes && (
              <td
                className={clsx(
                  tableStyles ? tableStyles : 'px-6 py-3 text-sm text-left border-b-2'
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedRows.has(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {renderRow(row, selectedRows.has(row))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
