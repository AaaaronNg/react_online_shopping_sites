import UserLayout from "../../hoc/user";
import { Link, withRouter } from "react-router-dom";

const UserDashboard = ({ user }) => {
  return (
    <div>
      <UserLayout>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 p-5">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-3 ">
              <h1 class="fw-bold">User information</h1>
              <p class="col-md-8 fs-4 text-secondary">
                {user.userData.name}
                <br />
                {user.userData.lastname}
                <br />
                {user.userData.email}
              </p>
              <Link to="/user/user_profile">
                <button class="btn btn-primary btn-lg" type="button">
                  Edit account info
                </button>
              </Link>
            </div>
          </div>
          {/* table */}
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-3 ">
              <h1 class="fw-bold d-flex justify-content-center">History</h1>
            </div>
          </div>
        </main>
      </UserLayout>
    </div>
  );
};

export default UserDashboard;
