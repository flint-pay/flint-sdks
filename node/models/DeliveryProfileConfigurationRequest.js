import { d6592 as c0, d6595 as c1 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6606 as c2, d6607 as c3, d6608 as c4, d6609 as c5, d6610 as c6, d6611 as c7, d6612 as c8, d6613 as c9, d6614 as c10, d6615 as c11, d6616 as c12, d6617 as c13, d6618 as c14, d6619 as c15 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6592 as d6592 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec600"]:c4(),["SharedCodec601"]:c5(),["SharedCodec602"]:c6(),["SharedCodec603"]:c7(),["SharedCodec604"]:c8(),["SharedCodec605"]:c9(),["SharedCodec606"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SharedCodec611"]:c13(),["SharedCodec612"]:c14(),["SharedCodec613"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
