type TeamsId =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
type TeamsName =
  | "Alcaldía de Funes - Fundación Fénix"
  | "Alcaldía de Pupiales"
  | "Américo Quiñones La Unión"
  | "Asociación Deportivo Pasto"
  | "Club Atlético Sucre Ipiales"
  | "Club CAR Nariño"
  | "Club Eder Ruales Ipiales"
  | "Club Estudiantes Pasto"
  | "Club Futuras Estrellas Nariño"
  | "Club Leones FC Pasto"
  | "Club MPB Ricaurte"
  | "Club Sporting de Nariño"
  | "Club Sueño Fútbol Cumbal"
  | "Club Talentos del Sur Ipiales"
  | "Escuela Deportivo Pasto 2013"
  | "Escuela William Andrade Mora Samaniego";

export interface Team {
  id: TeamsId;
  name: TeamsName;
  image: {
    w: number;
    h: number;
  };
}
