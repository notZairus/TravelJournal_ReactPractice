import Card from '/src/components/Card'
import data from '/src/data';


export default function CardContainer() {
  
  let locations = data.map((location, index) => 
      <Card 
        key={index}  
        imgUrl={location.imgUrl} 
        country={location.country} 
        destination={location.destination} 
        date={location.date} 
        description={location.description} 
      />
  );

  return (
    <div className="flex-1 grid gap-4 mt-8 py-4 px-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {locations}
    </div>
  )
}