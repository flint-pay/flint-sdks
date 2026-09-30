
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { TaxJurisdictionInput } from './TaxJurisdictionInput.js';

export type TaxComponentRequestInput = ({ "calculation_type"?: "percentage"; "flat_money"?: MoneyValueInput; "jurisdiction": TaxJurisdictionInput; /** minimum: 0. maximum: 100. multipleOf: 0.0001. */ "percentage": number; "tax_type": "sales_tax" | "use_tax"; }) & ({ "flat_money"?: never });
