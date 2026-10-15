
import type { OrderChargeTaxAssignmentInput } from './OrderChargeTaxAssignmentInput.js';
import type { OrderLineItemTaxAssignmentInput } from './OrderLineItemTaxAssignmentInput.js';
import type { OrderTaxCalculationRequestInput } from './OrderTaxCalculationRequestInput.js';
import type { OrderTaxLocationRequestInput } from './OrderTaxLocationRequestInput.js';

export type OrderTaxUpdateRequestInput = ({ "calculation"?: OrderTaxCalculationRequestInput; /** Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. */ "charge_calculations"?: Array<OrderChargeTaxAssignmentInput>; "enabled"?: boolean; /** Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. */ "line_item_calculations"?: Array<OrderLineItemTaxAssignmentInput>; "location"?: OrderTaxLocationRequestInput; }) & (({ "enabled"?: true; }) | (({ "enabled": false; }) & (({ "calculation"?: never }) & ({ "location"?: never }) & ({ "line_item_calculations"?: never }) & ({ "charge_calculations"?: never }))));
