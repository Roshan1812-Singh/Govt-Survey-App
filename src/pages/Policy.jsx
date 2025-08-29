import React from 'react'
import './Policy.css'
import Footer from '../components/Footer'

const Policy = () => {
    return (
        <>
            <div>
                <div className="head">
                    <a href="/dashboard">Home</a>
                </div>
                <div className="head-guidelines">
                    <p>Policies and Guidelines</p>
                </div>
                <div className="guidelines">
                    {/* <a href="public/policy1.pdf"> */}
                    <a href="https://mospi.gov.in/sites/default/files/main_menu/data_discremination/national_policy_data_dissemination_6jan1999.pdf">
                        National Policy on Dissemination of Statistical data
                    </a>
                </div>
                <div className="guidelines">
                    {/* <a href="public\policy2.pdf"> */}
                        <a href="https://mospi.gov.in/sites/default/files/main_menu/data_discremination/policy_nss_pub_25se17.pdf">
                        Policy Guidelines for using materials from published NSS reports
                    </a>
                </div>
                <div className="guidelines">
                    {/* <a href="public\policy3.pdf"> */}
                        <a href="https://mospi.gov.in/sites/default/files/data_disemination/Data_Dissemination_Guidelines%20_feb19.pdf">
                        Guidelines for Statistical Data Dissemination (GSDD), February 2019
                    </a>
                </div>
                <div className="guidelines">
                    {/* <a href="public\policy.pdf"> */}
                        <a href="https://mospi.gov.in/sites/default/files/data_disemination/OM%20_to_disseminate_data%20free_.pdf">
                        OM-Online Microdata Dissemination Census / Survey conducted by MOSPI
                    </a>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Policy
