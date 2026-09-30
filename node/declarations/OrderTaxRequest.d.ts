
import type { OrderTaxCalculationRequest } from './OrderTaxCalculationRequest.js';
import type { OrderTaxLocationRequest } from './OrderTaxLocationRequest.js';

export type OrderTaxRequest = ({ "calculation"?: OrderTaxCalculationRequest; "enabled"?: boolean; "location"?: OrderTaxLocationRequest; }) & (({ "enabled"?: boolean; }) | (({ "enabled": boolean; })) | (object));
