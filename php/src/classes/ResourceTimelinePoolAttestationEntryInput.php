<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $actor_id
 * @property-read string $actor_type
 * @property-read string $entry_type
 * @property-read int $key_quantity
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $request_id
 * @property-read string $resource_timeline_entry_id
 * @property-read string $statement_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelinePoolAttestationEntryInput extends Model {
    /** @param array{'actor_id': string, 'actor_type': string, 'entry_type': string, 'key_quantity': int, 'occurred_at': string|\DateTimeInterface, 'request_id': string, 'resource_timeline_entry_id': string, 'statement_version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelinePoolAttestationEntryInput')); }
    /** ID of the credential or user that confirmed authorization. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** Type of credential or user that confirmed authorization. Example: "user".
     * @return string
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** Always license_key_pool_attestation for this kind of entry. Value enum: "license_key_pool_attestation".
     * @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** Number of submitted keys in the batch, including keys already present. As with all key counts, fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When key_quantity is omitted; use hasKeyQuantity() or valueOrDefault().
     */
    public function getKeyQuantity(): int { return $this->get('key_quantity'); }
    public function hasKeyQuantity(): bool { return $this->has('key_quantity'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** ID of the upload request. Records created before server-minted request IDs keep their original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** ID of the seller authorization entry. Example: "lkpa_01KEZF7C00GD0ZHTK6ZA4BHC0M".
     * @return string
     * @throws SdkError When resource_timeline_entry_id is omitted; use hasResourceTimelineEntryId() or valueOrDefault().
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
    /** Version of the authorization statement the caller confirmed.
     * @return string
     * @throws SdkError When statement_version is omitted; use hasStatementVersion() or valueOrDefault().
     */
    public function getStatementVersion(): string { return $this->get('statement_version'); }
    public function hasStatementVersion(): bool { return $this->has('statement_version'); }
}
