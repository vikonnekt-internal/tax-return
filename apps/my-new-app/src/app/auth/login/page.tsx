import AuthBottom from "apps/my-new-app/src/component/ui/AuthBottom";
import AuthBox from "apps/my-new-app/src/component/ui/AuthBox";
import AuthWays from "apps/my-new-app/src/component/ui/AuthWays";
import LoginForm from "apps/my-new-app/src/module/LoginForm";
const LoginPage = () => {
    return (
        <div className="space-y-4 w-full h-[100vh] flex flex-col justify-center items-center">
            <AuthBox>
                <LoginForm />
                <AuthWays/>
            </AuthBox>
            <AuthBottom />
        </div>
    )
}


export default LoginPage;