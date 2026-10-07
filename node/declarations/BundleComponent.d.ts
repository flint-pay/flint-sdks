
import type { BundleComponentVariantSummary } from './BundleComponentVariantSummary.js';

export type BundleComponent = { "bundle_component_id": string; "current_delivery_profile_revision_id"?: string; "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {}); "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {}); "delivery_profile_id"?: string; /** Format: int32. */ "position": number; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "variant"?: BundleComponentVariantSummary; "variant_id": string; };
