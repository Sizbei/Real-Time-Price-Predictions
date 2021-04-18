import Col from "react-bootstrap/Col";

const ErrorPage = () => {
  return (
    <div>
      <img src={'assets/left.png'} class="left" />
      <img src={'assets/right.png'} class="right" />
      <div className="center" style={{ "text-align": "center" }}>
        <div className="center">
          <Col>
            <img src={'assets/404.png'} style={{ margin: "20px" }} />
            <img src={'404text.png'} />
          </Col>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
