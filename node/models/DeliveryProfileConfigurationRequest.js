import { d3640 as c0, d3643 as c1, d3649 as c2, d3650 as c3, d3651 as c4, d3652 as c5, d3653 as c6, d3654 as c7, d3655 as c8, d3656 as c9, d3657 as c10, d3658 as c11 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3640 as d3640 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec299"]:c2(),["SharedCodec300"]:c3(),["SharedCodec301"]:c4(),["SharedCodec302"]:c5(),["SharedCodec303"]:c6(),["SharedCodec304"]:c7(),["SharedCodec305"]:c8(),["SharedCodec306"]:c9(),["SharedCodec307"]:c10(),["SharedCodec308"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
