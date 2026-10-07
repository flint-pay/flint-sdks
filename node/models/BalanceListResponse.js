import { d42 as c0, d43 as c1, d1820 as c2, d1821 as c3, d77 as c4, d1824 as c5, d1823 as c6, d2159 as c7, d14 as c8, d1822 as c9, d40 as c10, d41 as c11, d226 as c12 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d43 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d43;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["BalanceListResponse"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec488"]:c9(),["SharedCodec5"]:c10(),["SharedCodec6"]:c11(),["SignedMoney"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
