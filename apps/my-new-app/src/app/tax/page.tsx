import { Box } from "@island.is/island-ui/core";
import MainLayout from "../../component/layout/MainLayout";
import SectionWrapper from "../../component/layout/SectionWrapper";
import CustomStepper from "../../component/ui/CustomStepper";
import { purple100 } from "@island.is/island-ui/theme";
const TaxPage = () => {
    return (
        <MainLayout loggedIn={true}>
            <CustomStepper />
        </MainLayout>
    )
}

export default TaxPage;