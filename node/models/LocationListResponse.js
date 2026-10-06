import { d1744 as c0, d197 as c1, d1742 as c2, d1743 as c3, d1747 as c4, d77 as c5, d1797 as c6, d1796 as c7, d2131 as c8, d2132 as c9, d14 as c10, d1795 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1747 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationListResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec485"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
