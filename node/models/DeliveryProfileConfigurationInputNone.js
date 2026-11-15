import { d529 as c0 } from '../descriptors/data/31.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6595 as c1 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6608 as c2, d6609 as c3, d6615 as c4, d6616 as c5, d6617 as c6, d6618 as c7, d6619 as c8 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d529 as d529 } from '../descriptors/data/31.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputNone"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec600"]:c2(),["SharedCodec601"]:c3(),["SharedCodec609"]:c4(),["SharedCodec610"]:c5(),["SharedCodec611"]:c6(),["SharedCodec612"]:c7(),["SharedCodec613"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
