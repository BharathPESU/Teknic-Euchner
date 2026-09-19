export interface ProductInfo {
  badge: string;
  tagline: string;
  lead: string;
  paras: string[];
  features: string[];
  specs: [string, string][];
  uses: string;
  catalog: [string, string];
  note?: string;
}

export interface DealerInfo {
  className: string;
  region: string;
  name: string;
  address: string;
  phones: string[];
}

export type ModalType = 'expert' | 'products' | 'dealers' | 'info' | null;

export interface InfoModalState {
  title: string;
  htmlContent: string;
  productKey?: string;
}

export interface ExpertFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}
