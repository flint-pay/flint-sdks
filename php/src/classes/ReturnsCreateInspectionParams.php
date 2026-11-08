<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $correction_reason
 * @property-read string $correction_reason_message
 * @property-read string $external_actor_id
 * @property-read string $external_reference_id
 * @property-read string|\DateTimeInterface $inspected_at
 * @property-read string $inspection_location_id
 * @property-read list<ReturnInspectionLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $return_receipt_id
 * @property-read ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass $source_system
 * @property-read string $supersedes_return_inspection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateInspectionParams extends Model {
    /** @param array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string|\DateTimeInterface, 'inspection_location_id': string, 'line_items': list<ReturnInspectionLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'return_receipt_id': string, 'source_system'?: ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass, 'supersedes_return_inspection_id'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateInspectionParams')); }
    /** Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other".
     * @return string
     * @throws SdkError When correction_reason is omitted; use hasCorrectionReason() or valueOrDefault().
     */
    public function getCorrectionReason(): string { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** Detail about `correction_reason`. minLength: 1.
     * @return string
     * @throws SdkError When correction_reason_message is omitted; use hasCorrectionReasonMessage() or valueOrDefault().
     */
    public function getCorrectionReasonMessage(): string { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When inspected_at is omitted; use hasInspectedAt() or valueOrDefault().
     */
    public function getInspectedAt(): string|\DateTimeInterface { return $this->get('inspected_at'); }
    public function hasInspectedAt(): bool { return $this->has('inspected_at'); }
    /** Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When inspection_location_id is omitted; use hasInspectionLocationId() or valueOrDefault().
     */
    public function getInspectionLocationId(): string { return $this->get('inspection_location_id'); }
    public function hasInspectionLocationId(): bool { return $this->has('inspection_location_id'); }
    /** The lines recorded. minItems: 1. [] (Value): {@see ReturnInspectionLineItemRequestInput}. The inspection result for one received return line: acceptance status, condition, and findings.
     * @return list<ReturnInspectionLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the receipt being inspected. minLength: 1. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier.
     * @return ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** ID of the inspection this one corrects. minLength: 1. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * @return string
     * @throws SdkError When supersedes_return_inspection_id is omitted; use hasSupersedesReturnInspectionId() or valueOrDefault().
     */
    public function getSupersedesReturnInspectionId(): string { return $this->get('supersedes_return_inspection_id'); }
    public function hasSupersedesReturnInspectionId(): bool { return $this->has('supersedes_return_inspection_id'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
