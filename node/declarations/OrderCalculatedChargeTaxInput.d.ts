
import type { TaxCalculationRequestInput } from './TaxCalculationRequestInput.js';

export type OrderCalculatedChargeTaxInput = { "calculation"?: TaxCalculationRequestInput; /** Flint charge tax category. */ "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge"; "taxable"?: boolean; };
