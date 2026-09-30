
import type { OrderTaxCalculationRequestInput } from './OrderTaxCalculationRequestInput.js';
import type { OrderTaxLocationRequestInput } from './OrderTaxLocationRequestInput.js';

export type OrderTaxRequestInput = ({ "calculation"?: OrderTaxCalculationRequestInput; "enabled"?: boolean; "location"?: OrderTaxLocationRequestInput; }) & (({ "enabled"?: true; }) | (({ "enabled": false; }) & (({ "calculation"?: never }) & ({ "location"?: never }))));
