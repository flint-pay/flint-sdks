
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionDeliveryMigration } from './SubscriptionDeliveryMigration.js';

export type SubscriptionDeliveryMigrationListResponse = { "data": Array<SubscriptionDeliveryMigration>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
