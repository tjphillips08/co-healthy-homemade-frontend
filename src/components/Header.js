import Carousel from 'react-bootstrap/Carousel';
const Header = (props) => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/LHktv70.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chili w/ Jalepeno and Cheddar Cornbread</h3>
          <p>Spicy 3 bean chili and cornbread made in cast iron</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/w7R37av.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tandoori Chicken</h3>
          <p>Tandoori chicken with rice, roasted cauliflower, zucchini, and tomatoes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/QucJ13c.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Strawberry Rubarb Pie</h3>
          <p>
            Made from scratch when the season is right.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/lgqNXPh.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Smoked Pork Tenderloin</h3>
          <p>
            Applewood smoke pork tenderloin w/ a Colorado stone fruit salad. Topped with almonds, goat cheese, and balsamic .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/nEdG34X.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Texas Brisket Tacos</h3>
          <p>
            Pulled brisket tacos w/ refined beans, onion, avocado, cilantro, lime and homemade tortillas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/Kh1NwTK.jpg"
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3>Cherrywood Smoked Pork Tenderloin</h3>
          <p>
            Smoked pork tenderln w/ brown butter sweet potato puree and seared brussel sprouts with toasted pecans.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    )
  }
  
  export default Header