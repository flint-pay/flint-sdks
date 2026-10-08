
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionDeliveryMigrationFailure } from './SubscriptionDeliveryMigrationFailure.js';

export type SubscriptionDeliveryMigrationFailureListResponse = { "data": Array<SubscriptionDeliveryMigrationFailure>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
