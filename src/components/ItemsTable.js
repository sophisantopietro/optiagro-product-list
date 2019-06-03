import React from 'react';
import { Table } from 'semantic-ui-react';

const ItemsTable = (props) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.items.map(item => {
        return(
          <Table.Row key={item.name}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.amount}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
)

export default ItemsTable;