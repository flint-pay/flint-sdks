
import type { GiftCardCommandResult } from './GiftCardCommandResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardCommandResponse = { "data": GiftCardCommandResult; "meta"?: ResponseMeta; "request_id"?: string; };
