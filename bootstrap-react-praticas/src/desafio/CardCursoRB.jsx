// VERSÃO B · React-Bootstrap: cada pedaço vira uma tag com props.
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function CardCursoRB({ curso, onInscrever }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5">{curso.nome}</Card.Title>
        <Card.Text className="text-body-secondary">{curso.descricao}</Card.Text>

        <div className="d-flex align-items-center gap-2 mb-3">
          <Badge bg="secondary">{curso.nivel}</Badge>
          <span>
            <i className="bi bi-clock" aria-hidden="true"></i> {curso.carga} h
          </span>
        </div>

        <Button variant="primary" className="mt-auto" onClick={() => onInscrever(curso)}>
          Inscrever-se
        </Button>
      </Card.Body>
    </Card>
  );
}
