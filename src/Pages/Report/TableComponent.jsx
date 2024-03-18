import { Table } from "antd";
function TableComponent({ reportData, handleTableChange, paginationOption }) {
    const columns = [
        {
            title: 'S.N.',
            dataIndex: 'order_id',
            key: 'order_id',
        },
        {
            title: 'Order Name',
            dataIndex: 'order_name',
            key: 'order_name',
        },
        {
            title: 'Order Method',
            dataIndex: 'payment_method',
            key: 'payment_method',
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            key: 'total_amount',
        }
    ];
    return (
        <div>
            <Table dataSource={reportData?.orderList} columns={columns} pagination={paginationOption} onChange={handleTableChange}  />
            <p style={{fontSize: "1.2rem",marginBottom: "20px"}}>Total Amount : <span style={{fontWeight: "bold"}}>Rs. {reportData?.totalAmount}</span></p>
        </div>
    )
}

export default TableComponent