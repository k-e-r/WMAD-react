import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { IUser } from "../model/IUser";

const UserDetail = () => {
  const location = useLocation();
  const [userDetail] = useState<{ user: IUser }>(location.state as { user: IUser });

  return (
    <>
      <Link className="link-secondary" to='/'>
        <h3 className="mt-4 mb-4">UserList</h3>
      </Link>
      <h3>UserDetail</h3>
      <div className="row">
        <div className="col">
          <table className="table text-center table-striped">
            <thead className="bg-success text-white">
              <tr>
                <th colSpan={2}>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>ID</th>
                <td>{userDetail.user.id}</td>
              </tr>
              <tr>
                <th colSpan={2}>Name</th>
                <td>{userDetail.user.name}</td>
              </tr>
              <tr>
                <th colSpan={2}>UserName</th>
                <td>{userDetail.user.username}</td>
              </tr>
              <tr>
                <th colSpan={2}>Email</th>
                <td>{userDetail.user.email}</td>
              </tr>
              <tr>
                <th rowSpan={5}>Address</th>
              </tr>
              <tr>
                <th>Street</th>
                <td>{userDetail.user.address.street}</td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>{userDetail.user.address.suite}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{userDetail.user.address.city}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>{userDetail.user.address.zipcode}</td>
              </tr>
              <tr>
                <th rowSpan={3}>Geo</th>
              </tr>
              <tr>
                <th>Lat</th>
                <td>{userDetail.user.address.geo.lat}</td>
              </tr>
              <tr>
                <th>Lng</th>
                <td>{userDetail.user.address.geo.lng}</td>
              </tr>
              <tr>
                <th colSpan={2}>Phone</th>
                <td>{userDetail.user.phone}</td>
              </tr>
              <tr>
                <th colSpan={2}>Website</th>
                <td>{userDetail.user.website}</td>
              </tr>
              <tr>
                <th rowSpan={4}>Company</th>
              </tr>
              <tr>
                <th>Name</th>
                <td>{userDetail.user.company.name}</td>
              </tr>
              <tr>
                <th>CatchPhrase</th>
                <td>{userDetail.user.company.catchPhrase}</td>
              </tr>
              <tr>
                <th>Bs</th>
                <td>{userDetail.user.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
