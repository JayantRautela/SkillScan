
interface Props {
  heading: string;
  content: string;
  backgroundColor: string;
  fontColor: string;
  height: string;
  width: string;
  padding: string;
}

const Card = (props: Props) => {
  return (
    <div className={`${props.width} ${props.padding} rounded-2xl ${props.height} ${props.backgroundColor}`}>
      <div className="rounded-[50%] bg-white h-14 w-14"></div>
      <h1 className={`my-6 text-lg font-semibold ${props.fontColor}`}>{props.heading}</h1>
      <p className={`align-bottom mt-28 ${props.fontColor}`}>{props.content}</p>
    </div>
  )
}

export default Card
