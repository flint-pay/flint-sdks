
import type { OrderTaxExemptionInput } from './OrderTaxExemptionInput.js';
import type { OrderTaxLocationInput } from './OrderTaxLocationInput.js';
import type { TaxBreakdownInput } from './TaxBreakdownInput.js';

export type OrderTaxInput = { /** Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. */ "automatic_profile"?: "standard" | "connected"; "available_location_inputs"?: Array<string>; "enabled": boolean; "exemption"?: OrderTaxExemptionInput; /** Normalized reason the most recent tax calculation could not complete. */ "failure_reason"?: "calculation_unavailable" | "location_unsupported" | "rate_unavailable"; "location"?: OrderTaxLocationInput; "mode": "automatic" | "external"; "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete"; "tax_breakdowns"?: Array<TaxBreakdownInput>; /** Explains why tax was charged or zero for this order. */ "taxability_reason": "standard_rated" | "not_taxable" | "customer_exempt" | "tax_disabled" | "no_jurisdiction" | "location_required"; };
