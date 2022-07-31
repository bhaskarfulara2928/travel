import Accordion from 'react-bootstrap/Accordion';
import Carousel from '../Carousel';
function BasicExample({accor}) {
    
    

    return (
        accor==1 ?
        <Accordion ActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>About Place</Accordion.Header>
                <Accordion.Body>
                    The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal. For its construction, masons, stone-cutters, inlayers, carvers, painters, calligraphers, dome builders and other artisans were requisitioned from the whole of the empire and also from the Central Asia and Iran. Ustad-Ahmad Lahori was the main architect of the Taj Mahal.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>About Packages</Accordion.Header>
                <Accordion.Body>
                    <p>2 Day 3 Night at just Rs.5000</p>
                    <p>4 Day 5 Night at just Rs.7000</p>
                    <p>5 Day 5 Night at just Rs.8000</p>
                    <p>6 Day 5 Night at just Rs.9000</p>
                    <p>7 Day 6 Night at just Rs.10000</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion> : accor==2?
        <Accordion ActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>About Place</Accordion.Header>
                <Accordion.Body>
                Mumbai Darshan city tour begins at 9:00 AM and ends at 6:00 PM. You can make the bookings through the official website of MTDC or any travel agency. The accompanying guides on the air-conditioned buses are well trained and speak Hindi, Marathi, and English; so that all people (including foreign nationals) can understand the descriptions of the locations given by them. There are no meals included in the package, according to MTDC. Also, make sure to go through some description about these destinations as no official brochure is handed out to the visitors. Doing so will get you acquainted with the city and the various locations you will visit.
                    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>About Packages</Accordion.Header>
                <Accordion.Body>
                    <p>2 Day 3 Night at just Rs.5000</p>
                    <p>4 Day 5 Night at just Rs.7000</p>
                    <p>5 Day 5 Night at just Rs.8000</p>
                    <p>6 Day 5 Night at just Rs.9000</p>
                    <p>7 Day 6 Night at just Rs.10000</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>:<Accordion ActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>About Place</Accordion.Header>
                <Accordion.Body>
                Set amidst the epic Himalayas, Ladakh is a rustic and heavenly beautiful travel destination. The rugged valleys and mountains, winding roads coupled with the vibrant cultural life maintain the exuberance and charm of this region. The iconic Magnetic Hill, the turquoise coloured Pangong Lake, the confluence of two mystical rivers, ancient and awe inspiring monasteries and the highest passes are a few of the marvelous attractions of Leh and Ladakh in general. The wide array of trekking routes will satiate your soul and enrich the senses. The moon like desert mountains continue to be an exceptional destination for adventure seekers and admirers of Buddhism and phenomenal mountain vistas. So, pack some travel essentials with you to explore the most enthralling destination of India and bring back souvenirs of endless memories with you.
                    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>About Packages</Accordion.Header>
                <Accordion.Body>
                    <p>2 Day 3 Night at just Rs.5000</p>
                    <p>4 Day 5 Night at just Rs.7000</p>
                    <p>5 Day 5 Night at just Rs.8000</p>
                    <p>6 Day 5 Night at just Rs.9000</p>
                    <p>7 Day 6 Night at just Rs.10000</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;