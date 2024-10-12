import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const responseMessage = (response: CredentialResponse) => {
    // Response must be handled in the backend
    if (response && response?.credential) {
      sessionStorage.setItem("auth", JSON.stringify(response));
      navigate("/");
    }
  };
  const errorMessage = () => {
    console.log();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default LoginPage;
