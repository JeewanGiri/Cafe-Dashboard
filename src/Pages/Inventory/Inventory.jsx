import { Avatar, Button, Rate, Space, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getInventory } from "../../Api/Api";
import "../../Styling/Sass/invent.scss"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Inventory = () => {
  const location=useLocation();
  const [loading,setLoading]=useState(false);
  const [dataSource,setDataSource]=useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect (()=>{
    setLoading(true)
    getInventory().then(res=>{
      setDataSource(res.products)
      setLoading(false);
    })
  },[])
  const handleDelete=()=>{

  }
  const handleEdit=()=>{

  }
  return (
   <>
     <div className="invent">
     <Typography.Title level={4}>Inventory</Typography.Title>
     <hr/>
     <div className="addproduct">
     <div className="breadcrumb">
      <span><Link to='/dashboard'>Home</Link></span>/<span className={`${location.pathname==='/category'?'path-active':""}`}>Category</span>
    </div>
     <div className="add">
    <Button type="primary" onClick={''}>Add Product</Button>
    </div>
     </div>


    <Space size={20} direction="vertical">
      <Table
      loading={loading}
      columns={[
        {
          title:"Thumbnail",
          dataIndex:"thumbnail",
          render:(link)=>{
            return<Avatar src={link}/>
          }
        },
        {
          title:"Title",
          dataIndex:"title"
        },
        {
          title:"Price",
          dataIndex:"price",
          render:(value)=><span>${value}</span>
        },
        {
          title:"Rating",
          dataIndex:"rating",
          render:(rating)=>{
            return <Rate value={rating} allowHalf disabled/>
          }
        },
        {
          title:"Stock",
          dataIndex:"stock"
        },
        {
          title:"Brand",
          dataIndex:"brand"
        },
        {
          title:"Category",
          dataIndex:"category"
        },
        {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)} danger>Delete</Button>
        </Space>
      )
    }
      ]}
      dataSource={dataSource}
      pagination={{
        pageSize:5
      }}
      >
      </Table>
    </Space>
    </div>
   </>
  )
}

export default Inventory
