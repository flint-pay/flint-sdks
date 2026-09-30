
import type { MoneyValue } from './MoneyValue.js';
import type { OrderDraftTaxJurisdictionRequest } from './OrderDraftTaxJurisdictionRequest.js';

export type OrderDraftTaxComponentRequest = ({ "calculation_type"?: "percentage" | (string & {}); "flat_money"?: MoneyValue; "jurisdiction": OrderDraftTaxJurisdictionRequest; /** minimum: 0. maximum: 100. multipleOf: 0.0001. */ "percentage": number; "tax_type": "sales_tax" | "use_tax" | (string & {}); });
