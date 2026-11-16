<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $brand
 * @property-read int|null $exp_month
 * @property-read int|null $exp_year
 * @property-read string|null $last4
 * @property-read string|null $wallet
 * Presence-aware response; omitted optional fields return null. */
final class CardDetailsPreviousAttributes extends Model {
    /** @param array{'brand'?: mixed, 'exp_month'?: mixed, 'exp_year'?: mixed, 'last4'?: mixed, 'wallet'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CardDetailsPreviousAttributes')); }
    /** The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBrand(): string|null { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Month the card expires, from 1 to 12. anyOf[1] (Value): integer. Month the card expires, from 1 to 12. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpMonth(): int|null { return $this->get('exp_month'); }
    public function hasExpMonth(): bool { return $this->has('exp_month'); }
    /** Four-digit year the card expires. anyOf[1] (Value): integer. Four-digit year the card expires. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpYear(): int|null { return $this->get('exp_year'); }
    public function hasExpYear(): bool { return $this->has('exp_year'); }
    /** Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay", "google_pay". anyOf[1] (Value): string. The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay", "google_pay". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWallet(): string|null { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
