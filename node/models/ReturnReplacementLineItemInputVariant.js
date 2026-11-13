import { d6537 as c0, d6538 as c1 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1390 as c3 } from '../descriptors/data/66.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8358 as c4, d8359 as c5 } from '../descriptors/data/406.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1390 as d1390 } from '../descriptors/data/66.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemInputVariant"]:c3(),["SharedCodec1526"]:c4(),["SharedCodec1527"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
