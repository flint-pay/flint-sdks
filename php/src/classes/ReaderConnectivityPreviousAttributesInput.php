<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $last_seen_at
 * @property-read string|\DateTimeInterface|null $observed_at
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderConnectivityPreviousAttributesInput extends Model {
    /** @param array{'last_seen_at'?: string|\DateTimeInterface|null, 'observed_at'?: string|\DateTimeInterface|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderConnectivityPreviousAttributesInput')); }
    /** When the reader last reached Stripe. Omitted when it never has. anyOf[1] (Value): string. When the reader last reached Stripe. Omitted when it never has. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_seen_at is omitted; use hasLastSeenAt() or valueOrDefault().
     */
    public function getLastSeenAt(): mixed { return $this->get('last_seen_at'); }
    public function hasLastSeenAt(): bool { return $this->has('last_seen_at'); }
    /** When Flint observed this. anyOf[1] (Value): string. When Flint observed this. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): mixed { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online", "offline". anyOf[1] (Value): string. Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online", "offline". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
