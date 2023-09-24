import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/select-region">
        <Button className="mr-2 ">Chọn theo từng vùng</Button>
      </Link>
      <Link to="/hover-region">
        <Button className="mr-2">Hover theo từng vùng</Button>
      </Link>
      <Link to="/chart-region">
        <Button>Biểu đồ từng vùng</Button>
      </Link>
      <Row gutter={[16, 16]}>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};
