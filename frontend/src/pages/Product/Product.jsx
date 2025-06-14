import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header'
import {Container, Button, Row, Col, Spinner} from "react-bootstrap";
import EmptyComponent from '../../components/EmptyComponent';
import ProductCard from '../../components/ProductCard';
import ProductModal from './ProductModal';
import { fetchProducts, deleteProduct, addProduct, updateProduct } from '../../redux/actions/productActions';

export default function Product() {
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();


   const {item, loading} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("Fetching products...");
  }, [dispatch]);


  const handleAdd  = () => {
    setShowModal(true);
    setEditItem(null);
  }

  const handleEdit = (product) => {
    setShowModal(true);
    setEditItem(product);
  }

  const handleSubmit = (values) => {
    if (editItem) {
      console.log("Updating product:", values);
      dispatch(updateProduct(values));
    } else {
      console.log("Adding new product:", values);
      dispatch(addProduct(values));
      
    }
    setShowModal(false);
  }

  const handleDelete = (id) => {
    // Delete product logic
    console.log("Deleting product with id:", id);
    dispatch(deleteProduct(id));

  }

  return (
    <>
        <section>
            <Header />
            <Container className="mt-4">
              <div className='d-flex justify-content-end mb-4'>
                <Button variant='primary' onClick={handleAdd}>
                    <i className='bi bi-plus-circle me-2'></i>Add Product
                </Button>
              </div>

              {loading ? (
                <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "200px" }}>
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : item.length === 0 ? (
                <div 
                  className='d-flex justify-content-center align-item-center'
                  style={{  minHeight: "200px"  }}
                >
                  <EmptyComponent message="We're currently out of stock" />
                </div>
              ) : (
                
                <Row className="g-4">
                  {item.map((product) => {
                    return (
                      <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
                        <ProductCard product={product} onEdit={() => {
                          handleEdit(product);
                        }}
                        onDelete={() => {
                          handleDelete(product._id);
                        }}
                        />
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Container>
            <ProductModal 
            show={showModal} 
            onClose={() => {
              setShowModal(false)
            }}
            initialValues={editItem ||
                {
                    title: "",
                    image: "",
                    description: "",
                    price: ""
                }
            }
            onSubmit={handleSubmit}
            isEdit={!!editItem}
            />
        </section>
    </>
  )
}
