'use client'

import { Table } from '@/components'

export default function TablePage() {
  const headers = ['ID', 'Name', 'Address', 'Status']
  const rows = [
    {
      id: 1,
      name: 'Matt Deal',
      address: '1234 Main St',
      status: 'active',
    },
    {
      id: 2,
      name: 'Lucy Deal',
      address: '1234 Main St',
      status: 'inActive',
    },
    {
      id: 3,
      name: 'Zoe Deal',
      address: '1234 Main St',
      status: 'active',
    },
    {
      id: 4,
      name: 'Axel Deal',
      address: '1234 Main St',
      status: 'active',
    },
    {
      id: 5,
      name: 'Jett Deal',
      address: '1234 Main St',
      status: 'active',
    },
  ]

  type userObject = {
    id: number
    name: string
    address: string
    status?: string
  }

  const handleSelectionChange = (selectedRows: Set<userObject>) => {
    console.log('Selected items:', Array.from(selectedRows))
  }

  return (
    <div className="flex flex-row justify-center m-auto mt-20 w-[64rem]">
      <Table<userObject>
        headers={headers}
        headerStyles="bg-black text-white"
        rows={rows}
        renderRow={(row) => (
          <>
            <td className="px-6 py-3">{row.id}</td>
            <td className="px-6 py-3 ">{row.name}</td>
            <td className="px-6 py-3 ">{row.address}</td>
            <td className="px-6 py-3 ">{row.status}</td>
          </>
        )}
        hasCheckboxes={true}
        onSelectionChange={handleSelectionChange}
        sortableColumns={['ID', 'Name', 'Address', 'Status']}
        hasSortFilters
      />
    </div>
  )
}
