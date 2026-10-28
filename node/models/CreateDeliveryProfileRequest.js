import { d139 as c0 } from '../descriptors/data/6.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3655 as c1, d3658 as c2, d3664 as c3, d3665 as c4, d3666 as c5, d3667 as c6, d3668 as c7, d3669 as c8, d3670 as c9, d3671 as c10, d3672 as c11, d3673 as c12 } from '../descriptors/data/151.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d139 as d139 } from '../descriptors/data/6.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["SharedCodec304"]:c3(),["SharedCodec305"]:c4(),["SharedCodec306"]:c5(),["SharedCodec307"]:c6(),["SharedCodec308"]:c7(),["SharedCodec309"]:c8(),["SharedCodec310"]:c9(),["SharedCodec311"]:c10(),["SharedCodec312"]:c11(),["SharedCodec313"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
