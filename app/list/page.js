import Image from "next/image"
// import 이미지 from '/public/images/food0.png'
export default function List() {
    let 상품 = ['토마토', '파스타', '떡볶이']
    let 가격 = ['40$', '30$', '20$']
    return(
      <div>
        <h2>Products</h2>

        {
             상품.map((i, a)=>{
             return(
                <div className="food" key={a}>
            {/* <Image src={이미지} className="food-img" /> */}
            <img src={`/images/food${a}.png`} className="food-img"/>
                <h4>{i} </h4>
              </div>)
            })
        }
    </div>
    )
  } 