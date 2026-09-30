
import type { Banner } from './Banner.js';

export type User = { "banners"?: Array<Banner>; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "default_merchant_id"?: string; "email": string; "first_name": string; "last_name": string; "status": "active" | "deactivated" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "user_id": string; };
