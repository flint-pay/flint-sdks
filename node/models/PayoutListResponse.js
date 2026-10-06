import { d798 as c0, d799 as c1, d1819 as c2, d1820 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2017 as c7, d2023 as c8, d2158 as c9, d14 as c10, d888 as c11, d1821 as c12, d2013 as c13, d2014 as c14, d2015 as c15, d2016 as c16, d41 as c17, d226 as c18 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2023 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec274"]:c11(),["SharedCodec487"]:c12(),["SharedCodec524"]:c13(),["SharedCodec525"]:c14(),["SharedCodec526"]:c15(),["SharedCodec527"]:c16(),["SharedCodec6"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
