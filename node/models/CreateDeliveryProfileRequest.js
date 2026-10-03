import { d319 as c0, d663 as c1, d657 as c2, d647 as c3, d655 as c4, d656 as c5, d659 as c6, d658 as c7, d660 as c8, d662 as c9, d661 as c10, d649 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d319 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec213"]:c4(),["SharedCodec214"]:c5(),["SharedCodec215"]:c6(),["SharedCodec216"]:c7(),["SharedCodec217"]:c8(),["SharedCodec218"]:c9(),["SharedCodec219"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
