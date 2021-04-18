import Col from "react-bootstrap/Col";

const ErrorPage = () => {
  return (
    <div>
      <div className="center" style={{ "text-align": "center" }}>
        <div className="center">
          <Col>
            <img src={'assets/404.png'} style={{ margin: "20px" }} />
            <img src={'assets/404text.png'} />
          </Col>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
