import { d64 as c0, d176 as c1, d116 as c2, d77 as c3, d1872 as c4, d1873 as c5, d2312 as c6, d63 as c7, d1976 as c8, d1975 as c9, d2348 as c10, d2349 as c11, d2350 as c12, d2351 as c13, d2380 as c14 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d116 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d116;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["ExpandedSubscriptionPlanSummary"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SharedCodec608"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SubscriptionPlanLineItem"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
