
import type { OrderDraftLineItemTaxCalculationRequestInput } from './OrderDraftLineItemTaxCalculationRequestInput.js';

export type OrderDraftLineItemTaxRequestInput = { "calculation"?: OrderDraftLineItemTaxCalculationRequestInput; /** Flint line-item tax category. */ "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "taxable"?: boolean; };
