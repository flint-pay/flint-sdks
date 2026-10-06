
import type { PartnerAppPermissionManifestEntry } from './PartnerAppPermissionManifestEntry.js';

export type PartnerAppWithSecret = { "allowed_scopes": Array<string>; "api_version": string; /** RFC3339 timestamp. Format: date-time. */ "api_version_changed_at"?: string; "api_version_previous"?: string; "app_type": "server" | "plugin" | (string & {}); "client_id": string; "client_secret": string; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "default_requested_permissions": Array<string>; "name": string; "partner_app_id": string; "permission_manifest": Array<PartnerAppPermissionManifestEntry>; "redirect_uris": Array<string>; "status": "active" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "visibility": string; };
