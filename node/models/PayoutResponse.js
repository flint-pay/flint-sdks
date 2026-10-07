import { d798 as c0, d799 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2018 as c5, d2025 as c6, d2158 as c7, d2159 as c8, d14 as c9, d888 as c10, d1822 as c11, d2014 as c12, d2015 as c13, d2016 as c14, d2017 as c15, d41 as c16, d226 as c17 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2025 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec274"]:c10(),["SharedCodec488"]:c11(),["SharedCodec525"]:c12(),["SharedCodec526"]:c13(),["SharedCodec527"]:c14(),["SharedCodec528"]:c15(),["SharedCodec6"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
