import { d1820 as c0, d1821 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2019 as c5, d2020 as c6, d2159 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2020 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2020;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementHistoryMeta"]:c0(),["MoneyMovementListMeta"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PayoutDestination"]:c5(),["PayoutDestinationListResponse"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec488"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutDestinationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
