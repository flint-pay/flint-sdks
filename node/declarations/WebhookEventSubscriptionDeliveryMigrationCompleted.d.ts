
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionDeliveryMigration } from './SubscriptionDeliveryMigration.js';
import type { SubscriptionDeliveryMigrationFailureReasonCount } from './SubscriptionDeliveryMigrationFailureReasonCount.js';

export type WebhookEventSubscriptionDeliveryMigrationCompleted = (((({ "data"?: SubscriptionDeliveryMigration; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "completed_at"?: string; "created_at": string; "environment_grant_id": string; "environment_id"?: string; "failed_count": string; "failure_reason_counts": Array<SubscriptionDeliveryMigrationFailureReasonCount>; "from_delivery_method_id": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "moved_count": string; "partner_app_install_id": string; "pending_count": string; "source_type": unknown; "status": "pending" | "running" | "completed" | (string & {}); "subscription_delivery_migration_id": string; "subscription_plan_id"?: string; "to_delivery_method_id": string; "total_count": string; "updated_at": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription_delivery_migration.completed" });
