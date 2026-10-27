import { d3640 as c0, d3643 as c1, d3649 as c3, d3650 as c4, d3651 as c5, d3652 as c6, d3653 as c7, d3654 as c8, d3655 as c9, d3656 as c10, d3657 as c11, d3658 as c12 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3452 as c2 } from '../descriptors/data/140.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2429 as c13 } from '../descriptors/data/95.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2429 as d2429 } from '../descriptors/data/95.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1168"]:c2(),["SharedCodec299"]:c3(),["SharedCodec300"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec305"]:c9(),["SharedCodec306"]:c10(),["SharedCodec307"]:c11(),["SharedCodec308"]:c12(),["UpdateDeliveryProfileRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
