
import type { CustomerEmailPreferences } from './CustomerEmailPreferences.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerEmailPreferencesResponse = { "data": CustomerEmailPreferences; "meta"?: ResponseMeta; "request_id"?: string; };
