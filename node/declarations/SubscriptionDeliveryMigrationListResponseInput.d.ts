
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionDeliveryMigrationInput } from './SubscriptionDeliveryMigrationInput.js';

export type SubscriptionDeliveryMigrationListResponseInput = { "data": Array<SubscriptionDeliveryMigrationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
