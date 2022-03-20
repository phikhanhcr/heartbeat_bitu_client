import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useUser from "../../customHooks/useUser";
import { userListInit } from "../../redux/features/userListSlice";
import Header from "../Header/Header";
import EachUser from "./EachUser";

function Home() {
  const { userList, isLoading } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(userListInit());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="pt-[200px] h-[100px]  w-[100%]  max-w-[975px] mx-auto my-0 p-0 ">
        <div className="flex flex-wrap justify-center -px-1 lg:-mx-3.5">
          {userList.length ? (
            userList.map((ele, index) => <EachUser data={ele} key={index} />)
          ) : (
            <div>No data to show</div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
