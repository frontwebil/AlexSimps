import { Footer } from "./components/Footer";
import { HeaderLoginPage } from "./components/LoginPage/HeaderLoginPage";
import { LoginForm } from "./components/LoginPage/LoginForm";

export function LoginPage({ setCurrentUser }) {
  return (
    <div className="login-page-bg">
      <div className="login-page">
        <HeaderLoginPage />
        <div className="login-page-main">
          <img
            src="image/login-page/main-content-img.jpg"
            alt="Main content illustration"
            className="login-page-main-img"
          />
          <div className="login-page-main-text">
            <h2 className="login-page-main-text-title">
              Cloud-based CRM system
            </h2>
            <p className="login-page-main-text-text">
              Designed specifically for insurance brokers, this system offers an
              intuitive interface for managing policies. It provides quick
              access to essential data and settings, significantly improving
              agents efficiency and enhancing client interactions, while
              streamlining insurance policy management processes.
            </p>
            <div className="login-page-main-text-bottom">
              <div className="login-page-main-text-bottom-row-img">
                <a
                  href="https://play.google.com/store/apps?hl=uk"
                  style={{ maxHeight: "185px" }}
                >
                  <img
                    src="image/login-page/playMarket.png"
                    alt="Google Play Store"
                    className="login-page-main-text-bottom-row-img"
                  />
                </a>
                <a
                  href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
                  style={{ maxHeight: "185px" }}
                >
                  <img
                    src="image/login-page/Appstore.png"
                    alt="Apple App Store"
                    className="login-page-main-text-bottom-row-img"
                  />
                </a>
              </div>
              <LoginForm setCurrentUser={setCurrentUser} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
