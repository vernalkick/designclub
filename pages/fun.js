import Link from 'next/link'

function Fun({ products }) {
  return (
    <div>
      {products && products.map(product =>
        <li key={product.id}>
          <img src={product.images[0].src} loading="lazy" width={product.images[0].width + "px"} width={product.images[0].height + "px"} style={{background: "black"}} />
          <h2>
            <a href={'https://ottawa-design-club.myshopify.com/products/' + product.handle}>
              {product.title}
            </a>
          </h2>
          <p>{product.description}</p>
        </li>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://ottawa-design-club.myshopify.com/products.json')
  const json = await res.json()

  return {
    props: {
      products: json.products
    },
  }
}

export default Fun