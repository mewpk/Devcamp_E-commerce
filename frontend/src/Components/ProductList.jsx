import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Avatar, Button, Modal, Form, Input, Checkbox } from "antd";
import { useSelector , useDispatch} from "react-redux";
import "./Product.css";
import {insertData} from "../Reducers/productReducer"

export default function ProductList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
// ---------------Create Button Submit ------------------//
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalVisible(false);
    // useDispatch(insertData())
  };

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
  const data = useSelector((state) => state.product);

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
      render: (x) => <p>{x.name}</p>,
    },
    {
      title: "Stock Left",

      key: "stockleft",
      render: (x) => <p>{x.stockleft}</p>,
    },
    {
      title: "Category",
      key: "category",

      render: (x) => <p>{x.category}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <a href="">
            <Button type="primary" style={{ margin: "20px" }}>
              Edit
            </Button>
          </a>
          <Button type="primary" danger>
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
      <Table rowKey={ dt => dt.id} columns={columns} dataSource={data} pagination={false} />
      {/* ------------------------------------------------------------------- */}
      <Button
        style={{
          display: "block",
          margin: "20px 50px 0px auto",
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
          name="basic"
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
            name="name"
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
            name="stockleft"
            rules={[
              {
                required: true,
                message: "Please input your Stock Left!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
          >
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
