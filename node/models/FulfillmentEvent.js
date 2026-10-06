import { d45 as c0, d812 as c1, d77 as c2, d2034 as c3, d2320 as c4, d99 as c5, d226 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d812 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d812;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec27"]:c5(),["SignedMoney"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
