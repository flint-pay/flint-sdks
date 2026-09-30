


export type PartnerEnvironmentGrantEventPayloadInput = { "environment_grant_id": string; "environment_id"?: string; "granted_scopes": Array<string>; "merchant_id": string; "mode": "test" | "live"; "partner_app_id": string; "partner_app_install_id": string; "revoked_by_user_id"?: string; "status": "pending_exchange" | "active" | "revoked"; };
