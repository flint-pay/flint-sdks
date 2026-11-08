import { d477 as c0 } from '../descriptors/data/25.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6261 as c1, d6262 as c2 } from '../descriptors/data/280.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6288 as c3 } from '../descriptors/data/281.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6289 as c4, d6290 as c5 } from '../descriptors/data/282.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d477 as d477 } from '../descriptors/data/25.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroup"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c2(),["SharedCodec217"]:c3(),["SharedCodec218"]:c4(),["SharedCodec219"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
