import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import ProductItem from '../../components/ProductItem'
import { AppState } from '../../store/reducers/index'
import { ProductState } from './../../types/product'
import { getProductById } from './../../store/actions/product.actions'

const Product = () => {
  const dispatch = useDispatch()
  const { product } = useSelector<AppState, ProductState>(state => state.product)
  const { productId } = useParams<{ productId: string }>()
  useEffect(() => {
    dispatch(getProductById({ productId }))
  }, [])
  return (
    <Layout title="商品名称" subTitle="商品描述">
      <Row gutter={36}>
        <Col span="18">
          <ProductItem showViewProduct={false} product={product.result} />
        </Col>
        <Col span="6">right</Col>
      </Row>
    </Layout>
  )
}
export default Product
