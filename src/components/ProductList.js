import React, { Component } from 'react';
import ItemsTable from './ItemsTable';
import FormModal from './FormModal';
import { Message, Input } from 'semantic-ui-react';


class ProductList extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      modalOpen: false,
      query: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  isUnique = (name) => { 
    return this.state.items.length === 0 ? true : !(this.state.items.some(item => item.name.toLowerCase() === name.toLowerCase()))  
  }

  addItemToItemsList = (item) => {
    let items = this.state.items
    items.push(item)
    this.setState({
      items: items
    })
  }

  filterItems = (arr, query) => {
    return arr.filter(el => {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }

  render(){
    const {items, modalOpen, query} = this.state;
    return (
      <div>
        <FormModal 
          handleOpen={this.handleOpen} 
          handleClose={this.handleClose}
          modalOpen={modalOpen}
          isUnique={this.isUnique}
          addItemToItemsList={this.addItemToItemsList}
        />
        {items.length > 0 
          ? <div>
              <Input 
                placeholder='Filter'
                name='query' 
                value={query}
                onChange={this.handleChange}
                className='query'
              />
              <ItemsTable items={query === '' ? items : this.filterItems(items,query)} /> 
            </div>
          : <Message
              icon='list'
              header='There are no items to show'
              size='small'
            />
        }
      </div>
    )
  }
}

export default ProductList;
