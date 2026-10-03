import { d321 as c0, d665 as c1, d659 as c2, d649 as c3, d657 as c4, d658 as c5, d661 as c6, d660 as c7, d662 as c8, d664 as c9, d663 as c10, d651 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d321 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec213"]:c4(),["SharedCodec214"]:c5(),["SharedCodec215"]:c6(),["SharedCodec216"]:c7(),["SharedCodec217"]:c8(),["SharedCodec218"]:c9(),["SharedCodec219"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
