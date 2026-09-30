
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnDispositionInput } from './ReturnDispositionInput.js';

export type ListReturnDispositionsResponseInput = { "data": Array<ReturnDispositionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
