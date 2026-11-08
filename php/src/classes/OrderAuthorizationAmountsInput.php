<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $authorized_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $capturable_money
 * @property-read string|\DateTimeInterface $expires_at
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderAuthorizationAmountsInput extends Model {
    /** @param array{'authorized_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capturable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderAuthorizationAmountsInput')); }
    /** The amount authorized on the order's payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When authorized_money is omitted; use hasAuthorizedMoney() or valueOrDefault().
     */
    public function getAuthorizedMoney(): mixed { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** The part of the authorized amount that can still be captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): mixed { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
}
