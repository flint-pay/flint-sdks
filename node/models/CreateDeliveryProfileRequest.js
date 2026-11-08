import { d223 as c0 } from '../descriptors/data/10.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6387 as c1, d6390 as c2 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c3 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6398 as c4, d6399 as c5, d6400 as c6, d6401 as c7, d6402 as c8, d6403 as c9, d6404 as c10, d6405 as c11, d6406 as c12, d6407 as c13, d6408 as c14, d6409 as c15, d6410 as c16, d6411 as c17 } from '../descriptors/data/288.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d223 as d223 } from '../descriptors/data/10.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec546"]:c4(),["SharedCodec547"]:c5(),["SharedCodec548"]:c6(),["SharedCodec549"]:c7(),["SharedCodec550"]:c8(),["SharedCodec551"]:c9(),["SharedCodec552"]:c10(),["SharedCodec553"]:c11(),["SharedCodec554"]:c12(),["SharedCodec560"]:c13(),["SharedCodec561"]:c14(),["SharedCodec562"]:c15(),["SharedCodec563"]:c16(),["SharedCodec564"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
