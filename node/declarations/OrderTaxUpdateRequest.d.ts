
import type { OrderChargeTaxAssignment } from './OrderChargeTaxAssignment.js';
import type { OrderLineItemTaxAssignment } from './OrderLineItemTaxAssignment.js';
import type { OrderTaxCalculationRequest } from './OrderTaxCalculationRequest.js';
import type { OrderTaxLocationRequest } from './OrderTaxLocationRequest.js';

export type OrderTaxUpdateRequest = ({ "calculation"?: OrderTaxCalculationRequest; /** Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. */ "charge_calculations"?: Array<OrderChargeTaxAssignment>; "enabled"?: boolean; /** Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. */ "line_item_calculations"?: Array<OrderLineItemTaxAssignment>; "location"?: OrderTaxLocationRequest; }) & (({ "enabled"?: boolean; }) | (({ "enabled": boolean; })) | (object));
