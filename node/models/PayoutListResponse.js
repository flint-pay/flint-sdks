import { d798 as c0, d799 as c1, d1820 as c2, d1821 as c3, d77 as c4, d1824 as c5, d1823 as c6, d2018 as c7, d2024 as c8, d2159 as c9, d14 as c10, d888 as c11, d1822 as c12, d2014 as c13, d2015 as c14, d2016 as c15, d2017 as c16, d41 as c17, d226 as c18 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2024 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2024;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec274"]:c11(),["SharedCodec488"]:c12(),["SharedCodec525"]:c13(),["SharedCodec526"]:c14(),["SharedCodec527"]:c15(),["SharedCodec528"]:c16(),["SharedCodec6"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
