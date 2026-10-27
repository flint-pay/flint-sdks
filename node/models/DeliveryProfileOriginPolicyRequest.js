import { d3643 as c0, d3654 as c1, d3655 as c2, d3656 as c3, d3657 as c4, d3658 as c5 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3643 as d3643 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec304"]:c1(),["SharedCodec305"]:c2(),["SharedCodec306"]:c3(),["SharedCodec307"]:c4(),["SharedCodec308"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
