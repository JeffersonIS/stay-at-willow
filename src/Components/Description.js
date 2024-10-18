import React from 'react';
import master from '../Assets/GalleryImages/master1.JPG'
import garage from '../Assets/GalleryImages/garage1.JPG'
import willow from '../Assets/GalleryImages/flowerroom2.JPG'
import coastal from '../Assets/GalleryImages/coastal1.JPG'
import green from '../Assets/GalleryImages/green1.JPG'
import map from '../Assets/GalleryImages/map.png'
import { Card, Button } from 'react-bootstrap';

export default function Description() {   
    const bedrooms = [
        {name: "The Master",
        thumbnail: master,
        description: "The Master is a luxurious, spacious suite with a king bed, en-suite bathroom, and elegant decor. This serene room offers ultimate comfort and privacy. It also features a private porch."
        },
        {name: "The Coastal",
        thumbnail: coastal,
        description: "This room located downstairs with access to the downstairs patio. The room has a king bed, large dresser and private bathroom."
        },
        {name: "The Willow Room",
        thumbnail: willow,
        description: "This bedroom is downsairs and features a king bed, closet space, and adjacent bathroom. A perfect space for unwinding and recharging."
        },
        {name: "The Green Room",
        thumbnail: green,
        description: "The Green Room offers a peaceful, cozy retreat with soft green accents, a comfortable queen bed, and plenty of natural light. Perfect for relaxing after a day of exploring."
        },
        {name: "The Garage",
        thumbnail: garage,
        description: "The Garage is a stylishly converted space with modern touches, offering a unique and spacious retreat. It features a cozy king bed, industrial-chic decor, and a private bathroom for added convenience."
        }
    ] 
    return (
    <div class="text-center container description pt-4">
        <div className='text-left'>
            <p className=''>Perched on a scenic hilltop overlooking the Tri-Cities in Eastern Washington, Willow offers breathtaking vistas and a peaceful escape. This newly renovated home is the perfect retreat, whether you're exploring local wineries or just relaxing.</p>
            <p className=''>Kitzke Cellars is right next door, and Goose Ridge is just a mile away, making it an ideal spot for wine enthusiasts. Conveniently located only 2 miles from shopping and groceries, and with quick freeway access, you'll be just 12 miles from the airport.</p>
            <p className=''>The fully equipped kitchen has everything you need to prepare meals, making your stay feel like home. Enjoy the ease of self check-in with a keypad, a two-night minimum stay, and no cleaning fee.</p>
        </div>
        <div className='mt-5 text-center'>
            <p className='description-title'>Map</p>
            <img src={map} style={{width: "100%"}}></img>
        </div>
        <div className='mt-5 text-center'>
            <p className='description-title'>Bedrooms</p>
            {bedrooms.map(room => {
                return(
                    <div class="bedroom-card text-left">
                        <img src={room.thumbnail} className='card-image'></img>
                        <div><em>{room.name}</em>
                            <div className='bedroom-card-text-container'>
                                <p className='bedroom-card-text'>{room.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='mt-5 text-center'>
            <p className='description-title'>Other Details</p>
            <div className='text-left'>
            <p>The kitchen is spacious and bright. There is an exterior door that leads you outside onto the massive deck where you can barbecue, sit and relax and enjoy the view.</p>
            <p>We take great care of the house and clean it until the utensils shine (we actually check for fingerprints - shoutout to our cleaners)</p>
            <p>The kitchen has started supply of: <br></br>Oil, salt, pepper, ketchup, mayonnaise, mustard, ranch dressing, cooking spray, soy sauce, spices (cinnamon, cumin, chili powder, garlic powder, garlic salt, italian seasoning, taco seasoning, seasoning salt)</p>
            <p>The main living area has plenty of comfortable seating and a large Roku smart TV. Log into your Netflix account and enjoy a movie.</p>
            <p>The common area downstairs includes a washer, a dryer, a large Roku TV, a sitting area, and a desk.</p>
            <p>The house has plenty of parking space (enough for 6 boats and trailers)!</p>

        </div>
        </div>
        {/* <p><strong>About Willow</strong><br></br>
            A breathtaking view awaits you at Willow. The home is located on a hilltop overlooking the Tri-Cities in Eastern Washington, this newly renovated home is unmatched. Going on a wine tour? Kitzke Cellars is next door. Goose Ridge is 1 mile away. Grocery and shopping is 2 miles away. Excellent location with easy freeway access. 12 miles from the airport. The kitchen has everything you need to prepare your meals. Two night minimum stay. Self check-in with a keypad. No cleaning fee.</p>
        <p> <strong>Willow has 5 master suites, each with its own bathroom: </strong><br/>
            - The Master Suite has a king bed and ensuite bathroom. This suite has an outdoor deck. <br/>
            - The Green Suite has a queen bed with an adjacent bathroom. <br/>
            - The Garage Suite has a king bed and ensuite bathroom. This suite has a mini split for heating/cooling. <br/>
            - The Coastal Suite has a king bed and ensuite bathroom. This suite has a private exterior door. It also has a massive window so you can enjoy the view. <br/>
            - The Willow Suite has a king bed and adjacent bathroom. <br/>
        </p>
        <p>
            Upon request, we can also provide 2 twin size air mattresses and 2 queen air mattresses for additional guests or children.
        </p>
*/}
    </div>
    );
}

// YARD COMING SOON. If you need a yard, this is not the place for you right now. Landscaping is coming in late summer.
// Guest access
// You have the entire house to yourself.
// Other things to note
// All roller blinds in the home are motorized and must be operated by pushing the button, clearly marked, on the wall.

// The kitchen has a starter supply of:
// Oil, salt, pepper, ketchup, mayonnaise, mustard, ranch dressing, cooking spray, soy sauce, spices (cinnamon, cumin, chili powder, garlic powder, garlic salt, italian seasoning, taco seasoning, seasoning salt).
     


{/* <div></div><br></br>
<Card style={{padding: "0"}}>
    <Card.Body className="d-flex">
        <Card.Img
        variant="left"
        src={room.thumbnail}
        style={{ width: '200px', height: 'auto', marginRight: '1rem' }}
        />
        <div>
        <Card.Title>{room.name}</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </div>
    </Card.Body>
</Card> */}