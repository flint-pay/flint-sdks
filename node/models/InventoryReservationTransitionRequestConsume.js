import { d5506 as c0, d5501 as c10, d5502 as c11 } from '../descriptors/data/247.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d725 as c1 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5420 as c2, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5416 as c7, d5417 as c8, d5418 as c9 } from '../descriptors/data/243.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d725 as d725 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d725;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequestConsume"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["SharedCodec667"]:c10(),["SharedCodec668"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestConsume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
