
import type { ReturnDisposition } from './ReturnDisposition.js';
import type { ReturnInspection } from './ReturnInspection.js';
import type { ReturnReceipt } from './ReturnReceipt.js';
import type { ReturnResolution } from './ReturnResolution.js';
import type { ReturnResource } from './ReturnResource.js';

export type ReturnProcessResult = { "idempotency_key": string; "return": ReturnResource; "return_dispositions": Array<ReturnDisposition>; "return_inspections": Array<ReturnInspection>; "return_receipts": Array<ReturnReceipt>; "return_resolutions": Array<ReturnResolution>; };
