import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Shared/Loader";
import Loading from "../Shared/Loading";
import Users from "./Users";

export default function AllUsers() {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["available"], () =>
    axios.get(`https://car-parts-bangladesh.herokuapp.com/api/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("aceessToken")}`,
      },
    })
  );
  // console.log(users?.data);

  if (isLoading) return <Loading />;
  return (
    <>
      {!isLoading ? (
        <>
          <div>
            <div className="overflow-x-auto flex justify-center items-center">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.data?.map((user, index) => (
                    <Users
                      user={user}
                      key={user?._id}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
