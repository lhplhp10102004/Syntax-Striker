import React from 'react'
import { useState } from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,

} from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import styles from '../CreateMenu/CreateMenu.module.scss'


export default function Info() {
  // Phuc goi API lay thong tin thay phan nay
  const [step, setStep] = useState(1)
  const [restaurantInfo, setRestaurantInfo] = useState({
    address: '3/2 Street',
    location: 'District 10',
    phone: '03325543267',
    name: 'Strike Restaurant'
  })

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const menuItems = [
    {
      image: 'https://example.com/images/pasta.jpg',
      name: 'Pasta Carbonara',
      price: '12000',
      description: 'Creamy pasta with pancetta and parmesan cheese.',
      rating: 4.5
    },
    {
      image: 'https://example.com/images/burger.jpg',
      name: 'Cheeseburger',
      price: '15000',
      description: 'Juicy beef burger with cheddar cheese, lettuce, and tomato.',
      rating: 4.7
    },
    {
      image: 'https://example.com/images/sushi.jpg',
      name: 'Sushi Platter',
      price: '20000',
      description: 'Assorted sushi with fresh fish and vegetables.',
      rating: 4.9
    },
    {
      image: 'https://example.com/images/salad.jpg',
      name: 'Caesar Salad',
      price: '9000',
      description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.',
      rating: 4.3
    },
    {
      image: 'https://example.com/images/pizza.jpg',
      name: 'Margherita Pizza',
      price: '18000',
      description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
      rating: 4.6
    }
  ];
  const [newItem, setNewItem] = useState({
    image: '',
    type: 'food', // Default type
    name: '',
    price: '10000',
    description: '',
    rating: 0
  })


  

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
              <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }} >
                <a href="/info">Infomation</a> 
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                Menu
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
                <MDBCard className='mb-4' style={{ fontSize: '20px' }}>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol>
                        <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                          <MDBBreadcrumbItem style={{ fontWeight: 'bold', fontSize: '30px' }}>Menu</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                      </MDBCol>
                    </MDBRow>
                    <div className={styles.menuItems}>
                      {menuItems.map((item, index) => (
                        <div key={item.index} className={styles.menuItem}>
                          <img
                            src={'/src/assets/images/Menu/img.png'} //src={item.image}
                            alt={item.name}
                            className={styles.menuItemImage}
                          />
                          <div className={styles.menuItemInfo}>
                            <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                            <p className={styles.menuItemPrice}>{item.price} VND</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>

        
      </MDBContainer>
    </section>
  )
}
