import { d134 as c0, d169 as c1, d87 as c2, d42 as c3, d132 as c4, d74 as c5, d1952 as c6, d1953 as c7, d1954 as c8, d1956 as c9, d1993 as c10, d2067 as c11, d2070 as c12, d2072 as c13, d2074 as c14, d2077 as c15, d2079 as c16, d2082 as c17, d2084 as c18, d2272 as c19, d2280 as c20, d88 as c21, d753 as c22, d96 as c23, d133 as c24, d38 as c25, d2076 as c26, d1804 as c27 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d134 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemModifierAllocation"]:c16(),["RefundTaxBreakdownRefund"]:c17(),["RefundTenderAllocation"]:c18(),["SelectedProductOption"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec21"]:c21(),["SharedCodec240"]:c22(),["SharedCodec26"]:c23(),["SharedCodec42"]:c24(),["SharedCodec5"]:c25(),["SharedCodec526"]:c26(),["SignedMoney"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
