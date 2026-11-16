<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $authorized_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $capturable_money
 * @property-read string|\DateTimeInterface|null $expires_at
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderAuthorizationAmountsPreviousAttributesInput extends Model {
    /** @param array{'authorized_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'capturable_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'expires_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderAuthorizationAmountsPreviousAttributesInput')); }
    /** The amount authorized on the order's payments. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When authorized_money is omitted; use hasAuthorizedMoney() or valueOrDefault().
     */
    public function getAuthorizedMoney(): mixed { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** The part of the authorized amount that can still be captured. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): mixed { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. anyOf[1] (Value): string. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
}
