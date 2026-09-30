


export type PartnerInstallEventPayloadInput = { "granted_scopes": Array<string>; "installed_by_user_id"?: string; "merchant_id": string; "partner_app_id": string; "partner_app_install_id": string; "revoked_by_user_id"?: string; "status": "pending_exchange" | "pending_consent" | "pending_onboarding" | "active" | "pending_permission_upgrade" | "flagged_for_review" | "revoked" | "errored"; };
