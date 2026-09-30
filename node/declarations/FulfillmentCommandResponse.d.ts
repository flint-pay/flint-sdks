
import type { FulfillmentCommandResult } from './FulfillmentCommandResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentCommandResponse = { "data": FulfillmentCommandResult; "meta"?: ResponseMeta; "request_id"?: string; };
