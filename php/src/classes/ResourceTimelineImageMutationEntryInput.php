<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $entry_type
 * @property-read int $image_version
 * @property-read string $mutation_kind
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $request_id
 * @property-read string $resource_timeline_entry_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineImageMutationEntryInput extends Model {
    /** @param array{'entry_type': string, 'image_version': int, 'mutation_kind': string, 'occurred_at': string|\DateTimeInterface, 'request_id'?: string, 'resource_timeline_entry_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineImageMutationEntryInput')); }
    /** Value enum: "image_mutation".
     * @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** Version of the resource's image attachments after this change. Format: int64.
     * @return int
     * @throws SdkError When image_version is omitted; use hasImageVersion() or valueOrDefault().
     */
    public function getImageVersion(): int { return $this->get('image_version'); }
    public function hasImageVersion(): bool { return $this->has('image_version'); }
    /** The change made to the resource's images. Value enum: "replaced".
     * @return string
     * @throws SdkError When mutation_kind is omitted; use hasMutationKind() or valueOrDefault().
     */
    public function getMutationKind(): string { return $this->get('mutation_kind'); }
    public function hasMutationKind(): bool { return $this->has('mutation_kind'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Records created before server-minted request IDs keep their original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** resource_timeline_entry_id
     * @return string
     * @throws SdkError When resource_timeline_entry_id is omitted; use hasResourceTimelineEntryId() or valueOrDefault().
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
}
