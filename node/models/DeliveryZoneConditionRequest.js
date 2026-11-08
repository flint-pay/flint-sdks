import { d6277 as c0 } from '../descriptors/data/281.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6277 as d6277 } from '../descriptors/data/281.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryZoneConditionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
