import { Col, Row, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './../../components/Layout'
import Search from './../../components/Search'
import ProductItem from './../../components/ProductItem'
import { AppState } from '../../store/reducers/index'
import { ProductState } from './../../types/product'
import { getProduct } from '../../store/actions/product.actions'
const { Title } = Typography
function Home() {
  const dispatch = useDispatch()

  const { createdAt, sold } = useSelector<AppState, ProductState>(state => state.product)

  useEffect(() => {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [])

  return (
    <Layout title="aimee电商" subTitle="欢迎来到aimee电商, 尽情享受吧">
      <Search />
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {createdAt.products.map(item => (
          <Col key={item._id} span="6">
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {sold.products.map(item => (
          <Col key={item._id} id={item._id} span="6">
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Home
