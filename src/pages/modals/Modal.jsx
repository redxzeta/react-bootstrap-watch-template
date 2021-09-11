import { useEffect, useState } from "react";
import { Container, Table, Button, Image } from "react-bootstrap";
import FunModal from "../../components/FunModal";
import useToggle from "../../customHooks/useToggle";

const funWines = ["reds", "whites", "sparkling", "rose"];

// sample url
// https://sampleapis.com/api-list/wines

const ModalExample = () => {
  const [wineType, setWineType] = useState("reds");
  useEffect(() => {
    const getWine = async () => {
      const response = await fetch(
        `https://api.sampleapis.com/wines/${wineType}`
      );
      const data = await response.json();
      setWineList(data.slice(0, 25));
    };
    getWine();
  }, [wineType]);
  const [open, handleOpen] = useToggle();
  const [wineList, setWineList] = useState([]);

  const getWineData = (w) => {
    setModalWine({
      title: w.winery,
      img: w.image,
    });
    handleOpen();
  };
  const [modalWine, setModalWine] = useState({ title: "wine", img: "" });
  return (
    <div>
      <h1>Modal</h1>
      <FunModal
        show={open}
        handleClose={handleOpen}
        title={modalWine.title || "N/A"}
      >
        <Image src={modalWine.img} alt={modalWine.title} />
        <br />
        <small>Passing Children Here</small>
      </FunModal>
      {funWines.map((f) => (
        <Button onClick={() => setWineType(f)} key={f}>
          {f}
        </Button>
      ))}
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Winery</th>
              <th>Wine</th>
              <th>Rating</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {wineList.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.winery}</td>
                <td>{w.wine}</td>
                <td>{w.rating.average}</td>
                <td>
                  <Button onClick={() => getWineData(w)}>View Image</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ModalExample;
