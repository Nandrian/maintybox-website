import HomeOne from "../components/homes/home-one"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const HomeOnemain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'MaintyBox — Studio créatif'} />
         <HomeOne />
      </Wrapper>
   )
}

export default HomeOnemain
