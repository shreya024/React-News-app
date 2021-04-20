import Card from 'react-bootstrap/Card';
import newspaper from './newsborder.png';
const TopNews = ({ title, description, content,image, read }) => {
    return (
        <div className="wrapper">

            <Card style={{ width: '70rem', padding: '30px',borderImageSource:{newspaper},borderImageWidth:'10px'}}>
                <Card.Img variant="top" src={image} style={{
                    borderRadius: ' 15px 50px',
                    padding: '20px',
                    border: '5px solid black'
                
                }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                      <a className="text-muted" href={read}>Continue Reading...</a>
                    
                </Card.Footer>
            </Card>
                <br/> <br/> 



        </div>
    )
}
export default TopNews;