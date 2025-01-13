import { Link } from "react-router-dom";

export const SwiperSlides = [
  <div className="slider-admin-wrapper-slide" key={1}>
  <h2 className="slider-wrapper-slide-title">
    Here are your personal settings
  </h2>
  <p className="slider-wrapper-slide-text">
    <span style={{ fontWeight: 700 }}>Step 1.</span> Select the buttons you
    need for the quick access menu.
  </p>
  <div className="slider-wrapper-content">
    <div className="slider-wrapper-content-card">
      <h3 className="slider-wrapper-content-card-title">Check Customer</h3>
      <img
        src="image/slider/slide-1-1.png"
        alt=""
        className="slider-wrapper-content-card-img"
      />
      <Link to='/customers' className="slider-wrapper-content-button">Add</Link>
    </div>
    <div
      className="slider-wrapper-content-card"
      style={{ backgroundColor: "#FF5454" }}
    >
      <h3 className="slider-wrapper-content-card-title">Add Meeting</h3>
      <img
        src="image/slider/slide-1-2.png"
        alt=""
        className="slider-wrapper-content-card-img"
      />
      <button className="slider-wrapper-content-button">Add</button>
    </div>
    <div
      className="slider-wrapper-content-card"
      style={{ background: "#08ccd4" }}
    >
      <h3 className="slider-wrapper-content-card-title">
        Compare Policies
      </h3>
      <img
        src="image/slider/slide-1-3.png"
        alt=""
        className="slider-wrapper-content-card-img"
      />
      <button className="slider-wrapper-content-button nav-rep-button">
        Add
      </button>
    </div>
    <div
      className="slider-wrapper-content-card"
      style={{ background: "#d0e46c" }}
    >
      <h3 className="slider-wrapper-content-card-title">
        Compare Policies
      </h3>
      <img
        src="image/slider/slide-1-4.png"
        alt=""
        className="slider-wrapper-content-card-img"
      />
      <button className="slider-wrapper-content-button nav-rep-button">
        Add
      </button>
    </div>
  </div>
</div>,
<div className="slider-admin-wrapper-slide" key={2}>
  <h2 className="slider-wrapper-slide-title">
    Here are your personal settings
  </h2>
  <p className="slider-wrapper-slide-text">
    <span>Step 2.</span> Select the buttons you need for the quick access
    menu.
  </p>
  <div className="slider-wrapper-content" style={{alignItems: "center"}}>
    <img
      src="image/slider/slide-2-main.png"
      alt=""
      className="swiper-wrapper-slide-form-img"
    />
    <div className="swiper-wrapper-slide-form">
      <input
        type="text"
        name=""
        id=""
        className="swiper-wrapper-slide-form-input"
        placeholder="Google Drive Contact List"
      />
      <button className="swiper-wrapper-slide-form-button">Connect</button>
    </div>
  </div>
</div>,
<div className="slider-admin-wrapper-slide" key={3}>
  <h2 className="slider-wrapper-slide-title">
    Here are your personal settings
  </h2>
  <p className="slider-wrapper-slide-text">
    Here, you will find the user role settings, where you can assign
    permissions and restrictions to users based on their roles in the system
  </p>
  <div className="slider-wrapper-cards">
    <div className="slider-wrapper-card">
      <h2 className="slider-wrapper-card-title">Finance</h2>
      <h3 className="slider-wrapper-card-undertitle">
        Oversees financial <br />
        reporting and payments.
      </h3>
      <p className="slider-wrapper-card-text">
        Responsible for overseeing financial reporting, tracking payments,
        and ensuring the smooth processing of transactions.
      </p>
    </div>
    <div className="slider-wrapper-card">
      <h2
        className="slider-wrapper-card-title"
        style={{background: '#d0e46c'}}
      >
        HR Department
      </h2>
      <h3 className="slider-wrapper-card-undertitle">
        Focuses on monitoring agent productivity.
      </h3>
      <p className="slider-wrapper-card-text">
        Manages system settings, assigns user roles, and controls
        permissions, ensuring that the system operates smoothly and
        securely.
      </p>
    </div>
    <div className="slider-wrapper-card">
      <h2
        className="slider-wrapper-card-title"
        style={{background: '#f8740c'}}
      >
        Administrator
      </h2>
      <h3 className="slider-wrapper-card-undertitle">
        Manages system settings and user roles.
      </h3>
      <p className="slider-wrapper-card-text">
        Engage directly with clients, handling interactions, policy sales,
        and providing tailored insurance solutions.
      </p>
    </div>
    <div className="slider-wrapper-card">
      <h2
        className="slider-wrapper-card-title"
        style={{background: '#08ccac'}}
      >
        HR
      </h2>
      <h3 className="slider-wrapper-card-undertitle">
        Focuses on monitoring agent productivity.
      </h3>
      <p className="slider-wrapper-card-text">
        Focuses on monitoring and improving agent productivity, ensuring the
        team is performing efficiently and meeting performance targets.
      </p>
    </div>
  </div>
</div>
]