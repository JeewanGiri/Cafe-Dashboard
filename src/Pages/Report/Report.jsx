import  { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Tabs } from 'antd';
import TableComponent from './TableComponent';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { apiRequest } from '../../apiProvider/api.services';
import useAxiosPrivate from '../../CustomHook/useAxiosPrivate';
function Report() {
    const axiosPrivate = useAxiosPrivate()
    const location = useLocation();
    const [paginationOption, setPaginationOption] = useState({
        total: 0,
        pageSize: 4,
        current: 1,
        showSizeChanger: true,
    
      })
      const [reportData,setReportData] = useState(null)
      const [activeKey,setActiveKey] = useState(1)
      const queryClient = useQueryClient()

    const onChange = (key) => {
        setActiveKey(key)
      };

      const handleTableChange = (pagination) => {
        setPaginationOption(prevPagination => ({
          ...prevPagination,
          ...pagination
        }));
      }
      const items = [
        {
          key: '1',
          label: 'PENDING',
          children: <TableComponent reportData={reportData} handleTableChange= {handleTableChange} paginationOption = {paginationOption} />,
          
        },
        {
          key: '2',
          label: 'CANCELED',
          children: <TableComponent reportData={reportData} handleTableChange= {handleTableChange} paginationOption = {paginationOption} />
        },
        {
          key: '3',
          label: 'COMPLETE',
          children: <TableComponent reportData={reportData} handleTableChange= {handleTableChange} paginationOption = {paginationOption} />,
        },
      ];

      let { isError } = useQuery(
        ["get-report",activeKey,paginationOption],
        () => {
            return apiRequest(axiosPrivate, {
                url:`/reports/order-reports/${activeKey == 1 ? 'PENDING': activeKey== 2 ? 'CANCEL' : 'COMPLETE'}?page=${paginationOption.current}&pageSize=${paginationOption.pageSize}&sortBy=asc`,
            });
        },
        {
            onSuccess: (res) => {
                setPaginationOption({
                    ...paginationOption,
                    total:res.data?.totalData
                })
                setReportData(res.data)

            },
            onError: (e) => {
                if (e) {
                    toast("Error on fetching order list")
                }
            },
        }
    );


            
    return (
            <div className='dashboard_container'>
                <div className='text-dash'>
                    <div className='category-heading'>Reports</div>
                    <div style={{display: "flex",justifyContent: "space-between"}}>
                    <div className="breadcrumb">
                        <span><Link to='/'>Home</Link></span> / <span className={`${location.pathname === '/category' && 'path-active'}`}> Reports</span>
                    </div>
                    <div style={{marginRight: "20px"}}>
                        <Button type='primary'>Export To PDF</Button>
                    </div>
                    </div>
                    <div style={{margin: "20px"}}>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>
            </div>
    )
}

export default Report