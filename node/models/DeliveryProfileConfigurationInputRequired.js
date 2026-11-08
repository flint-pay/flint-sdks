import { d513 as c0 } from '../descriptors/data/28.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6390 as c1 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6398 as c2, d6399 as c3, d6402 as c4, d6403 as c5, d6404 as c6, d6407 as c7, d6408 as c8, d6409 as c9, d6410 as c10, d6411 as c11 } from '../descriptors/data/288.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d513 as d513 } from '../descriptors/data/28.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec546"]:c2(),["SharedCodec547"]:c3(),["SharedCodec550"]:c4(),["SharedCodec551"]:c5(),["SharedCodec552"]:c6(),["SharedCodec560"]:c7(),["SharedCodec561"]:c8(),["SharedCodec562"]:c9(),["SharedCodec563"]:c10(),["SharedCodec564"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
