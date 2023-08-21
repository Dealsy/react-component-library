import { Table } from '@/components'

export default function TablePage() {
  const headers = ['ID', 'Name', 'Address']
  const rows = [
    {
      id: 1,
      name: 'Matt Deal',
      Address: '1234 Main St',
    },
    {
      id: 2,
      name: 'Lucy Deal',
      Address: '1234 Main St',
    },
    {
      id: 3,
      name: 'Zoe Deal',
      Address: '1234 Main St',
    },
    {
      id: 4,
      name: 'Axel Deal',
      Address: '1234 Main St',
    },
    {
      id: 5,
      name: 'Jett Deal',
      Address: '1234 Main St',
    },
  ]

  type userObject = {
    id: number
    name: string
    Address: string
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
            <td className="px-6 py-3 ">{row.Address}</td>
          </>
        )}
      />
    </div>
  )
}
