export default function Home() {
  let name = "park"
  let link = "http://google.com"
  return (
   <div>

    <h4 className="title">애플후레쉬 {name}</h4>
    <p className="title-sub">by dev {name}</p>
    <div style={{color:"green", fontSize:"26px"}}>냐옹이</div>
    <a href={link}>링크</a>
   </div>
  )
}
