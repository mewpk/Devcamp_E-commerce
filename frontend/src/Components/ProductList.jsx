import React from "react";
import "antd/dist/antd.css";
import { Table, Avatar, Button } from "antd";
import {  useSelector } from "react-redux";
import "./Product.css";
export default function ProductList() {
  const data = useSelector((state) => state.product);
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
          <Button type="primary" style={{ margin: "20px" }} >
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

  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Button
        style={{
          display: "block",
          margin: "20px 50px 0px auto",
          textAlign: "right",
        }}
        type="primary"
      >
        Create
      </Button>
    </div>
  );
}
