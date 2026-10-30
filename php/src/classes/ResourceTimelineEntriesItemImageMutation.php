<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $entry_type
 * @property-read int $image_version
 * @property-read string $mutation_kind
 * @property-read string $occurred_at
 * @property-read ?string $request_id
 * @property-read string $resource_timeline_entry_id
 * Presence-aware response; omitted optional fields return null. */
final class ResourceTimelineEntriesItemImageMutation extends Model {
    /** @param array{'entry_type': string, 'image_version': int, 'mutation_kind': string, 'occurred_at': string, 'request_id'?: string, 'resource_timeline_entry_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineEntriesItemImageMutation')); }
    /** Value enum: "image_mutation".
     * @return string
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** Version of the resource's image attachments after this change. Format: int64.
     * @return int
     */
    public function getImageVersion(): int { return $this->get('image_version'); }
    public function hasImageVersion(): bool { return $this->has('image_version'); }
    /** The change made to the resource's images. Value enum: "replaced".
     * @return string
     */
    public function getMutationKind(): string { return $this->get('mutation_kind'); }
    public function hasMutationKind(): bool { return $this->has('mutation_kind'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** resource_timeline_entry_id
     * @return string
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
}
