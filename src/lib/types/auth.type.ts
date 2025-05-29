export interface Usuario {
  usuNom: string,
  perNomCom: string,
  perApe: string,
  perSex: Sexo,
  usuRol: number,
}

export interface Credentials {
  username: string;
  password: string;
}

export enum Sexo {
  MASCULINO = 'MASCULINO',
  FEMENINO = 'FEMENINO',
}