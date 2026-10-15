
import type { KnownWebhookEvent } from './KnownWebhookEvent.js';

export type VerifiedWebhook = { known: true; event: KnownWebhookEvent } | { known: false; event: unknown; reason: "unknown_event" | "unmatched_envelope" };
