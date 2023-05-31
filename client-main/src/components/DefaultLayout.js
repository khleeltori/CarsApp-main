import React from 'react'
import { Button, Dropdown, Row, Col } from 'antd';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user.username);
  const items = [
    {
      // key: '1',
      label: (
        <a
          href="/"
        >
          Home
        </a>
      ),
    },
    {
      // key: '2',
      label: (
        <a
          href="http://localhost:5000/api/users/login"
        >
          Bookings
        </a>
      ),
    },
    {
      // key: '3',
      label: (
        <a
          href="http://localhost:5000/api/users/register"
        >
          Profile
        </a>
      ),
    },
    {
      // key: '4',
      label: (
        <a onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login'
        }}>

          <li>Logout</li>
        </a>
      ),
    },
  ];
  return (
    <div >
      <div className='header ds1'>
        <Row gutter={16}>
          <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between'>
              <h1>AltoriCars</h1>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
              >
                <Button> {user.username} </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>

      </div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout