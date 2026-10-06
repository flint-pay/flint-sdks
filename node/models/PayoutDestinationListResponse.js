import { d1819 as c0, d1820 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2018 as c5, d2019 as c6, d2158 as c7, d14 as c8, d1821 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2019 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2019;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementHistoryMeta"]:c0(),["MoneyMovementListMeta"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PayoutDestination"]:c5(),["PayoutDestinationListResponse"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutDestinationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
