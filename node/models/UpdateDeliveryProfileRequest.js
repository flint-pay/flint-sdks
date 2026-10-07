import { d627 as c0, d633 as c1, d717 as c2, d623 as c3, d622 as c4, d624 as c5, d626 as c6, d625 as c7, d631 as c8, d632 as c9, d2364 as c10, d2372 as c11, d2556 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2372 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec187"]:c3(),["SharedCodec188"]:c4(),["SharedCodec189"]:c5(),["SharedCodec190"]:c6(),["SharedCodec191"]:c7(),["SharedCodec192"]:c8(),["SharedCodec193"]:c9(),["SharedCodec583"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
