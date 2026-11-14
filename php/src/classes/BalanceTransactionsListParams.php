<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $payout_id
 * @property-read string $order_id
 * @property-read list<string>|string $expand
 * @property-read list<string>|string $type
 * @property-read list<string>|string $related_resource_type
 * @property-read string $related_resource_id
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string|\DateTimeInterface $available_after
 * @property-read string|\DateTimeInterface $available_before
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionsListParams extends Model {
    /** @param array{'currency'?: string, 'payout_id'?: string, 'order_id'?: string, 'expand'?: list<string>|string, 'type'?: list<string>|string, 'related_resource_type'?: list<string>|string, 'related_resource_id'?: string, 'status'?: list<string>|string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'available_after'?: string|\DateTimeInterface, 'available_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionsListParams')); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Lists the balance transactions this payout carried, newest first. Their `net_money` sums to the payout's `amount_money`. Works in any payout status once the payout's contents are prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason: not_itemized` for a payout that doesn't list its contents, such as a manual payout. pattern: ^po_[0-9A-HJKMNP-TV-Z]{26}$. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Exact-match filter on `order_id`. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Include related objects in the response. Supported expansions: order. Each expansion resolves with one batched lookup per page. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Optional balance transaction type filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". anyOf[1][] (Value): string.  Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". anyOf[2] (Value): string.  Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Filter by related_resource.resource_type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split". Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split". anyOf[1][] (Value): string.  Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split". anyOf[2] (Value): string.  Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split".
     * @return list<string>|string
     * @throws SdkError When related_resource_type is omitted; use hasRelatedResourceType() or valueOrDefault().
     */
    public function getRelatedResourceType(): mixed { return $this->get('related_resource_type'); }
    public function hasRelatedResourceType(): bool { return $this->has('related_resource_type'); }
    /** Filter by related_resource.resource_id. pattern: ^((ad|afri|ba|bag|bal|bam|baoa|basa|bav|bepevt|betr|bses|btxn|bue|bun|bunc|bup|busrc|caddr|cagr|capsnap|catid|ccaevt|ccop|cdel|cdom|cecr|ch|clg|clla|cn|cna|cnart|cnlease|cnli|cnmut|cof|cpoc|cpop|cs|cscv|cses|cslimr|csrt|ctex|ctg|cus|cver|dca|dcb|dcbr|dcgrp|ddiag|defc|deff|demo|dev|dleg|dls|dlsr|dmet|dmetr|dms|dmsevt|dmslink|dmsopen|dopt|dp|dprof|dprofr|dqt|drate|drev|dreval|dsel|dsle|dti|du|dzone|dzoner|edat|edel|egrt|fbc|fbr|fev|file|fnt|frw|fsu|ful|fw|fwad|fwcmd|fwcon|fwpm|fwss|gc|gcg|gcl|gcn|gcpra|gcr|gct|gfd|hat|hce|hcr|hev|hin|hlk|hnt|hrp|hsl|hsr|hth|hwm|iacr|iaevt|iksevt|iksop|img|indel|inevt|inlf|inv|inv_cmd|invadj|invapp|invart|invc|invcln|invi|invl|invlease|invli|invm|invp|invpa|invpay|invpv|invr|invrea|invrec|invrecln|invrln|invse|invt|invtr|invtrln|iomevt|ipt|ivat|key|li|loc|mac|mace|mbbal|mbclaim|mbe|mbin|mbout|mca|mcdchg|mcdsub|mcfr|mcr|mcra|mcrecon|mcrve|menv|mer|mfa|mfce|mg|mod|mpafc|mpagr|mpfa|mpfc|mre|mrecv|mrp|ms|msa|msg|msinv|msinvl|mso|msu|mtac|ntc|ntf|oacr|oact|oalk|och|ocra|oed|olim|olimas|olra|omp|opahold|opaleg|opaobs|opaop|opard|oparp|opasd|opasgen|opasm|opasp|opat|opaum|opcred|opra|oprhold|opsa|opt|optv|ord|ordisp|org|orp|orr|otpial|otra|ovst|pac|pacr|pact|paog|papp|pasg|pat|patok|pava|pavc|pcae|pcal|pcb|pcfg|pchkr|pcode|pcri|pcrr|pcsch|pdest|peat|pendact|pfbal|pfbt|pfee|pfhi|pfhold|pfi|pfinc|pfloss|pflrec|pfpo|pfr|pfrb|pfrf|pfs|phold|pi|pia|pilm|pinst|piop|pipf|pkg|pki|pl|plan|plcf|ple|plli|plog|pm|pmcr|pmdom|po|poe|polog|ppac|ppd|pppa|pppr|ppta|pra|pref|prl|prlp|prod|promo|prrc|prt|prtn|psact|pses|pset|psetop|psinc|psplit|psrev|psu|pvimg|pvlaunch|pvscn|pvses|pvshare|pvw|ra|rbuy|rcs|rdl|rdr|rdrcfg|rdrpres|recon|ref|rep|ret|retact|retadj|retcmd|retdsp|retfx|retinli|retins|retli|retrc|retrcli|retrepli|retres|retresli|retshli|rev|rl|rli|rlia|rliar|rlima|rlog|rpoe|rpol|rpolv|rprev|rra|rrq|rrsn|rta|rtba|rule|sdmig|sdts|sdtu|set|sfba|sfpd|shp|sli|smf|soffer|spc|spcc|spli|spol|sppd|spr|ssu|sub|tac|tcae|tcb|tcbr|tce|tclk|tcn|test|tip|tkt|trg|txb|usr|var|watt|wdel|whcl|whep|whev|whout|whrc|wid|ws)_[0-9A-HJKMNP-TV-Z]{26}|fwa_[A-Z2-7]+|fwc_[A-Z2-7]+|fwin_[0-9a-f]+|req_([0-9a-f]+|caller_supplied_rate|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When related_resource_id is omitted; use hasRelatedResourceId() or valueOrDefault().
     */
    public function getRelatedResourceId(): string { return $this->get('related_resource_id'); }
    public function hasRelatedResourceId(): bool { return $this->has('related_resource_id'); }
    /** Optional balance transaction status filter. Without it, the list returns transactions in every status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "available". Value enum: "pending", "available". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "available". anyOf[1][] (Value): string.  Value enum: "pending", "available". anyOf[2] (Value): string.  Value enum: "pending", "available".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
    /** Inclusive lower bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_after is omitted; use hasAvailableAfter() or valueOrDefault().
     */
    public function getAvailableAfter(): string|\DateTimeInterface { return $this->get('available_after'); }
    public function hasAvailableAfter(): bool { return $this->has('available_after'); }
    /** Exclusive upper bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_before is omitted; use hasAvailableBefore() or valueOrDefault().
     */
    public function getAvailableBefore(): string|\DateTimeInterface { return $this->get('available_before'); }
    public function hasAvailableBefore(): bool { return $this->has('available_before'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
