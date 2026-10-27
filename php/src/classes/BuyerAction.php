<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerCancelActionOptions $cancel
 * @property-read ?string $due_at
 * @property-read bool $is_available
 * @property-read bool $is_required
 * @property-read string $kind
 * @property-read ?BuyerPauseActionOptions $pause
 * @property-read ?BuyerPayBalanceActionOptions $pay_balance
 * @property-read ?string $unavailable_reason
 * Presence-aware response; omitted optional fields return null. */
final class BuyerAction extends Model {
    /** @param array{'cancel'?: mixed, 'due_at'?: string, 'is_available': bool, 'is_required': bool, 'kind': string, 'pause'?: mixed, 'pay_balance'?: mixed, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerAction')); }
    /** Shape $ (Value): {@see BuyerCancelActionOptions}. Present only on an available cancel action. The cancellation choices this subscription accepts from its buyer.
     * @return ?BuyerCancelActionOptions
     */
    public function getCancel(): ?BuyerCancelActionOptions { return $this->get('cancel'); }
    public function hasCancel(): bool { return $this->has('cancel'); }
    /** Shape $ (Value): string. When the buyer needs to act by. Omitted when the action has no deadline, or when the resource's state or the store's policy doesn't allow it. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): boolean. Whether this session can take the action now.
     * @return bool
     */
    public function getIsAvailable(): bool { return $this->get('is_available'); }
    public function hasIsAvailable(): bool { return $this->has('is_available'); }
    /** Shape $ (Value): boolean. Whether the store needs the buyer to take the action, such as paying a due invoice. It stays true when the only thing in the way is signing in.
     * @return bool
     */
    public function getIsRequired(): bool { return $this->get('is_required'); }
    public function hasIsRequired(): bool { return $this->has('is_required'); }
    /** Shape $ (Value): string. What the action is. Each resource lists its own kinds in a fixed order. New kinds may be added; ignore kinds you don't recognize. Value enum: "start_return", "resend_receipt", "cancel", "pause", "resume", "reactivate", "update_payment_method", "pay", "withdraw", "ship_items", "pay_balance", "retry_payment", "update_delivery", "skip", "update_billing_interval", "update_quantity", "swap_items", "renew".
     * @return string
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Shape $ (Value): {@see BuyerPauseActionOptions}. Present only on an available pause action. The pause lengths this subscription accepts from its buyer.
     * @return ?BuyerPauseActionOptions
     */
    public function getPause(): ?BuyerPauseActionOptions { return $this->get('pause'); }
    public function hasPause(): bool { return $this->has('pause'); }
    /** Shape $ (Value): {@see BuyerPayBalanceActionOptions}. Present only on an available pay_balance action. The return resolutions the buyer can pay now.
     * @return ?BuyerPayBalanceActionOptions
     */
    public function getPayBalance(): ?BuyerPayBalanceActionOptions { return $this->get('pay_balance'); }
    public function hasPayBalance(): bool { return $this->has('pay_balance'); }
    /** Shape $ (Value): string. Why the action can't be taken now. Present exactly when is_available is false. New reasons may be added; show a general message for a reason you don't recognize. Value enum: "sign_in_required", "store_policy", "not_in_state", "window_closed", "nothing_to_return", "collection_unavailable", "limit_reached".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
