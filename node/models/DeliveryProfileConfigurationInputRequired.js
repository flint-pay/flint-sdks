import { d531 as c0 } from '../descriptors/data/31.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6595 as c1 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6606 as c2, d6607 as c3, d6610 as c4, d6611 as c5, d6612 as c6, d6615 as c7, d6616 as c8, d6617 as c9, d6618 as c10, d6619 as c11 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d531 as d531 } from '../descriptors/data/31.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec602"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec609"]:c7(),["SharedCodec610"]:c8(),["SharedCodec611"]:c9(),["SharedCodec612"]:c10(),["SharedCodec613"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
