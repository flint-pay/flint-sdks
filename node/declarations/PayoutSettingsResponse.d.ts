
import type { PayoutSettings } from './PayoutSettings.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PayoutSettingsResponse = { "data": PayoutSettings; "meta"?: ResponseMeta; "request_id"?: string; };
