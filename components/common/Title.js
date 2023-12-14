export const TitleLogo = ({ src, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{src}</span>
      {src}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
