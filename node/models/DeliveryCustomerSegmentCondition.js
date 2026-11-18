import { d8551 as c0 } from '../descriptors/data/375.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8551 as d8551 } from '../descriptors/data/375.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCustomerSegmentCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCustomerSegmentCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
