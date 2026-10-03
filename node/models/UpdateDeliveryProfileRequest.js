import { d663 as c0, d657 as c1, d647 as c2, d655 as c3, d656 as c4, d659 as c5, d658 as c6, d660 as c7, d662 as c8, d661 as c9, d2371 as c10, d2379 as c11, d649 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2379 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec213"]:c3(),["SharedCodec214"]:c4(),["SharedCodec215"]:c5(),["SharedCodec216"]:c6(),["SharedCodec217"]:c7(),["SharedCodec218"]:c8(),["SharedCodec219"]:c9(),["SharedCodec617"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
