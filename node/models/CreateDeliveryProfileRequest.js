import { d293 as c0, d627 as c1, d633 as c2, d717 as c3, d623 as c4, d622 as c5, d624 as c6, d626 as c7, d625 as c8, d631 as c9, d632 as c10, d2556 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d293 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec187"]:c4(),["SharedCodec188"]:c5(),["SharedCodec189"]:c6(),["SharedCodec190"]:c7(),["SharedCodec191"]:c8(),["SharedCodec192"]:c9(),["SharedCodec193"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
