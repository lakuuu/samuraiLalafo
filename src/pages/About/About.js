import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import API from "../../api/Api";

const images =[
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
    "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg",
    "https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
]

function About() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getById(id)
    .finally(() => {
        setLoading(false);
      })
      .then((res) => setData(res.data))
  }, [id]);

  if (isLoading || data == null) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="container d-flex">
      <div>
           <Carousel width={'600px'}>
           <img src={data.img} alt="" />
           {
            images.map((item) => <img src={item}/>)
           }
           </Carousel>
      </div>
      <div>
        <h1>AdPage id = {id}</h1>
        <h2>Tittle:{data.title}</h2>
        <h2>price:{data.price}$</h2>
        <h3>description:{data.desc}</h3>
      </div>
    </div>
  );
}

export default About;
