<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $last_seen_at
 * @property-read string $observed_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class ReaderConnectivity extends Model {
    /** @param array{'last_seen_at'?: string|null, 'observed_at': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectivity')); }
    /** When the reader last reached Stripe. Omitted when it never has. Format: date-time.
     * @return string|null
     */
    public function getLastSeenAt(): string|null { return $this->get('last_seen_at'); }
    public function hasLastSeenAt(): bool { return $this->has('last_seen_at'); }
    /** When Flint observed this. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online", "offline".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
