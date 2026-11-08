import { d6387 as c0, d6390 as c1 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5686 as c2 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5790 as c3 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6151 as c4 } from '../descriptors/data/274.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6398 as c5, d6399 as c6, d6400 as c7, d6401 as c8, d6402 as c9, d6403 as c10, d6404 as c11, d6405 as c12, d6406 as c13, d6407 as c14, d6408 as c15, d6409 as c16, d6410 as c17, d6411 as c18 } from '../descriptors/data/288.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5428 as c19 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5428 as d5428 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1563"]:c2(),["SharedCodec1566"]:c3(),["SharedCodec1574"]:c4(),["SharedCodec546"]:c5(),["SharedCodec547"]:c6(),["SharedCodec548"]:c7(),["SharedCodec549"]:c8(),["SharedCodec550"]:c9(),["SharedCodec551"]:c10(),["SharedCodec552"]:c11(),["SharedCodec553"]:c12(),["SharedCodec554"]:c13(),["SharedCodec560"]:c14(),["SharedCodec561"]:c15(),["SharedCodec562"]:c16(),["SharedCodec563"]:c17(),["SharedCodec564"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
