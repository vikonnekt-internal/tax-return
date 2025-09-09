import { Box } from '@island.is/island-ui/core'
import MainLayout from '../../component/layout/MainLayout'
import SectionWrapper from '../../component/layout/SectionWrapper'
import CustomStepper from '../../component/ui/TaxStepper'
import { purple100 } from '@island.is/island-ui/theme'
import TaxStepper from '../../component/ui/TaxStepper'
const TaxPage = () => {
  return (
    <MainLayout loggedIn={true}>
      <TaxStepper />
    </MainLayout>
  )
}

export default TaxPage
