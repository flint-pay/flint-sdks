
import type { TaxCalculationRequestInput } from './TaxCalculationRequestInput.js';

export type OrderCalculatedChargeTaxInput = { "calculation"?: TaxCalculationRequestInput; /** Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed at the general rate, and a taxable charge in another category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. */ "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge"; "taxable"?: boolean; };
