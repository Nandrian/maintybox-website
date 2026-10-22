import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Brand from "../../../common/ServiceBrand"
import ServiceArea from "./ServiceArea"
import ServiceItem from "./ServiceItem"

const Service = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadcrumbTwo sub_title="BEST SERVICE PROVIDE"
                     title={<>Experience  <br /> The <span>Best Service </span></>}
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum Duis cursus, mi quis viverra  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  />
                  <ServiceArea />
                  <ServiceItem />
                  <Brand style={true} />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default Service
