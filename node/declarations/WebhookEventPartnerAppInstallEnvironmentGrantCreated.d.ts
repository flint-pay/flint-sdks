
import type { PartnerEnvironmentGrantEventPayload } from './PartnerEnvironmentGrantEventPayload.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventPartnerAppInstallEnvironmentGrantCreated = (({ "data"?: PartnerEnvironmentGrantEventPayload; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "partner_app.install.environment_grant.created" });
