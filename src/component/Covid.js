import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            // console.log(data.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);
    
  return (
    <div className='bg-dark pb-5'>
        <h5 className='text-center text-danger'><marquee direction={'right'} behavior={'alternate'}> LIVE </marquee></h5>
        <h2 className='text-center text-white'>COVID-19 CORONAVIRUS TRACKER</h2>
        <div className="container">
            <div className='row mt-3'>
                <div className="col-md-4 mt-3">
                    <div className="card-body bg-primary">
                        <p className='text-center text-white'><span>OUR COUNTRY</span></p>
                        <h2 className="text-center text-white font-weight-bold" style={{textShadow:'2px 8px 8px black'}}>INDIA</h2>
                    </div>
                </div>
                <div className="col-md-4  mt-3">
                    <div className="card-body bg-success">
                        <p className='text-center text-white'><span>TOTAL RECOVERED</span></p>
                        <h2 className="text-center text-white" style={{textShadow:'2px 8px 8px black'}}>{(String(data.recovered)).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card-body bg-warning">
                        <p className='text-center text-white'><span>TOTAL CONFIRMED</span></p>
                        <h2 className="text-center text-white" style={{textShadow:'2px 8px 8px black'}}>{String(data.confirmed).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4 mt-3">
                    <div className="card-body bg-danger">
                        <p className='text-center text-white'><span>TOTAL DEATHS</span></p>
                        <h2 className="text-center text-white" style={{textShadow:'2px 8px 8px black'}}>{String(data.deaths).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card-body bg-primary">
                        <p className='text-center text-white'><span>TOTAL ACTIVE</span></p>
                        <h2 className="text-center text-white" style={{textShadow:'2px 8px 8px black'}}>{String(data.active).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card-body bg-info">
                        <p className='text-center text-white'><span>LAST UPDATED</span></p>
                        <h2 className="text-center text-white" style={{textShadow:'2px 8px 8px black'}}>{data.lastupdatedtime}</h2>
                    </div>
                </div>
            </div>
            <div className='mt-3 pb-2'>
                <footer className='text-center text-white'>
                    <span>Manish Bhagat</span> <sup>&copy;</sup> &nbsp; {`${(new Date()).getFullYear()}`}
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Covid
