
import type { PartnerInstallEventPayload } from './PartnerInstallEventPayload.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventPartnerAppInstallPermissionsUpdated = (({ "data"?: PartnerInstallEventPayload; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "partner_app.install.permissions_updated" });
