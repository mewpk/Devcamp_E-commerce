import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Avatar, Button, Modal, Form, Input, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { insertData, initData } from "../Reducers/productReducer";
import "./Product.css";
import axios from "axios";

export default function ProductList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product);

  useEffect(() => {
    const GetData = async () => {
      const res = await axios.get("http://13.212.113.0:3000/user");
      const data = res.data.data;
      dispatch(initData(data));
    };
    GetData();
  }, []);
  // ---------------Create Button Submit ------------------//
  const onFinish = async (values) => {
    setIsModalVisible(false);
    const sendData = await axios.post("http://13.212.113.0:3000/user", values);
    let newData = values;
    newData.id = sendData.data.id;
    dispatch(insertData(values));
  };

  const delData = async (id) =>{
    const data = await axios.delete(`http://13.212.113.0:3000/user/${id}`)
    const GetData = async () => {
      const res = await axios.get("http://13.212.113.0:3000/user");
      const data = res.data.data;
      dispatch(initData(data));
    };
    GetData();;
  }


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // ---------------Modal ------------------//
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // -------------------Redux --------------------//

  //----------------------------Axios-------------------------------------------//

  // -------------------Table --------------------//
  const columns = [
    {
      title: "Photo",

      key: "Photo",
      render: (x) => <Avatar src={x.img} />,
    },
    {
      title: "Product Name",
      key: "name",
      render: (x) => <p>{x.product_name}</p>,
    },
    {
      title: "Stock Left",

      key: "stockleft",
      render: (x) => <p>{x.stock_left}</p>,
    },
    {
      title: "Category",
      key: "category",

      render: (x) => <p>{x.category}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (x) => (
        <>
          <a href="">
            <Button type="primary" style={{ margin: "20px" }}
            onClick={()=>{


            }}>
              Edit
            </Button>
          </a>
          <Button
            type="primary"
            danger
            onClick={() => {
              delData(x.id)
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  //------------------------------------------------------------------------------//
  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      {/* -------------------------------Table -------------------------------- */}
      <Table
        rowKey={(dt) => dt.id}
        columns={columns}
        dataSource={data.data}
        pagination={false}
      />
      {/* ------------------------------------------------------------------- */}
      <Button
        style={{
          display: "block",
          margin: "20px 50px 100px auto",
          textAlign: "right",
        }}
        type="primary"
        onClick={showModal}
      >
        Create
      </Button>

      {/* ----------------------------------Modal Create------------------------------- */}
      <Modal
        title="Create New Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="Create"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              {
                required: true,
                message: "Please input your Product Name !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Stock Left"
            name="stock_left"
            rules={[
              {
                required: true,
                message: "Please input your Stock Left!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* ----------------------------------------------------------------------- */}
      {/* ----------------------------------Modal Edit------------------------------- */}
      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="Edit"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              {
                required: true,
                message: "Please input your Product Name !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Stock Left"
            name="stock_left"
            rules={[
              {
                required: true,
                message: "Please input your Stock Left!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* ----------------------------------------------------------------------- */}
    </div>
  );
}
