export interface User {
  id: number;
  usuario: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  idDepartamento: number;
  idCargo: number;
  // Agrega más campos si tu API los retorna
}
