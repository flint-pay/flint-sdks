<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $last_seen_at
 * @property-read string|null $observed_at
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class ReaderConnectivityPreviousAttributes extends Model {
    /** @param array{'last_seen_at'?: mixed, 'observed_at'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectivityPreviousAttributes')); }
    /** When the reader last reached Stripe. Omitted when it never has. anyOf[1] (Value): string. When the reader last reached Stripe. Omitted when it never has. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLastSeenAt(): string|null { return $this->get('last_seen_at'); }
    public function hasLastSeenAt(): bool { return $this->has('last_seen_at'); }
    /** When Flint observed this. anyOf[1] (Value): string. When Flint observed this. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online", "offline". anyOf[1] (Value): string. Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online", "offline". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
