import { d232 as c0 } from '../descriptors/data/11.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6592 as c1, d6595 as c2 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c3 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6606 as c4, d6607 as c5, d6608 as c6, d6609 as c7, d6610 as c8, d6611 as c9, d6612 as c10, d6613 as c11, d6614 as c12, d6615 as c13, d6616 as c14, d6617 as c15, d6618 as c16, d6619 as c17 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d232 as d232 } from '../descriptors/data/11.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec598"]:c4(),["SharedCodec599"]:c5(),["SharedCodec600"]:c6(),["SharedCodec601"]:c7(),["SharedCodec602"]:c8(),["SharedCodec603"]:c9(),["SharedCodec604"]:c10(),["SharedCodec605"]:c11(),["SharedCodec606"]:c12(),["SharedCodec609"]:c13(),["SharedCodec610"]:c14(),["SharedCodec611"]:c15(),["SharedCodec612"]:c16(),["SharedCodec613"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
