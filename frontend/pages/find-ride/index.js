import {useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import {
    Checkbox,
    Input,
    Radio,
    Select,
    TextArea,
    Container
  } from 'semantic-ui-react'
import Results from '../../components/find-route/results'
import axios from 'axios'


function FindRide () {
    const [results, setResults] = useState(null)
    const [inputData, setInputData] = useState({destination:"", currentLocation:""})

    function handleChange (event) {
        event.persist()
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value
            })
    }
   
    async function handleSubmit(event) {
        event.preventDefault();
        const { currentLocation, destination } = inputData;
      
        var res = await fetch(
          `http//localhost:1337/locations?currentLocation=${currentLocation}&destination=${destination}}`
        );
        res = await res.json();
      
        JSON.parse(res);
      }
      
      
      
      
      

    return ( <Container><Segment >
    <Form onSubmit={handleSubmit} >
      <Form.Group widths='equal'>
        <Form.Input required fluid label='Current Location' placeholder='Current Location' onChange={handleChange} name='currentLocation' 
         value={inputData.currentLocation}
        />
        <Form.Input required fluid label='Destination' placeholder='Destination' onChange={handleChange} name='destination' 
        value={inputData.destination} 
        />
      </Form.Group>
      <Form.Group inline>
          <label>Number of Passengers</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            // checked={value === '1'}
            // onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            // checked={value === '2'}
            // onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            // checked={value === '3'}
            // onChange={this.handleChange}
          />
           <Form.Field
            control={Radio}
            label='Four'
            value='4'
            // checked={value === '3'}
            // onChange={this.handleChange}
          />
           <Form.Field
            control={Radio}
            label='More than Four'
            value='More than 4'
            // checked={value === '3'}
            // onChange={this.handleChange}
          />
        </Form.Group>
        
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
  <Results />
  </Container>
  )
} 

export default FindRide;