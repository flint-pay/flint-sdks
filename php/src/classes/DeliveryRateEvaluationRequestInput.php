<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city'?: string, 'country'?: string, 'latitude'?: int|float, 'line1'?: string, 'line2'?: string, 'longitude'?: int|float, 'postal_code'?: string, 'state'?: string}|object $buyer_location
 * @property-read list<DeliveryRateEvaluationCandidateInput|array<array-key, mixed>|\stdClass> $candidates
 * @property-read string|null $checkout_session_id
 * @property-read string $choice_group_fingerprint
 * @property-read string $currency
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_feasibility_plan_fingerprint
 * @property-read string|\DateTimeInterface $delivery_quote_expires_at
 * @property-read string $delivery_rate_callback_revision_id
 * @property-read string $delivery_rate_callback_signing_key_id
 * @property-read string $delivery_rate_evaluation_id
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}|object $destination
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $order_id
 * @property-read string $quote_creation_identity
 * @property-read bool $test
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationRequestInput extends Model {
    /** @param array{'buyer_location'?: array{'city'?: string, 'country'?: string, 'latitude'?: int|float, 'line1'?: string, 'line2'?: string, 'longitude'?: int|float, 'postal_code'?: string, 'state'?: string}|object, 'candidates': list<DeliveryRateEvaluationCandidateInput|array<array-key, mixed>|\stdClass>, 'checkout_session_id': string|null, 'choice_group_fingerprint': string, 'currency': string, 'delivery_choice_group_id': string, 'delivery_feasibility_plan_fingerprint': string, 'delivery_quote_expires_at': string|\DateTimeInterface, 'delivery_rate_callback_revision_id': string, 'delivery_rate_callback_signing_key_id': string, 'delivery_rate_evaluation_id': string, 'destination'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}|object, 'evaluated_at': string|\DateTimeInterface, 'order_id': string, 'quote_creation_identity': string, 'test'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationRequestInput')); }
    /** The buyer's location for local delivery, limited like destination. It adds latitude and longitude when a candidate lists buyer_location.coordinate. Omitted when no candidate lists a buyer_location field. city (Optional): string. City or locality. country (Optional): string. Two-letter ISO 3166-1 country code. latitude (Optional): number. Latitude in decimal degrees. line1 (Optional): string. First address line. line2 (Optional): string. Second address line. longitude (Optional): number. Longitude in decimal degrees. postal_code (Optional): string. Postal or ZIP code. state (Optional): string. State, province, or region code.
     * @return array{'city'?: string, 'country'?: string, 'latitude'?: int|float, 'line1'?: string, 'line2'?: string, 'longitude'?: int|float, 'postal_code'?: string, 'state'?: string}|object
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): array|object { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** The delivery methods to price, sorted by delivery_method_revision_id. Every candidate in a request has the same execution legs; methods that ship from different Locations get separate requests. [] (Value): {@see DeliveryRateEvaluationCandidateInput}. A delivery method revision to price in a delivery rate evaluation.
     * @return list<DeliveryRateEvaluationCandidateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When candidates is omitted; use hasCandidates() or valueOrDefault().
     */
    public function getCandidates(): array { return $this->get('candidates'); }
    public function hasCandidates(): bool { return $this->has('candidates'); }
    /** The checkout session being quoted. `null` when a delivery preview prices the methods, because a preview has no checkout session. A test delivery sends an ID that matches no checkout session. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string|null
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Opaque fingerprint of the choice group's items and quantities. Equal fingerprints mean the same contents.
     * @return string
     * @throws SdkError When choice_group_fingerprint is omitted; use hasChoiceGroupFingerprint() or valueOrDefault().
     */
    public function getChoiceGroupFingerprint(): string { return $this->get('choice_group_fingerprint'); }
    public function hasChoiceGroupFingerprint(): bool { return $this->has('choice_group_fingerprint'); }
    /** The checkout currency as an ISO 4217 code. Every amount in the response must use it. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** The choice group being priced: the line items that ship together under one delivery method. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** Opaque fingerprint of the plan Flint priced: its origins and the allocations each one ships. Equal fingerprints mean the same plan.
     * @return string
     * @throws SdkError When delivery_feasibility_plan_fingerprint is omitted; use hasDeliveryFeasibilityPlanFingerprint() or valueOrDefault().
     */
    public function getDeliveryFeasibilityPlanFingerprint(): string { return $this->get('delivery_feasibility_plan_fingerprint'); }
    public function hasDeliveryFeasibilityPlanFingerprint(): bool { return $this->has('delivery_feasibility_plan_fingerprint'); }
    /** When the quote expires, in RFC 3339 format truncated to whole seconds. Every expires_at in the response must be no later than this. It is up to 15 minutes after evaluated_at, or just under 5 minutes for a cart with tracked inventory. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When delivery_quote_expires_at is omitted; use hasDeliveryQuoteExpiresAt() or valueOrDefault().
     */
    public function getDeliveryQuoteExpiresAt(): string|\DateTimeInterface { return $this->get('delivery_quote_expires_at'); }
    public function hasDeliveryQuoteExpiresAt(): bool { return $this->has('delivery_quote_expires_at'); }
    /** The delivery rate callback revision whose configuration sent this request. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** ID of the current HMAC signing key when hmac signing is enabled, or an empty string for a JWT-only callback. It is the first ID in the Flint-Signing-Key-Ids header and is unrelated to the JWT header's kid. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Identifies this evaluation. A retry reuses it with the same body, and each new quote gets a new one. The webhook-id header carries the same value. Echo it in the response. Example: "dreval_01KEZF7C00X0Q3Z075W9W90ZGC".
     * @return string
     * @throws SdkError When delivery_rate_evaluation_id is omitted; use hasDeliveryRateEvaluationId() or valueOrDefault().
     */
    public function getDeliveryRateEvaluationId(): string { return $this->get('delivery_rate_evaluation_id'); }
    public function hasDeliveryRateEvaluationId(): bool { return $this->has('delivery_rate_evaluation_id'); }
    /** The delivery address, limited to the fields that a candidate method lists in quote_input_fields. Omitted when no candidate lists an address field. city (Optional): string. City or locality. country (Optional): string. Two-letter ISO 3166-1 country code. line1 (Optional): string. First address line. line2 (Optional): string. Second address line. postal_code (Optional): string. Postal or ZIP code. state (Optional): string. State, province, or region code.
     * @return array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}|object
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): array|object { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** The quote's evaluation time, in RFC 3339 format with up to nine fractional digits. Compute every time in the response from this value, not from your server's clock. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** The order whose items are being priced. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Opaque identity of the quote attempt this evaluation belongs to.
     * @return string
     * @throws SdkError When quote_creation_identity is omitted; use hasQuoteCreationIdentity() or valueOrDefault().
     */
    public function getQuoteCreationIdentity(): string { return $this->get('quote_creation_identity'); }
    public function hasQuoteCreationIdentity(): bool { return $this->has('quote_creation_identity'); }
    /** `true` on a test delivery sent by createDeliveryRateCallbackTestDelivery, whose IDs don't refer to stored checkout sessions or orders. Omitted on live requests.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
}
