
import type { PartnerEnvironmentGrant } from './PartnerEnvironmentGrant.js';

export type PartnerAppInstall = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "environment_grants"?: Array<PartnerEnvironmentGrant>; "granted_scopes": Array<string>; "installed_by_user_id"?: string; "merchant_id": string; "partner_app_install_id": string; /** RFC3339 timestamp. Format: date-time. */ "revoked_at"?: string; "revoked_by_user_id"?: string; "status": "pending_exchange" | "pending_consent" | "pending_onboarding" | "active" | "pending_permission_upgrade" | "flagged_for_review" | "revoked" | "errored" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
