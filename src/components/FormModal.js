import React, { Component } from 'react';
import { Message, Button, Header, Modal, Form } from 'semantic-ui-react';

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class FormModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      amount: 1,
      description: '',
      error: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.isUnique(this.state.name)){
      let item = {
        name: capitalize(this.state.name),
        amount: this.state.amount,
        description: capitalize(this.state.description)
      }
      this.props.addItemToItemsList(item)
      this.props.handleClose()
    }else{
      this.setState({
        error: true
      })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render(){
    const {name, amount, description, error} = this.state;
    return (
      <Modal
        trigger={<Button color='teal' className='add-button' onClick={this.props.handleOpen}>Add Item</Button>}
        open={this.props.modalOpen}
        onClose={this.props.handleClose}
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} error={error}>
            <Form.Input label='Name' placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input label='Amount' placeholder='Amount' name='amount' value={amount} onChange={this.handleChange} />
            <Form.TextArea label='Description' placeholder='Description' name='description' value={description} onChange={this.handleChange}/>
            <Message
              error
              header='Error'
              content='Name is already taken.'
            />
            <Button color='teal' type='submit' disabled={!name || !amount || !description}>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default FormModal;
