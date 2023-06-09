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
  const { table } = dictionary

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell style={{ width: '95px' }}></TableHeaderCell>
          <TableHeaderCell style={{ width: '240px' }}></TableHeaderCell>
          <TableHeaderCell style={{ width: '300px' }}>
            <Text
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            >
              {table.name}
            </Text>
          </TableHeaderCell>
          <TableHeaderCell style={{ width: '220px' }}>
            <Text
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            >
              {table.PII}
            </Text>
          </TableHeaderCell>
          <TableHeaderCell style={{ width: '255px' }}>
            <Text
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            >
              {table.masking}
            </Text>
          </TableHeaderCell>
          <TableHeaderCell style={{ width: '250px' }}>
            <Text
              fontSize={FontSizes.MEDIUM}
              fontWeight="600"
            >
              {table.type}
            </Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map(
          ([key, value]) =>
            value.length > 0 && (
              <ExpandableRow
                key={key}
                mainField={key}
                data={value}
                updateByPiiOrMasked={updateByPiiOrMasked}
              />
            )
        )}
      </TableBody>
    </TableContainer>
  )
}

export default Table
