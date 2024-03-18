import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAxiosPrivate from "../../CustomHook/useAxiosPrivate";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, Select, Table, Typography,Form, Input } from "antd";
import { apiRequest } from "../../apiProvider/api.services";
import { toast } from "react-toastify";
import "../../Styling/Sass/menu.scss"
import { Controller,useForm } from "react-hook-form";
const Menu = () => {
  const{control,
    handleSubmit,
    reset,
    formState: {errors},
  }=useForm();
  const queryClient = useQueryClient()
  const axiosPrivate = useAxiosPrivate()
  const location = useLocation()
  const {TextArea}=Input;
  const {Option}=Select;
  const columns =[
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align   : "center",
      key: 'action',
      render: (_,data) =>{
              return(
                <div className='category-button'>
                  <Button onClick={()=>handleEdit(data)} >Edit</Button>
                  <Button onClick={()=>{setDeleteData(data) 
                  }}>Delete</Button>
                </div>
              )
            }
          },
        ];
        const handleEdit=(data)=>{
           let tempData=data
           tempData.categoryId=tempData.id
           reset(tempData)
           setUpdateData(data)
           showModal();
        }
        const [menuList,setMenuList] = useState([])
        console.log(menuList);
        const [paginationOption,setPaginationOption] = useState({
          total: 0,
          pageSize : 4,
          current:1,
          showSizeChanger: true,
        })
        // api call
        let {isError}=useQuery(
      ["get-category",paginationOption],
      ()=>{
        return apiRequest(axiosPrivate,{
          url:`/category/get-category?page=1&pageSize=20&sortBy=desc`,
        });
      },
      {
        onSuccess:(res)=>{
          setMenuList(res.data?.categoryList)

        },
        onError:(e)=>{
          if(e){
            toast("Error on fetching Menu list !!!")
          }
        },
      }
    );
      let {isErrors}=useQuery(
      ["get-menu",paginationOption],
      ()=>{
        return apiRequest(axiosPrivate,{
          url:`/product/get?page=1&pageSize=10&sortBy=desc`,
        });
      },
      {
        onSuccess:(res)=>{
          setMenuList(res.data?.productList)

        },
        onError:(e)=>{
          if(e){
            toast("Error on fetching Menu list !!!")
          }
        },
      }
    );
    const [isModalOpen,setIsModalOpen]=useState(false);
    const showModal=()=>{
      setIsModalOpen(true);
    }
    const closeModel=()=>{
      setIsModalOpen(false);
    }
    const addMenu =(data)=>{
      console.log(data)
      addMenuMutate(data)
    }
    const {
      mutate: addMenuMutate,
    }=useMutation(   
      (data)=>
      apiRequest(axiosPrivate,{
        url:`product/add`,
        method:"post",
        data,
      }),
      {
        onSuccess:(resp)=>{
          toast("Menu is added Succesfully !!!");
          closeModel();
          queryClient.invalidataQueries("get-menu")
        },
          onError:(e)=>{
            console.log("the err",e)
          },
      }
     );
    //  for update date
     const [updateData,setUpdateData]=useState(null)
     const handleChange=(Pagination)=>{
       setPaginationOption(Pagination)
     }
    const updateMenu=(data)=>{
        console.log(data);
        let tempData={
          id:updateData.id,
          ...data
        }
        updateMenuMutate(tempData)
    }
    const {
      mutate:updateMenuMutate,

    }=useMutation(
      (data)=>
      apiRequest(axiosPrivate,{
        url:`product/update`,
        method:"put",
        data,
      }),
      {
        onSuccess:(resp)=>{
          toast("Menu Updated Successfully")
          closeModel();
          queryClient.invalidateQueries("get-menu")
        },
        onError:(e)=>{
          console.log("the error",(e))
        },
      },
    );
    // for delete data

    const [deleteData,setDeleteData]=useState(null)
    const handleDelete=()=>{
      deleteMenuMutate()
    }
    const closeDeleteModal=()=>{
      setDeleteData(null)
    }
    const {
      mutate:deleteMenuMutate,

    }=useMutation(
      (data)=>
      apiRequest(axiosPrivate,{
        url:`product/delete/${deleteData?.id}`,
        method:"delete",
       
      }),
      {
        onSuccess:(resp)=>{
          toast("Deleted Successfully !!!")
          setDeleteData(null);
          queryClient.invalidateQueries("get-menu")
        },
        onError:(e)=>{
          console.log("the error",(e))
        },
      },
    );
  return (
    <div>
       <div>
        <Typography.Title level={4}>Menu List </Typography.Title>
     </div>
     <div className="menu-top">
     <div className='breadcrumb'>
           <span>
             <Link to='/'>Home</Link>
           </span>/<span className={`${location.pathname === '/menu' && 'path-active'}`}> Menu</span>
         </div>
     <div >
       <Button type="primary" onClick={showModal}>Add Items</Button>
     </div>
     <Modal title={updateMenu?'Add Menu':'Update Menu'} open={isModalOpen}  onOk={closeModel} onCancel={closeModel} footer={''}>
     <Form  onFinish={handleSubmit(updateData?updateMenu:addMenu)}>
         <Form.Item label="Name">
           <Controller
          name="name"
          control={control}
          rules={{required:true}}
          render={({field})=>(
            <input{...field} placeholder="Name" style={{ marginTop: "10px"}}/>
          )}
          />
        </Form.Item>
        <Form.Item label="Category">
          <Controller
          name="categoryId"
          control={control}
          rules={{required:true}}
          render={(field)=>(
            <Select{...field} placeholder="Select the meal type !!!" style={{ marginTop: "10px"}}>
             {
              menuList.map((item,index)=>{
                return(
                  <div key={index}>
               <Select.Option value={item.id}>{item.name}</Select.Option>
                  </div>
                )
              })
              }
            </Select>
          )}
          />
        </Form.Item>
        <Form.Item label="Description">
           <Controller
          name="description"
          control={control}
          rules={{required:true}}
          render={({field})=>(
            <TextArea rows={4}{...field} placeholder="TYpe about the Category" style={{ marginTop: "10px"}}
            />
          )}
          />
        </Form.Item>
        <Form.Item label="Price">
           <Controller
          name="price"
          control={control}
          rules={{required:true}}
          render={({field})=>(
            <input{...field} type="number" placeholder="price of the meal...." style={{ marginTop: "10px"}}
            />
          )}
          />
        </Form.Item>
        
        <div style={{marginTop:'20px',display:'flex',justifyContent:"flex-end",gap:'15px'}}>
         <Button onClick={closeModel}>Cancel</Button>
         <Button type="primary" htmlType="submit">Submit</Button>
        </div>
     </Form> 
    </Modal>
    {/* delete function */}
    <Modal title="Delete Category" open={deleteData ?true:false}
    onCancel={closeDeleteModal}
    onOk={handleDelete}>
<p>Are you sure want to delete !!!</p>
    </Modal>
    </div>
    <div className='category-table'>
        <Table columns={columns} dataSource={menuList}pagination={paginationOption} onChange={handleChange}/>
        </div> 
    </div>
  )
}

export default Menu


