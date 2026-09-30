import { d152 as c0, d82 as c1, d41 as c2, d704 as c3, d69 as c4, d1802 as c5, d1803 as c6, d1804 as c7, d1806 as c8, d1843 as c9, d1915 as c10, d1917 as c11, d1920 as c12, d1922 as c13, d1925 as c14, d1927 as c15, d1930 as c16, d2109 as c17, d2116 as c18, d83 as c19, d705 as c20, d91 as c21, d1914 as c22, d1924 as c23, d37 as c24, d1666 as c25 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1915 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1915;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PaymentRefund"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["Refund"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundLineItemAdjustment"]:c12(),["RefundLineItemAdjustmentRefund"]:c13(),["RefundLineItemAllocation"]:c14(),["RefundLineItemModifierAllocation"]:c15(),["RefundTaxBreakdownRefund"]:c16(),["SelectedProductOption"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec21"]:c19(),["SharedCodec219"]:c20(),["SharedCodec26"]:c21(),["SharedCodec479"]:c22(),["SharedCodec480"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
