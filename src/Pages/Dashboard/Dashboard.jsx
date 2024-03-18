import { useRef, useState } from 'react'
import { SimpleBarChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'
import { ReactTyped } from "react-typed";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../CustomHook/useAxiosPrivate';
import { apiRequest } from '../../apiProvider/api.services';
import "./dash.scss"
const Dashboard = () => {
  const typedRef = useRef(null);
  const axiosPrivate = useAxiosPrivate()
  const [dashboardData,setDashboardData] = useState(null)
  const barchartOptions = {
    title: 'Order Vs. Menu Analysis',
    axes: {
      left: {
        mapsTo: 'totalOrder',
      },
      bottom: {
        mapsTo: 'name',
        scaleType: 'labels',
      },
    },
    height: '400px',
  }

  let { isError } = useQuery(
    ["get-dashboard"],
    () => {
      return apiRequest(axiosPrivate, {
        url: `dashboard/get-statics`,
      });
    },
    {
      onSuccess: (res) => {
      setDashboardData(res.data)
      },
      onError: (e) => {
        if (e) {
          toast("Error on fetching Dashboard Data" )
        }
      },
    }
  );
  const handleTypingComplete = () => {
    // Restart the typing animation
    if (typedRef.current) {
      typedRef.current.reset();
    }
  };
  return (
      <div className='dashboard_container'>
        <div className='text-dash'>
          <div className='dashboard-heading'>
          <ReactTyped style={{color: 'white'}} strings={["Welcome to dashboard !!!","Welcome to LAYANA !!!"]} typeSpeed={30} loop onComplete={handleTypingComplete} />
          </div>
          <div className='dashboard_card'>
            <div className='dashboard_card-box'>
              <div className='dashboard_card-box_item'>
                <p>40</p>
                <p>Total Menu</p>
              </div>
              <div className='dashboard_card-box_item'>
                <p>409</p>
                <p>Total Order</p>
              </div>
              <div className='dashboard_card-box_item'>
                <p>40</p>
                <p>Pending Order</p>
              </div>
              <div className='dashboard_card-box_item'>
                <p>40</p>
                <p>Canceled Order</p>
              </div>
              <div className='dashboard_card-box_item'>
                <p>40</p>
                <p>Complete Order</p>
              </div>

            </div>

            <div className='dashboard_card-chart'>
              <SimpleBarChart
                data={dashboardData?.orderVsMenuList ?? []}
                options={barchartOptions}
              ></SimpleBarChart>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Dashboard