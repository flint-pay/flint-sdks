import { d223 as c0 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d667 as c1 } from '../descriptors/data/34.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5420 as c2, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5416 as c7, d5417 as c8, d5418 as c9, d5407 as c10, d5408 as c11, d5409 as c12, d5410 as c13, d5411 as c14 } from '../descriptors/data/243.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d223 as d223 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["SharedCodec629"]:c10(),["SharedCodec630"]:c11(),["SharedCodec631"]:c12(),["SharedCodec632"]:c13(),["SharedCodec633"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
