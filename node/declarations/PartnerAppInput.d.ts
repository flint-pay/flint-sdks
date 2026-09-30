
import type { PartnerAppPermissionManifestEntryInput } from './PartnerAppPermissionManifestEntryInput.js';

export type PartnerAppInput = { "allowed_scopes"?: never; "api_version": string; /** RFC3339 timestamp. Format: date-time. */ "api_version_changed_at"?: never; "api_version_previous"?: never; "app_type": string; "client_id"?: never; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; "default_requested_permissions": Array<string>; "name": string; "partner_app_id"?: never; "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>; "redirect_uris": Array<string>; "status"?: never; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; "visibility": string; };
