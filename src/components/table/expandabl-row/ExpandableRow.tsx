import { useState } from 'react'
import { ExpandableRowProps } from './type'
import { Chip } from 'components/chip'
import { TableCell, TableCellWrapper, TableRow } from '../Table.style'
import {
  EmptyIcon,
  ExpandButton,
  ExpandCell,
  ExpandedIcon,
  NonExpandedIcon,
} from './ExpandableRow.style'
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
      case table.urlParams:
        return table.urlParamsRow
      case table.queryParams:
        return table.queryParamsRow
      case table.body:
        return table.bodyRow
      case table.headers:
        return table.headersRow
      default:
        return ''
    }
  }

  const getExpandableIcon = () => {
    if (data.length) {
      return expanded ? (
        <ExpandedIcon src={arrowDown} />
      ) : (
        <NonExpandedIcon src={arrowUp} />
      )
    }
    return <EmptyIcon />
  }

  return (
    <>
      <TableRow>
        <TableCell
          onClick={toggleExpand}
          colSpan={6}
          style={{ cursor: `${data.length ? 'pointer' : 'default'}` }}
        >
          <TableCellWrapper>
            {getExpandableIcon()}
            <ExpandButton
              style={{ cursor: `${data.length ? 'pointer' : 'default'}` }}
            >
              <Text>{getNameByKey()}</Text>
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
              <Text fontSize={FontSizes.MEDIUM}>{field.name}</Text>
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
                backgroundColor={'#FFFFFF'}
                clickable={true}
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
                backgroundColor={'#FFFFFF'}
                clickable={true}
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
                withBorder={false}
              />
            </ExpandCell>
          </TableRow>
        ))}
    </>
  )
}

export default ExpandableRow
