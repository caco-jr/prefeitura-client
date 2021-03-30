export type IHealthCenter = {
  id: string;
  name: string;
  type_institution: string;
  port: 'small' | 'medium' | 'large';
  maintaining_entity: 'público' | 'privado';
  health_insurance: string[];
  services: string[];
  address: {
    state: string;
    city: string;
    cep: string;
    district: string;
    street: string;
    number: number;
  };
};
