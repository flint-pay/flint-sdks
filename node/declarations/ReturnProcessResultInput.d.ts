
import type { ReturnDispositionInput } from './ReturnDispositionInput.js';
import type { ReturnInspectionInput } from './ReturnInspectionInput.js';
import type { ReturnReceiptInput } from './ReturnReceiptInput.js';
import type { ReturnResolutionInput } from './ReturnResolutionInput.js';
import type { ReturnResourceInput } from './ReturnResourceInput.js';

export type ReturnProcessResultInput = { "idempotency_key": string; "return": ReturnResourceInput; "return_dispositions": Array<ReturnDispositionInput>; "return_inspections": Array<ReturnInspectionInput>; "return_receipts": Array<ReturnReceiptInput>; "return_resolutions": Array<ReturnResolutionInput>; };
