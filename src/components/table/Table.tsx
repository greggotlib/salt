import { Text } from 'components/text'
import {
  TableBody,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './Table.style'
import { ExpandableRow } from './expandabl-row'
import { TableProps } from './types'
import { FontSizes } from 'components/text/types'
import { dictionary } from 'utils/dictionary'

const Table = ({ data, updateByPiiOrMasked }: TableProps) => {
  console.log(data)
  const { table } = dictionary
  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell style={{ width: '95px' }}></TableHeaderCell>

          <TableHeaderCell style={{ width: '240px' }}></TableHeaderCell>
          <TableHeaderCell style={{ width: '300px' }}>
            <Text
              label={table.name}
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            />
          </TableHeaderCell>
          <TableHeaderCell style={{ width: '220px' }}>
            <Text
              label={table.PII}
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            />
          </TableHeaderCell>

          <TableHeaderCell style={{ width: '255px' }}>
            <Text
              label={table.masking}
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            />
          </TableHeaderCell>

          <TableHeaderCell style={{ width: '250px' }}>
            <Text
              label={table.type}
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            />
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map(([key, value]) =>
          value.length ? (
            <ExpandableRow
              key={key}
              mainField={key}
              data={value}
              updateByPiiOrMasked={updateByPiiOrMasked}
            />
          ) : (
            <></>
          )
        )}
      </TableBody>
    </TableContainer>
  )
}

export default Table
