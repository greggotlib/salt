import { useState } from 'react'
import { ExpandableRowProps } from './type'
import { Chip } from 'components/chip'
import { TableCell, TableCellWrapper, TableRow } from '../Table.style'
import { ExpandButton, ExpandCell, ExpandedIcon } from './ExpandableRow.style'
import arrowDown from 'assets/icons/arrow-down.svg'
import arrowUp from 'assets/icons/arrow-up.svg'
import { Text } from 'components/text'
import { dictionary } from 'utils/dictionary'
import { FontSizes } from 'components/text/types'

const ExpandableRow = ({
  data,
  mainField,
  updateByPiiOrMasked,
}: ExpandableRowProps) => {
  const [expanded, setExpanded] = useState(false)
  const { table } = dictionary

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const getNameByKey = () => {
    switch (mainField) {
      case 'urlParams':
        return table.urlParams
      case 'queryParams':
        return table.queryParams
      case 'body':
        return table.body
      case 'headers':
        return table.headers
      default:
        return ''
    }
  }

  return (
    <>
      <TableRow>
        <TableCell
          onClick={toggleExpand}
          colSpan={6}
          style={{ cursor: 'pointer' }}
        >
          <TableCellWrapper>
            <ExpandedIcon src={expanded ? arrowDown : arrowUp} />
            <ExpandButton>
              <Text label={getNameByKey()} />
            </ExpandButton>
          </TableCellWrapper>
        </TableCell>
      </TableRow>
      {expanded &&
        data.map((field, index: number) => (
          <TableRow key={index}>
            <ExpandCell></ExpandCell>
            <ExpandCell></ExpandCell>
            <ExpandCell>
              <Text
                label={field.name}
                fontSize={FontSizes.MEDIUM}
              />
            </ExpandCell>
            <ExpandCell>
              <Chip
                updateByPiiOrMasked={updateByPiiOrMasked}
                parentField={mainField}
                childField={field.name}
                property={table.PII.toLowerCase()}
                label={table.PII}
                isSelected={field.pii}
                color="#7D3CE9"
                withBorder
              />
            </ExpandCell>
            <ExpandCell>
              <Chip
                updateByPiiOrMasked={updateByPiiOrMasked}
                parentField={mainField}
                childField={field.name}
                property={table.masked.toLowerCase()}
                label={table.masked}
                isSelected={field.masked}
                color="#5D94A0"
                withBorder
              />
            </ExpandCell>
            <ExpandCell>
              <Chip
                parentField={mainField}
                childField={field.name}
                property={field.name}
                label={field.type}
                backgroundColor="#CCF3FC"
                color="#0F3899"
                clickable={false}
              />
            </ExpandCell>
          </TableRow>
        ))}
    </>
  )
}

export default ExpandableRow
