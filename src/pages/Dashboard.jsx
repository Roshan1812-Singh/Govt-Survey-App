import React from 'react'
import './Dashboard.css'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className='container'>
      <div className="first-cont">
        <p className="para1">
          National Statistics Office of India under Ministry of
          Statistics and Programme Implementation follows policy of
          open access to microdata from its extensive surveys and
          censuses. Our web-based cataloguing portal, powered by the
          National Data Archive (NADA) software from the International
          Household Survey Network(IHSN),provides researchers,
          policymakers, and the public with seamless access to
          detailed survey metadata and datasets. This gateway to
          official statistics is designed to support evidence-based
          research and informed decision-making through transparent
          data dissemination.
        </p>
        <p className="para2">
          This system serves as a portal for researchers to
          browse, search, and download relevant census or
          survey documents and metadata. The Microdata
          Archive provides web based access to the complete
          metadata and unit level data of
          over <b>178 surveys</b> and censuses.
        </p>
      </div>

      <div className="grid-box">
        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/ASI/?page=1&sort_order=desc&ps=15&repo=ASI">
            Annual Survey of Industries
          </a>
        </div>
        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/148">
            Index of Industrial Production
          </a>
        </div>

        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/CEXP/?page=1&sort_order=desc&ps=15&repo=CEXP">
            Household Consumption Expenditure
          </a>
        </div>

        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/ECO/?page=1&sort_order=desc&ps=15&repo=ECO">
            Economic Census
          </a>
        </div>

        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/ENT/?page=1&sort_order=desc&ps=15&repo=ENT">
            Enterprises Surveys
          </a>
        </div>

        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/PLFS/?page=1&sort_order=desc&ps=15&repo=PLFS">
            Periodic Labour Force Survey
          </a>
        </div>
        
        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/EUE/?page=1&sort_order=desc&ps=15&repo=EUE">
            Employment and Unemployment
          </a>
        </div>
        
        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/LLS/?page=1&sort_order=desc&ps=15&repo=LLS">
            Land and Livestock Holding Surveys
          </a>
        </div>
        
        <div>
          <a href="https://microdata.gov.in/NADA/index.php/catalog/OTH/?page=1&sort_order=desc&ps=15&repo=OTH">
            Other Surveys
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
