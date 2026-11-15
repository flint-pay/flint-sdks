import { d6592 as c0, d6595 as c1 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5914 as c2 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c3 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6341 as c4 } from '../descriptors/data/291.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6606 as c5, d6607 as c6, d6608 as c7, d6609 as c8, d6610 as c9, d6611 as c10, d6612 as c11, d6613 as c12, d6614 as c13, d6615 as c14, d6616 as c15, d6617 as c16, d6618 as c17, d6619 as c18 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5642 as c19 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5642 as d5642 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1680"]:c2(),["SharedCodec1683"]:c3(),["SharedCodec1691"]:c4(),["SharedCodec598"]:c5(),["SharedCodec599"]:c6(),["SharedCodec600"]:c7(),["SharedCodec601"]:c8(),["SharedCodec602"]:c9(),["SharedCodec603"]:c10(),["SharedCodec604"]:c11(),["SharedCodec605"]:c12(),["SharedCodec606"]:c13(),["SharedCodec609"]:c14(),["SharedCodec610"]:c15(),["SharedCodec611"]:c16(),["SharedCodec612"]:c17(),["SharedCodec613"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
