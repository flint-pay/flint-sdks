
import type { TaxCalculationRequest } from './TaxCalculationRequest.js';

export type OrderCalculatedChargeTax = { "calculation"?: TaxCalculationRequest; /** Flint charge tax category. */ "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {}); "taxable"?: boolean; };
