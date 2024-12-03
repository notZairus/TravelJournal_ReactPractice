

export default function Card({ imgUrl, country, destination, date, description }) {
  return (
    <div className="overflow-hidden flex-1 bg-white h-64 flex border-b pb-5">
      <div className="bg-red-100 w-2/6 overflow-hidden rounded-lg ">
        <img src={imgUrl} alt="location img" className="w-full h-full"/>
      </div>
      <div className="flex-1 px-6 py-4">
        <p className="inline mr-4 text-xs uppercase tracking-widest">{country}</p>
        <p className="inline text-xs underline text-gray-400 font-semibold">View on Google Maps</p>
        <h1 className="font-bold text-2xl">{destination}</h1>
        <p className="mt-6 text-xs font-bold">{date}</p>
        <p className="text-xs mt-3 text-gray-700">{description}</p>
      </div>
    </div>
  )
}