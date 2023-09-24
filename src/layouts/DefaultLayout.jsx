import { Button } from "antd";
import { Link, Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[500px]">
        <Outlet />
      </div>
      <Link to="/">
        <Button className="mt-5">Quay về trang chủ</Button>
      </Link>
    </div>
  );
};
