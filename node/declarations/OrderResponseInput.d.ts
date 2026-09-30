
import type { OrderInput } from './OrderInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrderResponseInput = { "data": OrderInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
