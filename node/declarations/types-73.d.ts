import type { InputValue, Model, WebhookHeaders as _SdkWebhookHeaders } from '../runtime.js';
import type {
    UpdateSettingsRequestInput,
    UpdateShipmentRequestInput,
    UpdateSubscriptionBillingScheduleRequestInput,
    UpdateSubscriptionBillingScheduleRequestExternalInput,
    UpdateSubscriptionBillingScheduleRequestFlintInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionOfferRequestInput,
    UpdateSubscriptionPlanLineItemRequestInput,
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionRequestInput,
    UpdateWebhookEndpointRequestInput,
    UpdateWorkloadIdentityRequestInput,
    VerifyReturnReceiptLineItemRequestInput,
    VoidPackageRequestInput,
    VoidShipmentRequestInput,
    WaiveInvoiceLateFeeRequestInput,
    WaiveReturnLineInspectionRequestInput,
    VerifiedWebhook
} from './types-49.js';
import type { WeightInput, WorkloadIdentityClaimConditionRequestInput } from './types-61.js';
export declare function makeUpdateSettingsRequest(value: InputValue<UpdateSettingsRequestInput>): Model<UpdateSettingsRequestInput>;
export declare function makeUpdateShipmentRequest(value: InputValue<UpdateShipmentRequestInput>): Model<UpdateShipmentRequestInput>;
export declare function makeUpdateSubscriptionBillingScheduleRequest(value: InputValue<Exclude<UpdateSubscriptionBillingScheduleRequestInput & object, readonly unknown[]>>): Model<Exclude<UpdateSubscriptionBillingScheduleRequestInput & object, readonly unknown[]>>;
export declare function makeUpdateSubscriptionBillingScheduleRequest(value: InputValue<UpdateSubscriptionBillingScheduleRequestInput>): Model<UpdateSubscriptionBillingScheduleRequestInput>;
export declare function makeUpdateSubscriptionBillingScheduleRequestExternal(value: InputValue<UpdateSubscriptionBillingScheduleRequestExternalInput>): Model<UpdateSubscriptionBillingScheduleRequestExternalInput>;
export declare function makeUpdateSubscriptionBillingScheduleRequestFlint(value: InputValue<UpdateSubscriptionBillingScheduleRequestFlintInput>): Model<UpdateSubscriptionBillingScheduleRequestFlintInput>;
export declare function makeUpdateSubscriptionLineItemRequest(value: InputValue<UpdateSubscriptionLineItemRequestInput>): Model<UpdateSubscriptionLineItemRequestInput>;
export declare function makeUpdateSubscriptionOfferRequest(value: InputValue<UpdateSubscriptionOfferRequestInput>): Model<UpdateSubscriptionOfferRequestInput>;
export declare function makeUpdateSubscriptionPlanLineItemRequest(value: InputValue<UpdateSubscriptionPlanLineItemRequestInput>): Model<UpdateSubscriptionPlanLineItemRequestInput>;
export declare function makeUpdateSubscriptionPlanRequest(value: InputValue<UpdateSubscriptionPlanRequestInput>): Model<UpdateSubscriptionPlanRequestInput>;
export declare function makeUpdateSubscriptionRequest(value: InputValue<UpdateSubscriptionRequestInput>): Model<UpdateSubscriptionRequestInput>;
export declare function makeUpdateWebhookEndpointRequest(value: InputValue<UpdateWebhookEndpointRequestInput>): Model<UpdateWebhookEndpointRequestInput>;
export declare function makeUpdateWorkloadIdentityRequest(value: InputValue<UpdateWorkloadIdentityRequestInput>): Model<UpdateWorkloadIdentityRequestInput>;
export declare function makeVerifyReturnReceiptLineItemRequest(value: InputValue<VerifyReturnReceiptLineItemRequestInput>): Model<VerifyReturnReceiptLineItemRequestInput>;
export declare function makeVoidPackageRequest(value: InputValue<VoidPackageRequestInput>): Model<VoidPackageRequestInput>;
export declare function makeVoidShipmentRequest(value: InputValue<VoidShipmentRequestInput>): Model<VoidShipmentRequestInput>;
export declare function makeWaiveInvoiceLateFeeRequest(value: InputValue<WaiveInvoiceLateFeeRequestInput>): Model<WaiveInvoiceLateFeeRequestInput>;
export declare function makeWaiveReturnLineInspectionRequest(value: InputValue<WaiveReturnLineInspectionRequestInput>): Model<WaiveReturnLineInspectionRequestInput>;
export declare function makeWeight(value: InputValue<WeightInput>): Model<WeightInput>;
export declare function makeWorkloadIdentityClaimConditionRequest(value: InputValue<WorkloadIdentityClaimConditionRequestInput>): Model<WorkloadIdentityClaimConditionRequestInput>;
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
