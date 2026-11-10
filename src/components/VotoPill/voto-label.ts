export type Voto = "si" | "no" | "abstencion" | "ausente";

export const VOTO_LABEL: Record<Voto, string> = {
  si: "Sí",
  no: "No",
  abstencion: "Abstención",
  ausente: "No vota",
};
