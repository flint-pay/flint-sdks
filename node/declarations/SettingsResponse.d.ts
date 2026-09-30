
import type { ResponseMeta } from './ResponseMeta.js';
import type { Settings } from './Settings.js';

export type SettingsResponse = { "data": Settings; "meta"?: ResponseMeta; "request_id"?: string; };
