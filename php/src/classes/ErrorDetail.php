<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_key_modes
 * @property-read ?array<array-key, SignedMoney> $available_by_source_type
 * @property-read ?int $available_quantity
 * @property-read ?int $blocking_resource_count
 * @property-read ?list<ErrorResourceReference> $blocking_resources
 * @property-read ?string $capability
 * @property-read ?int $captured_physical_version
 * @property-read ?string $closed_reason
 * @property-read string $code
 * @property-read ?string $conflict_type
 * @property-read ?list<string> $conflicting_fields
 * @property-read ?string $current_api_version
 * @property-read string|null $current_delivery_selection_id
 * @property-read ?string $current_disclosure_version
 * @property-read ?string $current_interval
 * @property-read ?MoneyValue $current_money
 * @property-read ?int $current_physical_version
 * @property-read mixed $current_resource
 * @property-read ?string $current_selection_id
 * @property-read ?int $current_source_observation_sequence
 * @property-read ?string $current_status
 * @property-read ?int $current_version
 * @property-read ?string $delivery_method_id
 * @property-read ?string $demand_key
 * @property-read ?string $eligibility_reason
 * @property-read ?MoneyValue $expected_attempt_outstanding_money
 * @property-read ?string $failure_category
 * @property-read ?string $failure_code
 * @property-read ?string $inactive_message
 * @property-read ?string $inventory_count_line_id
 * @property-read ?string $inventory_item_id
 * @property-read ?int $limit
 * @property-read ?string $location_id
 * @property-read ?string $location_outcome
 * @property-read ?string $maximum_frozen_at
 * @property-read ?MoneyValue $maximum_money
 * @property-read string $message
 * @property-read ?MoneyValue $minimum_money
 * @property-read ?int $minimum_quantity
 * @property-read ?list<string> $missing_scopes
 * @property-read ?string $param
 * @property-read ?string $payment_option
 * @property-read ?string $payout_terms_expires_at
 * @property-read ?string $previous_key_expires_at
 * @property-read ?QuotaDetails $quota
 * @property-read ?string $reason
 * @property-read ?ErrorRemediation $remediation
 * @property-read ?int $requested_quantity
 * @property-read ?MoneyValue $requoted_shipping_money
 * @property-read ?MoneyValue $requoted_tax_money
 * @property-read ?string $resource_id
 * @property-read ?string $resource_type
 * @property-read ?string $scope
 * @property-read ?ScopeRequirement $scope_requirement
 * @property-read ?list<SelectableErrorResource> $selectable_resources
 * @property-read ?MoneyValue $shipping_money
 * @property-read ?int $shortage_quantity
 * @property-read ?MoneyValue $submitted_money
 * @property-read ?int $submitted_source_observation_sequence
 * @property-read ?list<string> $suggestions
 * @property-read ?list<string> $supported_actions
 * @property-read ?list<string> $supported_api_versions
 * @property-read ?MoneyValue $tax_money
 * @property-read ?string $unavailable_reason
 * Presence-aware response; omitted optional fields return null. */
final class ErrorDetail extends Model {
    /** @param array{'allowed_key_modes'?: list<string>, 'available_by_source_type'?: \stdClass, 'available_quantity'?: int, 'blocking_resource_count'?: int, 'blocking_resources'?: list<mixed>, 'capability'?: string, 'captured_physical_version'?: int, 'closed_reason'?: string, 'code': string, 'conflict_type'?: string, 'conflicting_fields'?: list<string>, 'current_api_version'?: string, 'current_delivery_selection_id'?: string|null, 'current_disclosure_version'?: string, 'current_interval'?: string, 'current_money'?: mixed, 'current_physical_version'?: int, 'current_resource'?: mixed, 'current_selection_id'?: string, 'current_source_observation_sequence'?: int, 'current_status'?: string, 'current_version'?: int, 'delivery_method_id'?: string, 'demand_key'?: string, 'eligibility_reason'?: string, 'expected_attempt_outstanding_money'?: mixed, 'failure_category'?: string, 'failure_code'?: string, 'inactive_message'?: string, 'inventory_count_line_id'?: string, 'inventory_item_id'?: string, 'limit'?: int, 'location_id'?: string, 'location_outcome'?: string, 'maximum_frozen_at'?: string, 'maximum_money'?: mixed, 'message': string, 'minimum_money'?: mixed, 'minimum_quantity'?: int, 'missing_scopes'?: list<string>, 'param'?: string, 'payment_option'?: string, 'payout_terms_expires_at'?: string, 'previous_key_expires_at'?: string, 'quota'?: mixed, 'reason'?: string, 'remediation'?: mixed, 'requested_quantity'?: int, 'requoted_shipping_money'?: mixed, 'requoted_tax_money'?: mixed, 'resource_id'?: string, 'resource_type'?: string, 'scope'?: string, 'scope_requirement'?: mixed, 'selectable_resources'?: list<mixed>, 'shipping_money'?: mixed, 'shortage_quantity'?: int, 'submitted_money'?: mixed, 'submitted_source_observation_sequence'?: int, 'suggestions'?: list<string>, 'supported_actions'?: list<string>, 'supported_api_versions'?: list<string>, 'tax_money'?: mixed, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorDetail')); }
    /** API key modes in which this scope may be granted. [] enum: "live", "test". [] (Value): string.  Value enum: "live", "test".
     * @return ?list<string>
     */
    public function getAllowedKeyModes(): ?array { return $this->get('allowed_key_modes'); }
    public function hasAllowedKeyModes(): bool { return $this->has('allowed_key_modes'); }
    /** Signed available amounts grouped by balance source type on INSUFFICIENT_AVAILABLE_BALANCE. Keys are an open set; US accounts use card and bank_account. An empty object means no per-source amounts are reported. * (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, SignedMoney>
     */
    public function getAvailableBySourceType(): ?array { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** Whole-number quantity currently available for the requested operation; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getAvailableQuantity(): ?int { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Total number of blocking resources when a dependency refusal publishes a count. blocking_resources lists up to 25 of them. Invoice ownership conflicts use current_resource instead. Format: int64.
     * @return ?int
     */
    public function getBlockingResourceCount(): ?int { return $this->get('blocking_resource_count'); }
    public function hasBlockingResourceCount(): bool { return $this->has('blocking_resource_count'); }
    /** Resources that must transition or be corrected before the operation can succeed. Dependency conflicts list up to 25 resources, with blocking_resource_count as the total when present. OPERATION_IN_PROGRESS identifies work Flint is finishing, and PAYMENT_ATTEMPT_ACTIVE identifies the active attempt. Buyer credentials do not receive merchant-only blocking resources. On ACTION_NOT_ALLOWED with reason in_progress, a subscription payment retry is included when the buyer can read it. Manual payment conflicts identify their owning invoices. [] (Value): {@see ErrorResourceReference}. A reference to a public resource named in an error, with its type, ID, and current status when available.
     * @return ?list<ErrorResourceReference>
     */
    public function getBlockingResources(): ?array { return $this->get('blocking_resources'); }
    public function hasBlockingResources(): bool { return $this->has('blocking_resources'); }
    /** Flint capability associated with this error, when applicable. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings", "create_instant_payouts".
     * @return ?string
     */
    public function getCapability(): ?string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Physical basis submitted with the observation, or saved on the count line when apply refuses it. Read the current level and physically recount this item before replacing the basis. Format: int64. minimum: 0.
     * @return ?int
     */
    public function getCapturedPhysicalVersion(): ?int { return $this->get('captured_physical_version'); }
    public function hasCapturedPhysicalVersion(): bool { return $this->has('captured_physical_version'); }
    /** How the inventory reservation ended. Present for INVENTORY_RESERVATION_CLOSED. Value enum: "consumed", "released", "expired", "reallocated", "mixed".
     * @return ?string
     */
    public function getClosedReason(): ?string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Stable Flint error code for this item. Under INVALID_REQUEST, one of REQUIRED, INVALID_VALUE, UNKNOWN_FIELD, NOT_ALLOWED. Every value is listed in the operation's x-flint-error-codes. Value enum: "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED", "CONCURRENT_MODIFICATION", "DELIVERY_REQUOTE_REQUIRED", "EXTERNAL_SERVICE_ERROR", "FORBIDDEN", "GIFT_CARD_CHALLENGE_REQUIRED", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE", "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVALID_VALUE", "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED", "LIMIT_REACHED", "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED", "NOT_ALLOWED", "OPERATION_IN_PROGRESS", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE", "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED", "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT", "REQUIRED", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND", "SERVICE_UNAVAILABLE", "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences. Value enum: "physical_version", "source_observation_sequence".
     * @return ?string
     */
    public function getConflictType(): ?string { return $this->get('conflict_type'); }
    public function hasConflictType(): bool { return $this->has('conflict_type'); }
    /** Request field paths that conflict with each other or with the rest of the request. Sent on INVALID_REQUEST with detail NOT_ALLOWED for conflicting payment inputs, and with detail INVALID_VALUE when entries in one product create repeat an option name, identifier, or selected option combination. [] (Value): string.
     * @return ?list<string>
     */
    public function getConflictingFields(): ?array { return $this->get('conflicting_fields'); }
    public function hasConflictingFields(): bool { return $this->has('conflicting_fields'); }
    /** Current API version pin on VERSION_CONFLICT when expected_api_version is stale.
     * @return ?string
     */
    public function getCurrentApiVersion(): ?string { return $this->get('current_api_version'); }
    public function hasCurrentApiVersion(): bool { return $this->has('current_api_version'); }
    /** Current effective delivery selection ID on VERSION_CONFLICT when expected_delivery_selection_id is stale. Present as null when no delivery selection is current.
     * @return string|null
     */
    public function getCurrentDeliverySelectionId(): string|null { return $this->get('current_delivery_selection_id'); }
    public function hasCurrentDeliverySelectionId(): bool { return $this->has('current_delivery_selection_id'); }
    /** Current disclosure version. Show the seller the current disclosure from GET /v1/tax-connection and get their agreement before sending its version.
     * @return ?string
     */
    public function getCurrentDisclosureVersion(): ?string { return $this->get('current_disclosure_version'); }
    public function hasCurrentDisclosureVersion(): bool { return $this->has('current_disclosure_version'); }
    /** Current payout schedule interval on STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE. Change the payout schedule to manual before creating a standard payout. Value enum: "daily", "weekly", "monthly".
     * @return ?string
     */
    public function getCurrentInterval(): ?string { return $this->get('current_interval'); }
    public function hasCurrentInterval(): bool { return $this->has('current_interval'); }
    /** Current money amount counted toward the threshold, when the error is threshold-based. On VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason already_applied after a capture amount mismatch, the amount already captured. On an order total floor refusal, the resulting order total. Retained errors keep their captured values. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCurrentMoney(): ?MoneyValue { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** Current physical version of the inventory level. This is a physical-value assertion, not the resource version in current_version. Format: int64. minimum: 0.
     * @return ?int
     */
    public function getCurrentPhysicalVersion(): ?int { return $this->get('current_physical_version'); }
    public function hasCurrentPhysicalVersion(): bool { return $this->has('current_physical_version'); }
    /** The existing resource reference or custom domain on ALREADY_EXISTS. On VERSION_CONFLICT when replace_checkout_session_id is stale, the current checkout session reference. On ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot change, the existing checkout session reference. Also the current fulfillment, shipment, or package when a conditional write conflicts with resource state. oneOf[1] (Value): object and {@see ErrorResourceReference}. A reference to a public resource named in an error, with its type, ID, and current status when available. oneOf[1].resource_id (Required): string. Public Flint ID of the referenced resource. oneOf[1].resource_type (Required): string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. oneOf[1].status (Optional): string. Current public status of the referenced resource when available. oneOf[2] (Value): object and {@see Fulfillment}. Work required to deliver an order's items. oneOf[2].active_hold (Optional): {@see FulfillmentHold}. Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. oneOf[2].charges (Optional): Array of {@see FulfillmentChargeLink}. Order charges associated with this fulfillment. oneOf[2].charges[] (Value): {@see FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`. oneOf[2].completed_at (Optional): string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: date-time. oneOf[2].created_at (Optional): string. When the fulfillment was created, in RFC3339 format. Format: date-time. oneOf[2].customer_id (Optional): string. Customer receiving this fulfillment, when one is set. oneOf[2].delivery_choice_group_id (Required): string or null. Delivery choice group that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. oneOf[2].delivery_execution_leg_id (Required): string or null. Execution leg of the selected delivery option that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. oneOf[2].delivery_method_id (Required): string or null. Delivery method chosen for this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. Also null for fulfillments created before this field was added. oneOf[2].delivery_selection_id (Required): string or null. Delivery selection that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. oneOf[2].device_id (Optional): string. Device associated with the fulfillment, when one is recorded. oneOf[2].digital_details (Optional): {@see DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. oneOf[2].dispatched_at (Optional): string. First time this fulfillment reached dispatched. Format: date-time. oneOf[2].external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. oneOf[2].fulfillment_id (Required): string. Stable identifier of the fulfillment. oneOf[2].line_items (Required): Array of {@see FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment. oneOf[2].line_items[] (Value): {@see FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the modifiers applied to it. oneOf[2].local_delivery_details (Optional): {@see DeliveryFulfillmentDetails}. Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. oneOf[2].location_id (Optional): string. Merchant location responsible for this fulfillment. oneOf[2].metadata (Optional): {@see MetadataMap}. Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. oneOf[2].order (Optional): {@see ExpandedOrderSummary} or null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. oneOf[2].order.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. oneOf[2].order.anyOf[2] (Value): null. oneOf[2].order_id (Required): string. Order whose items this fulfillment delivers. oneOf[2].order_number (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. oneOf[2].outcome (Optional): {@see FulfillmentOutcome}. Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. oneOf[2].packages (Optional): Array of {@see ExpandedPackageSummary}. Packages associated with this fulfillment. oneOf[2].packages[] (Value): {@see ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded. oneOf[2].packed_at (Optional): string. First time this fulfillment reached packed. Format: date-time. oneOf[2].picked_at (Optional): string. First time this fulfillment reached picked. Format: date-time. oneOf[2].pickup_details (Optional): {@see PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. oneOf[2].recipient (Optional): {@see FulfillmentRecipient}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. oneOf[2].scheduled_start_at (Required): string or null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: date-time. oneOf[2].service_details (Optional): {@see ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. oneOf[2].shipment_details (Optional): {@see ShipmentFulfillmentDetails}. Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. oneOf[2].shipments (Optional): Array of {@see ExpandedShipmentSummary}. Shipments associated with this fulfillment. oneOf[2].shipments[] (Value): {@see ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded. oneOf[2].status (Required): string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". oneOf[2].supported_actions (Required): Array of string. Read-only actions currently supported for this fulfillment. [] enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". oneOf[2].supported_actions[] (Value): string.  Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". oneOf[2].terminal_at (Optional): string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: date-time. oneOf[2].type (Required): string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service". oneOf[2].updated_at (Optional): string. When the fulfillment was last updated, in RFC3339 format. Format: date-time. oneOf[2].version (Required): integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. oneOf[3] (Value): object and {@see Shipment}. A shipment carrying fulfilled order items. oneOf[3].created_at (Optional): string. Creation timestamp. Format: date-time. oneOf[3].delivered_at (Optional): string. When the shipment was delivered, in RFC3339 format. Format: date-time. oneOf[3].direction (Required): string. Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return". oneOf[3].external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. oneOf[3].external_system (Optional): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. oneOf[3].fulfillment_id (Required): string. Fulfillment associated with this shipment. oneOf[3].handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time. oneOf[3].metadata (Optional): {@see MetadataMap}. Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. oneOf[3].order (Optional): {@see ExpandedOrderSummary} or null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. oneOf[3].order.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. oneOf[3].order.anyOf[2] (Value): null. oneOf[3].order_id (Required): string. Order whose items are transported by the shipment. oneOf[3].package_count (Required): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0. oneOf[3].packages (Optional): Array of {@see ExpandedPackageSummary}. Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. oneOf[3].packages[] (Value): {@see ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded. oneOf[3].return_id (Optional): string. Return associated with this shipment, when its direction is return. oneOf[3].return_line_items (Optional): Array of {@see ReturnShipmentLineItemAllocation}. Return lines and quantities allocated to this return shipment. oneOf[3].return_line_items[] (Value): {@see ReturnShipmentLineItemAllocation}. A return line and the quantity placed in a return shipment or package. oneOf[3].shipment_id (Required): string. Stable identifier of the shipment. oneOf[3].shipped_at (Optional): string. When the shipment was shipped, in RFC3339 format. Format: date-time. oneOf[3].status (Required): string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". oneOf[3].updated_at (Optional): string. Last update timestamp. Format: date-time. oneOf[3].version (Required): integer. Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. oneOf[4] (Value): object and {@see Package}. A package within a shipment. oneOf[4].carrier (Optional): string. Carrier transporting the package. oneOf[4].created_at (Optional): string. Creation timestamp. Format: date-time. oneOf[4].delivered_at (Optional): string. Package delivery timestamp. Format: date-time. oneOf[4].dimensions (Optional): {@see Dimensions}. Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. oneOf[4].expected_delivery_at (Optional): string or null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time. oneOf[4].external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. oneOf[4].external_system (Optional): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. oneOf[4].fulfillment_id (Required): string. Fulfillment whose items are in the package. oneOf[4].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. oneOf[4].metadata (Optional): {@see MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. oneOf[4].order (Optional): {@see ExpandedOrderSummary} or null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. oneOf[4].order.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. oneOf[4].order.anyOf[2] (Value): null. oneOf[4].order_id (Required): string. Order whose items are in the package. oneOf[4].package_id (Required): string. Stable identifier of the package. oneOf[4].return_id (Optional): string. Return this package belongs to. Present only on packages of return shipments. oneOf[4].return_line_items (Optional): Array of {@see ReturnShipmentLineItemAllocation}. Return line quantities allocated to this parcel. Present only on packages of return shipments. oneOf[4].return_line_items[] (Value): {@see ReturnShipmentLineItemAllocation}. A return line and the quantity placed in a return shipment or package. oneOf[4].service_code (Optional): string. Carrier service used for the package. oneOf[4].shipment_id (Required): string. Shipment carrying this package. oneOf[4].shipped_at (Optional): string. Package handoff timestamp. Format: date-time. oneOf[4].status (Required): string. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". oneOf[4].status_reason (Optional): string. Additional explanation of the package's current status. oneOf[4].supported_actions (Required): Array of string. Read-only actions currently supported for this package. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". oneOf[4].supported_actions[] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". oneOf[4].tracking_number (Optional): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. oneOf[4].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. oneOf[4].updated_at (Optional): string. Last update timestamp. Format: date-time. oneOf[4].version (Required): integer. Monotonic package version for expected_version checks. Format: uint64. minimum: 1. oneOf[4].weight (Optional): {@see Weight}. Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. oneOf[5] (Value): object and {@see CustomDomain}. A merchant hostname for hosted checkout or customer account pages. oneOf[5].active_payment_attempt_count (Required): integer or null. Payment attempts in progress on this checkout hostname; null for customer account domains. Format: int64. oneOf[5].created_at (Required): string. When this domain resource was created, in RFC3339 format. Format: date-time. oneOf[5].custom_domain_id (Required): string. Flint custom domain ID. oneOf[5].dns_records (Required): Array of {@see CustomDomainDNSRecord}. DNS records to add for setup or verification. For an archived hostname, records that can be deleted. oneOf[5].dns_records[] (Value): {@see CustomDomainDNSRecord}. A DNS record for configuring or verifying a custom hostname. oneOf[5].hostname (Required): string. Configured hostname, normalized to lowercase without a trailing dot. oneOf[5].last_checked_at (Required): string or null. When the domain was last checked, in RFC3339 format; null when no check time is available. Format: date-time. oneOf[5].payment_method_domain_id (Required): string or null. Payment method domain associated with this hostname, or null when none is reported. oneOf[5].redirect_expires_at (Required): string or null. End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. Format: date-time. oneOf[5].status (Required): string. Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived". oneOf[5].status_reason (Required): string or null. Machine-readable detail for the current status, or null when no reason is reported. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null. oneOf[5].type (Required): string. Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account". oneOf[5].updated_at (Required): string. When this domain resource was last updated, in RFC3339 format. Format: date-time.
     * @return mixed
     */
    public function getCurrentResource(): mixed { return $this->get('current_resource'); }
    public function hasCurrentResource(): bool { return $this->has('current_resource'); }
    /** Current effective delivery selection ID returned with a selection concurrency conflict.
     * @return ?string
     */
    public function getCurrentSelectionId(): ?string { return $this->get('current_selection_id'); }
    public function hasCurrentSelectionId(): bool { return $this->has('current_selection_id'); }
    /** Latest accepted absolute source sequence for this item and Location. Format: uint64. minimum: 0.
     * @return ?int
     */
    public function getCurrentSourceObservationSequence(): ?int { return $this->get('current_source_observation_sequence'); }
    public function hasCurrentSourceObservationSequence(): bool { return $this->has('current_source_observation_sequence'); }
    /** Current lifecycle status of the resource when the requested mutation is not allowed.
     * @return ?string
     */
    public function getCurrentStatus(): ?string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** Current version of the resource when a write that depends on its version or status is rejected. Sent on VERSION_CONFLICT and on status conflicts such as ACTION_NOT_ALLOWED. On VERSION_CONFLICT, send the order version as expected_version. Read the resource again before you retry. Format: uint64. minimum: 0.
     * @return ?int
     */
    public function getCurrentVersion(): ?int { return $this->get('current_version'); }
    public function hasCurrentVersion(): bool { return $this->has('current_version'); }
    /** Delivery method this failure concerns. On SUBSCRIPTION_DELIVERY_UNAVAILABLE, the method that cannot currently serve the subscription.
     * @return ?string
     */
    public function getDeliveryMethodId(): ?string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on INVENTORY_INSUFFICIENT with reason location_ineligible when one demand cannot use the Location.
     * @return ?string
     */
    public function getDemandKey(): ?string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** On INVENTORY_INSUFFICIENT with reason location_ineligible, why the Location in location_id cannot supply the demand. Value enum: "location_not_active", "inventory_allocation_inactive", "forced_location_mismatch", "fulfillment_incompatible", "split_prohibited", "insufficient_quantity".
     * @return ?string
     */
    public function getEligibilityReason(): ?string { return $this->get('eligibility_reason'); }
    public function hasEligibilityReason(): bool { return $this->has('eligibility_reason'); }
    /** On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getExpectedAttemptOutstandingMoney(): ?MoneyValue { return $this->get('expected_attempt_outstanding_money'); }
    public function hasExpectedAttemptOutstandingMoney(): bool { return $this->has('expected_attempt_outstanding_money'); }
    /** Delivery pricing failure category on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the rate cannot be calculated. Value enum: "dependency_failure", "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open", "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input", "address_verification_failed", "address_could_not_be_verified".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Decline reason for a failed payment, from the same vocabulary as the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Merchant-provided buyer-facing text on PAYMENT_LINK_INACTIVE. Present only when the merchant set an inactive message.
     * @return ?string
     */
    public function getInactiveMessage(): ?string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences.
     * @return ?string
     */
    public function getInventoryCountLineId(): ?string { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** Inventory item this failure concerns. Sent on INVENTORY_INSUFFICIENT and on VERSION_CONFLICT for physical observations or stale source observation sequences.
     * @return ?string
     */
    public function getInventoryItemId(): ?string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** The limit that was reached. On LIMIT_REACHED with reason enabled_risk_rules, the most active risk rules in the environment. On LIMIT_REACHED with reason partner_app_credentials, the most active credentials a partner app can hold. On LIMIT_REACHED with reason payment_intents_per_order, the most payment intents an order can have over its lifetime. On LIMIT_REACHED with reason payment_retries_per_period, the most payment retries a subscription allows in one billing period. On LIMIT_REACHED with reason test_clock_subscriptions, the most subscriptions that aren't canceled one test clock can hold. Format: int64.
     * @return ?int
     */
    public function getLimit(): ?int { return $this->get('limit'); }
    public function hasLimit(): bool { return $this->has('limit'); }
    /** Location this failure concerns. Sent on INVENTORY_INSUFFICIENT with reason location_ineligible; VERSION_CONFLICT for physical observations or stale source observation sequences; PICKUP_LOCATION_INACTIVE; PICKUP_LOCATION_INVENTORY_UNAVAILABLE; PICKUP_LOCATION_GEOGRAPHY_UNAVAILABLE; and PICKUP_LOCATION_DEPENDENCY_FAILURE.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** On INVENTORY_INSUFFICIENT with reason location_ineligible, the routing outcome for the Location in location_id: for the demand in demand_key when present, otherwise for every demand. Value enum: "ineligible".
     * @return ?string
     */
    public function getLocationOutcome(): ?string { return $this->get('location_outcome'); }
    public function hasLocationOutcome(): bool { return $this->has('location_outcome'); }
    /** RFC 3339 timestamp in UTC of the latest time this advance can reach. Sent on ACTION_NOT_ALLOWED with reason advance_limit_exceeded. Format: date-time.
     * @return ?string
     */
    public function getMaximumFrozenAt(): ?string { return $this->get('maximum_frozen_at'); }
    public function hasMaximumFrozenAt(): bool { return $this->has('maximum_frozen_at'); }
    /** Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getMaximumMoney(): ?MoneyValue { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** Human-readable explanation of this failure for your logs. The wording can change, so branch on code.
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Smallest money amount the input at param may contain in the resource's current state. On an order total floor refusal without param, the minimum resulting order total, including any unpaid tip. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getMinimumMoney(): ?MoneyValue { return $this->get('minimum_money'); }
    public function hasMinimumMoney(): bool { return $this->has('minimum_money'); }
    /** Minimum accepted whole-number quantity for the input at param, based on stored state; fractional quantities are not supported. Sent on LIMIT_EXCEEDED. Format: int64.
     * @return ?int
     */
    public function getMinimumQuantity(): ?int { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Unsatisfied entries from scope_requirement after write-implies-read evaluation. [] (Value): string.
     * @return ?list<string>
     */
    public function getMissingScopes(): ?array { return $this->get('missing_scopes'); }
    public function hasMissingScopes(): bool { return $this->has('missing_scopes'); }
    /** Public JSON request field path associated with this failure. Present on INVALID_REQUEST details except a combined email-change code comparison failure when both codes were required. Uses body for a whole-body failure, or the header name for a header.
     * @return ?string
     */
    public function getParam(): ?string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Flint payment option associated with this error, when the error is about a specific requested or selected payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?string
     */
    public function getPaymentOption(): ?string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** RFC 3339 timestamp in UTC when the new account payout terms end on NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE. Sent at second precision. Choose an allowed schedule or delay, or make the change after this time. Format: date-time.
     * @return ?string
     */
    public function getPayoutTermsExpiresAt(): ?string { return $this->get('payout_terms_expires_at'); }
    public function hasPayoutTermsExpiresAt(): bool { return $this->has('payout_terms_expires_at'); }
    /** RFC 3339 timestamp when the previous signing key expires on DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE. Retry after this time, or revoke the current key before rotating if it leaked. Format: date-time.
     * @return ?string
     */
    public function getPreviousKeyExpiresAt(): ?string { return $this->get('previous_key_expires_at'); }
    public function hasPreviousKeyExpiresAt(): bool { return $this->has('previous_key_expires_at'); }
    /** Structured resource quota state when the error is caused by quota exhaustion. Storage usage and limits for a resource, returned in the error details when an image quota is exhausted.
     * @return ?QuotaDetails
     */
    public function getQuota(): ?QuotaDetails { return $this->get('quota'); }
    public function hasQuota(): bool { return $this->has('quota'); }
    /** Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of: advance_limit_exceeded, already_applied, archived, authorization_expired, bank_return_not_contestable, cancellation_scheduled, configuration_required, credit_exceeds_charge, credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold, delivery_requirement_changes, derived_from_packages, destination_not_served, disclosure_changed, dispute_payment_unavailable, existing_order_checkout, external_billing_schedule, field_locked, frozen_at_not_later, image_ingestion_restart_required, in_progress, initial_payment_pending, inventory_wait, invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts, merchant_managed_receipts, method_unavailable, mixed_tax_treatment, not_itemized, not_offered, not_paused, offer_subscription, on_hold, order_owned, payload_expired, payment_collected, payment_disputed, payment_required, payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable, quantity_not_carried, reconciliation_required, refund_created, refund_unavailable, return_checkout, return_tax_mismatch, secret_not_issued, status_not_reached, store_credit_unavailable, subscription_terms_locked, terminal_status, test_event, trial_in_progress, unsupported_state, verification_required. When code is ALREADY_EXISTS, one of: hardware_fingerprint_already_exists. When code is CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed, credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required, destination_changed, option_expired, quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: outcome_unknown, rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted, checkout_recovery_attempt_mismatch, checkout_recovery_restricted, checkout_session_order_mismatch, checkout_session_payment_required, demo_session_route_not_allowed, direct_owner_required, environment_mismatch, expansion_not_permitted, full_access_required, live_mode_required, merchant_access_required, merchant_credential_required, merchant_role_insufficient, not_checkout_session, not_permitted, oauth_context_mismatch, organization_membership_required, organization_role_insufficient, owner_workflow_required, request_blocked, role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden, self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of: page_origin_required, proof_rejected, proof_required. When code is INTERNAL_ERROR, one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily, merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations, consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations, partner_app_credentials, payment_intents_per_order, payment_link_completions, payment_retries_per_period, receipt_recipients, saved_card_codes, test_clock_subscriptions, verification_attempts, verification_codes, workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested, capability_pending, capability_unavailable, default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, onboarding_required, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, pricing_not_authorized, processing_not_enabled, processing_restricted, processor_not_configured, requirements_due, tax_category_required, under_review. When code is OPERATION_IN_PROGRESS, one of: delivery_selection_materializing. When code is PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range, capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due. When code is PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code is SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required. Additional reasons may be added. Value enum: "account_sessions_unavailable", "account_setup_repair_required", "account_setup_unavailable", "action_window_too_short", "advance_limit_exceeded", "already_applied", "amount_out_of_range", "archived", "authorization_expired", "automatic_disabled", "bank_return_not_contestable", "billing_suspended", "buy_item_missing", "buyer_daily", "calculation_expired", "caller_rates_required", "cancellation_scheduled", "capability_blocked", "capability_not_requested", "capability_pending", "capability_unavailable", "card_balance", "card_daily", "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch", "checkout_recovery_restricted", "checkout_session_order_mismatch", "checkout_session_payment_required", "checkout_tax_calculations", "code_invalid", "code_required", "codes_disabled", "configuration_required", "consecutive_skips", "credit_exceeds_charge", "credit_note_creditable_value_changed", "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required", "currency_mismatch", "customer_account_mode_conflict", "daily_gift_card_purchases", "default_environment_required", "delivery_hold", "delivery_requirement_changes", "delivery_selection_materializing", "delivery_selection_replacements", "demo_session_route_not_allowed", "derived_from_packages", "destination_changed", "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings", "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable", "enabled_risk_rules", "environment_mismatch", "exhausted", "existing_order_checkout", "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders", "field_locked", "frozen_at_not_later", "full_access_required", "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage", "in_progress", "inactive", "initial_payment_pending", "inventory_wait", "invoice_finalized", "live_mode_required", "location_ineligible", "location_limit", "malformed", "managed_by_owner", "managed_externally", "max_promotions_reached", "merchant_access_required", "merchant_account_action_required", "merchant_adjustments_daily", "merchant_credential_required", "merchant_hosted_customer_accounts", "merchant_imports_daily", "merchant_managed_receipts", "merchant_payments_disabled", "merchant_role_insufficient", "method_unavailable", "minimum_not_met", "mixed_tax_treatment", "mode_mismatch", "monthly_tax_calculations", "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible", "not_itemized", "not_offered", "not_paused", "not_permitted", "not_yet_started", "oauth_context_mismatch", "offer_subscription", "on_hold", "onboarding_required", "option_expired", "order_owned", "organization_membership_required", "organization_role_insufficient", "outcome_unknown", "owner_workflow_required", "page_origin_required", "partner_app_credentials", "payload_expired", "payment_account_context_invalid", "payment_account_setup_incomplete", "payment_collected", "payment_disputed", "payment_intents_per_order", "payment_link_completions", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_available", "payment_option_not_in_plan", "payment_required", "payment_retries_per_period", "payout_defaults_managed_externally", "payout_delay", "payout_frequency", "period_end_unavailable", "platform_funding_unavailable", "pricing_not_authorized", "processing_not_enabled", "processing_restricted", "processor_not_configured", "processor_unavailable", "proof_rejected", "proof_required", "quantity_not_carried", "quote_expired", "quote_revoked", "quote_stale", "rate_unavailable", "receipt_recipients", "reconciliation_required", "refund_created", "refund_unavailable", "repair_required", "request_blocked", "requirements_due", "return_checkout", "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable", "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes", "secret_not_issued", "selected_by_active_variants", "selection_changed", "selection_expired", "self_role_edit_forbidden", "session_ended", "status_not_reached", "store_credit_unavailable", "subscription_terms_locked", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "tax_category_required", "terminal_status", "test_clock_subscriptions", "test_event", "test_mode_required", "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown", "unknown_type", "unsupported_state", "verification_attempts", "verification_codes", "verification_required", "window_expired", "workload_identities", "wrong_credential_type".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Recovery guidance for this failure: whether retrying can succeed and what to do next. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions.
     * @return ?ErrorRemediation
     */
    public function getRemediation(): ?ErrorRemediation { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts with current capacity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getRequestedQuantity(): ?int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRequotedShippingMoney(): ?MoneyValue { return $this->get('requoted_shipping_money'); }
    public function hasRequotedShippingMoney(): bool { return $this->has('requoted_shipping_money'); }
    /** Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRequotedTaxMoney(): ?MoneyValue { return $this->get('requoted_tax_money'); }
    public function hasRequotedTaxMoney(): bool { return $this->has('requoted_tax_money'); }
    /** ID of the referenced public resource, when available.
     * @return ?string
     */
    public function getResourceId(): ?string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or resource when the resource has no public type.
     * @return ?string
     */
    public function getResourceType(): ?string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Canonical public scope rejected by validation, when the detail concerns one scope.
     * @return ?string
     */
    public function getScope(): ?string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details.
     * @return ?ScopeRequirement
     */
    public function getScopeRequirement(): ?ScopeRequirement { return $this->get('scope_requirement'); }
    public function hasScopeRequirement(): bool { return $this->has('scope_requirement'); }
    /** Resources offered for the field named by param under INVALID_REQUEST. Submit one of their resource_id values. [] (Value): {@see SelectableErrorResource}. A resource the caller can select for a request field.
     * @return ?list<SelectableErrorResource>
     */
    public function getSelectableResources(): ?array { return $this->get('selectable_resources'); }
    public function hasSelectableResources(): bool { return $this->has('selectable_resources'); }
    /** Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getShippingMoney(): ?MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getShortageQuantity(): ?int { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** Amount from your request that failed the check. On ACTION_NOT_ALLOWED with reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSubmittedMoney(): ?MoneyValue { return $this->get('submitted_money'); }
    public function hasSubmittedMoney(): bool { return $this->has('submitted_money'); }
    /** Absolute source sequence submitted for this inventory count line. Format: uint64. minimum: 0.
     * @return ?int
     */
    public function getSubmittedSourceObservationSequence(): ?int { return $this->get('submitted_source_observation_sequence'); }
    public function hasSubmittedSourceObservationSequence(): bool { return $this->has('submitted_source_observation_sequence'); }
    /** Concrete corrective actions for this validation error. [] (Value): string.
     * @return ?list<string>
     */
    public function getSuggestions(): ?array { return $this->get('suggestions'); }
    public function hasSuggestions(): bool { return $this->has('suggestions'); }
    /** Actions accepted for the current resource state. [] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedActions(): ?array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions you can use now. [] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedApiVersions(): ?array { return $this->get('supported_api_versions'); }
    public function hasSupportedApiVersions(): bool { return $this->has('supported_api_versions'); }
    /** Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getTaxMoney(): ?MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Delivery eligibility reason on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the selected method is unavailable. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
