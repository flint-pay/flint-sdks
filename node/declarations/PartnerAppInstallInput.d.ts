
import type { PartnerEnvironmentGrantInput } from './PartnerEnvironmentGrantInput.js';

export type PartnerAppInstallInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "environment_grants"?: Array<PartnerEnvironmentGrantInput>; "granted_scopes": Array<string>; "installed_by_user_id"?: string; "merchant_id": string; "partner_app_install_id": string; /** RFC3339 timestamp. Format: date-time. */ "revoked_at"?: string | globalThis.Date; "revoked_by_user_id"?: string; "status": "pending_exchange" | "pending_consent" | "pending_onboarding" | "active" | "pending_permission_upgrade" | "flagged_for_review" | "revoked" | "errored"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
