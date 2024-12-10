import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { removeAction } from "../redux/action";

const Favourites = () => {
  const companies = useSelector((state) => state.companies.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container className="">
        <h1 className="display-1 text-center">Favourites</h1>

        <Row>
          {companies.length > 0 ? (
            companies.map((company, i) => (
              <Col className="my-3 border border-1 rounded" sm={12} key={i}>
                <Button
                  variant="danger my-2 me-2"
                  onClick={() => {
                    dispatch(removeAction(company));
                  }}
                >
                  <FaTrash />
                </Button>
                <Link to={`/${company}`}>{company}</Link>
              </Col>
            ))
          ) : (
            <Col sm={12} className="lead ">
              <span className="text-primary opacity-50 fs-1 me-2"></span>
              Your Favourite page is empty
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
