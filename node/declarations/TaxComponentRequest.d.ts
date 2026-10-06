
import type { MoneyValue } from './MoneyValue.js';
import type { TaxJurisdiction } from './TaxJurisdiction.js';

export type TaxComponentRequest = ({ "calculation_type"?: "percentage" | (string & {}); "flat_money"?: MoneyValue; "jurisdiction": TaxJurisdiction; /** minimum: 0. maximum: 100. multipleOf: 0.0001. */ "percent": number; "tax_type": "sales_tax" | "use_tax" | (string & {}); });
