import { d6387 as c0, d6390 as c1 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6398 as c2, d6399 as c3, d6400 as c4, d6401 as c5, d6402 as c6, d6403 as c7, d6404 as c8, d6405 as c9, d6406 as c10, d6407 as c11, d6408 as c12, d6409 as c13, d6410 as c14, d6411 as c15 } from '../descriptors/data/288.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6387 as d6387 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec546"]:c2(),["SharedCodec547"]:c3(),["SharedCodec548"]:c4(),["SharedCodec549"]:c5(),["SharedCodec550"]:c6(),["SharedCodec551"]:c7(),["SharedCodec552"]:c8(),["SharedCodec553"]:c9(),["SharedCodec554"]:c10(),["SharedCodec560"]:c11(),["SharedCodec561"]:c12(),["SharedCodec562"]:c13(),["SharedCodec563"]:c14(),["SharedCodec564"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
