export type TableProps<T> = {
  /**
   * An array of rows to be displayed in the table.
   */
  rows: T[]

  /**
   * A function to render each row in the table. It takes two arguments:
   * - `row`: The current row data
   * - `isSelected`: A boolean indicating if the current row is selected
   */
  renderRow: (row: T, isSelected: boolean) => React.ReactNode

  /**
   * An array of strings that define the header titles for each column.
   */
  headers: string[]

  /**
   * Optional: Additional CSS classes to apply to the table headers.
   */
  headerStyles?: string

  /**
   * Optional: Additional CSS classes to apply to the table rows.
   */
  tableStyles?: string

  /**
   * Optional: When set to `true`, checkboxes are added to each row for selection.
   */
  hasCheckboxes?: boolean

  /**
   * Optional: A callback function that's triggered whenever the selection changes.
   * It receives a set containing the selected rows.
   */
  onSelectionChange?: (selectedRows: Set<T>) => void
}
