interface PriceData {
  currency: string;

  product?: string;

  product_data?: any;

  recurring?: any;

  tax_behavior?: any;

  unit_amount?: number;

  unit_amount_decimal?: string;
}

export interface IItemStripe {
  adjustable_quantity?: any;
  dynamic_tax_rates?: Array<string>;
  price?: string;
  price_data?: PriceData;
  quantity?: number;
  tax_rates?: Array<string>;
}
