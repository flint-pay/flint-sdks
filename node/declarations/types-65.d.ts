import type { PartnerWebhookEnvelope } from './types-37.js';
import type { Subscription } from './types-47.js';
import type { MerchantWebhookEnvelope } from './types-32.js';
import type { TaxConnection } from './types-50.js';
import type { InputValue, CredentialProvider, Model } from '../runtime.js';
import type { CreateWorkloadIdentityRequestInput } from './types-11.js';
import type { UpdateWorkloadIdentityRequestInput } from './types-53.js';
import type { ResourceReference, ResponseMeta } from './types-42.js';
import type {
    AddLineItemsRequestInput,
    AddOrderChargeRequestInput,
    AddReturnLineItemRequestInput,
    AddRiskListItemsRequestInput,
    AddressRequestInput,
    AdjustGiftCardBalanceRequestInput,
    ApplyDiscountRequestInput,
    ApplyDiscountRequestManualInput,
    ApplyDiscountRequestPromotionInput,
    ApplyOrderGiftCardRequestInput,
    AssessInvoiceLateFeeRequestInput,
    AssignToUnconfiguredDeliveryProfileRequestInput,
    BrandingSettingsRequestInput
} from './types-0.js';
import type {
    BuyerCapabilitiesInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput,
    BuyerInstructionsConfigRequestRequestInput
} from './types-1.js';
import type {
    BuyerPauseCapabilityInput,
    BuyerRetentionOfferInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemRequestInput
} from './types-2.js';
import type {
    BuyerSkipCapabilityInput,
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CancelGiftCardNotificationRequestInput,
    CancelOrderPaymentAttemptRequestInput,
    CancelPaymentIntentRequestInput,
    CancelPayoutRequestInput,
    CancelReturnDispositionRequestInput,
    CancelReturnLineItemRequestInput,
    CancelReturnRequestInput,
    CancelReturnResolutionRequestInput
} from './types-3.js';
/**
 * Shape $ (Value): {@link Webhook_subscription_renewal_upcoming_installed_merchants}. The
 * `subscription.renewal_upcoming` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_renewal_upcoming_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_subscription_renewal_upcoming_merchant}. The
 * `subscription.renewal_upcoming` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_subscription_renewal_upcoming_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_resumed_installed_merchants}. The
 * `subscription.resumed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_resumed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_subscription_resumed_merchant}. The `subscription.resumed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_resumed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_trial_ending_installed_merchants}. The
 * `subscription.trial_ending` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_trial_ending_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_subscription_trial_ending_merchant}. The
 * `subscription.trial_ending` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_subscription_trial_ending_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_updated_installed_merchants}. The
 * `subscription.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_subscription_updated_merchant}. The `subscription.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_tax_connection_updated_merchant}. The `tax_connection.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_tax_connection_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link TaxConnection}. The environment's
     * automatic sales tax connection. Before a record exists, identity, version and timestamps are
     * omitted. Read-time business-detail changes and provider pauses do not advance version or
     * send webhooks. Status_reason and supported_actions can also change with the clock as
     * registrations end, without a version change or webhook.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link TaxConnection}. The environment's automatic sales tax
         * connection. Before a record exists, identity, version and timestamps are omitted.
         * Read-time business-detail changes and provider pauses do not advance version or send
         * webhooks. Status_reason and supported_actions can also change with the clock as
         * registrations end, without a version change or webhook.
         */
        "object": TaxConnection;
    };
    /** Shape $ (Value): string.  Value enum: "tax_connection.updated". */
    "event_type"?: "tax_connection.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used in
 * delivery profile configuration.
 */
export type Weight = {
    /**
     * Shape $ (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Shape $ (Value): number. Weight measured in the specified unit. maximum: 1000000.
     * exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "value": number;
};
/**
 * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
 * used in delivery profile configuration.
 */
export type WeightInput = {
    /**
     * Shape $ (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Shape $ (Value): number. Weight measured in the specified unit. maximum: 1000000.
     * exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "value": number;
};
export type WorkloadIdentitiesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWorkloadIdentityRequestInput}. The request body for: Create a
     * workload identity.
     */
    "body": InputValue<CreateWorkloadIdentityRequestInput>;
};
export type WorkloadIdentitiesGetInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
};
export type WorkloadIdentitiesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "last_used_at",
     * "name".
     */
    "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type WorkloadIdentitiesRemoveInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type WorkloadIdentitiesUpdateInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateWorkloadIdentityRequestInput}. The request body for: Update a
     * workload identity.
     */
    "body": InputValue<UpdateWorkloadIdentityRequestInput>;
};
/**
 * Shape $ (Value): {@link WorkloadIdentity}. A policy that grants API access to a workload
 * authenticated by an external identity provider.
 */
export type WorkloadIdentity = {
    /**
     * Shape $ (Value): string. Time the identity was archived. Omitted before archival. Format:
     * date-time.
     */
    "archived_at"?: string;
    /** Shape $ (Value): string. */
    "audience": string;
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimCondition}. Bounded value array of
     * top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the
     * remaining policy is valid. Shape $[] (Value): {@link WorkloadIdentityClaimCondition}. A
     * condition matching one top-level scalar claim in the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    /** Shape $ (Value): string. Time the identity was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The user or credential that created a workload
     * identity, identified by resource type and ID.
     */
    "created_by": ResourceReference;
    /** Shape $ (Value): string. */
    "issuer": string;
    /**
     * Shape $ (Value): string. Most recent use. Omitted before the first use. Format: date-time.
     */
    "last_used_at"?: string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. Computed from the issuer. New platform values may be added. Value
     * enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure",
     * "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    /** Shape $ (Value): string. The sandbox containing this identity. Present only in test mode. */
    "sandbox_id"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set granted to this identity. Replaced as a
     * whole on PATCH. Shape $[] (Value): string.
     */
    "scopes": Array<string>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. */
    "subject": string;
    /** Shape $ (Value): string.  Value enum: "exact", "glob". */
    "subject_match": "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. Time the identity last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Positive concurrency version. Increases on policy and
     * lifecycle changes. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "workload_identity_id": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimCondition}. A condition matching one top-level
 * scalar claim in the workload's identity token.
 */
export type WorkloadIdentityClaimCondition = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match": "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. */
    "value": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimConditionRequest}. A condition to match one
 * top-level scalar claim in the workload's identity token. Omitted match defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequest = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved. minLength: 1.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match"?: "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimConditionRequestInput}. A condition to match one
 * top-level scalar claim in the workload's identity token. Omitted match defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequestInput = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved. minLength: 1.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match"?: "exact" | "glob";
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/** Shape $ (Value): {@link WorkloadIdentityListResponse}. A page of `WorkloadIdentity` objects. */
export type WorkloadIdentityListResponse = {
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentity}. Shape $[] (Value): {@link
     * WorkloadIdentity}. A policy that grants API access to a workload authenticated by an
     * external identity provider.
     */
    "data": Array<WorkloadIdentity>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityResponse}. A response containing `WorkloadIdentity`
 * data.
 */
export type WorkloadIdentityResponse = {
    /**
     * Shape $ (Value): {@link WorkloadIdentity}. A policy that grants API access to a workload
     * authenticated by an external identity provider.
     */
    "data": WorkloadIdentity;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type _SdkRequiredIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey: string;
} : never;
export type _SdkWithoutIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey?: never;
} : never;
export declare function defaultCredentials(): CredentialProvider;
export declare function makeAddLineItemsRequest(value: InputValue<AddLineItemsRequestInput>): Model<AddLineItemsRequestInput>;
export declare function makeAddOrderChargeRequest(value: InputValue<AddOrderChargeRequestInput>): Model<AddOrderChargeRequestInput>;
export declare function makeAddReturnLineItemRequest(value: InputValue<AddReturnLineItemRequestInput>): Model<AddReturnLineItemRequestInput>;
export declare function makeAddRiskListItemsRequest(value: InputValue<AddRiskListItemsRequestInput>): Model<AddRiskListItemsRequestInput>;
export declare function makeAddressRequest(value: InputValue<AddressRequestInput>): Model<AddressRequestInput>;
export declare function makeAdjustGiftCardBalanceRequest(value: InputValue<AdjustGiftCardBalanceRequestInput>): Model<AdjustGiftCardBalanceRequestInput>;
export declare function makeApplyDiscountRequest(value: InputValue<ApplyDiscountRequestInput>): Model<ApplyDiscountRequestInput>;
export declare function makeApplyDiscountRequestManual(value: InputValue<ApplyDiscountRequestManualInput>): Model<ApplyDiscountRequestManualInput>;
export declare function makeApplyDiscountRequestPromotion(value: InputValue<ApplyDiscountRequestPromotionInput>): Model<ApplyDiscountRequestPromotionInput>;
export declare function makeApplyOrderGiftCardRequest(value: InputValue<ApplyOrderGiftCardRequestInput>): Model<ApplyOrderGiftCardRequestInput>;
export declare function makeAssessInvoiceLateFeeRequest(value: InputValue<AssessInvoiceLateFeeRequestInput>): Model<AssessInvoiceLateFeeRequestInput>;
export declare function makeAssignToUnconfiguredDeliveryProfileRequest(value: InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>): Model<AssignToUnconfiguredDeliveryProfileRequestInput>;
export declare function makeBrandingSettingsRequest(value: InputValue<BrandingSettingsRequestInput>): Model<BrandingSettingsRequestInput>;
export declare function makeBuyerCapabilities(value: InputValue<BuyerCapabilitiesInput>): Model<BuyerCapabilitiesInput>;
export declare function makeBuyerCreateReturnPreviewRequest(value: InputValue<BuyerCreateReturnPreviewRequestInput>): Model<BuyerCreateReturnPreviewRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequestEligibility(value: InputValue<BuyerCreateReturnPreviewRequestEligibilityInput>): Model<BuyerCreateReturnPreviewRequestEligibilityInput>;
export declare function makeBuyerCreateReturnPreviewRequestResolution(value: InputValue<BuyerCreateReturnPreviewRequestResolutionInput>): Model<BuyerCreateReturnPreviewRequestResolutionInput>;
export declare function makeBuyerCreateReturnRequest(value: InputValue<BuyerCreateReturnRequestInput>): Model<BuyerCreateReturnRequestInput>;
export declare function makeBuyerCreateReturnResolutionPreviewRequest(value: InputValue<BuyerCreateReturnResolutionPreviewRequestInput>): Model<BuyerCreateReturnResolutionPreviewRequestInput>;
export declare function makeBuyerInstructionsConfigRequestRequest(value: InputValue<BuyerInstructionsConfigRequestRequestInput>): Model<BuyerInstructionsConfigRequestRequestInput>;
export declare function makeBuyerPauseCapability(value: InputValue<BuyerPauseCapabilityInput>): Model<BuyerPauseCapabilityInput>;
export declare function makeBuyerRetentionOffer(value: InputValue<BuyerRetentionOfferInput>): Model<BuyerRetentionOfferInput>;
export declare function makeBuyerReturnReplacementLineItemInputBundle(value: InputValue<BuyerReturnReplacementLineItemInputBundleInput>): Model<BuyerReturnReplacementLineItemInputBundleInput>;
export declare function makeBuyerReturnReplacementLineItemInputVariant(value: InputValue<BuyerReturnReplacementLineItemInputVariantInput>): Model<BuyerReturnReplacementLineItemInputVariantInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value: InputValue<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>): Model<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>;
export declare function makeCancelGiftCardNotificationRequest(value: InputValue<CancelGiftCardNotificationRequestInput>): Model<CancelGiftCardNotificationRequestInput>;
export declare function makeCancelOrderPaymentAttemptRequest(value: InputValue<CancelOrderPaymentAttemptRequestInput>): Model<CancelOrderPaymentAttemptRequestInput>;
export declare function makeCancelPaymentIntentRequest(value: InputValue<CancelPaymentIntentRequestInput>): Model<CancelPaymentIntentRequestInput>;
export declare function makeCancelPayoutRequest(value: InputValue<CancelPayoutRequestInput>): Model<CancelPayoutRequestInput>;
export declare function makeCancelReturnDispositionRequest(value: InputValue<CancelReturnDispositionRequestInput>): Model<CancelReturnDispositionRequestInput>;
export declare function makeCancelReturnLineItemRequest(value: InputValue<CancelReturnLineItemRequestInput>): Model<CancelReturnLineItemRequestInput>;
export declare function makeCancelReturnRequest(value: InputValue<CancelReturnRequestInput>): Model<CancelReturnRequestInput>;
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
