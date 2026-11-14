import { d531 as c0 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6591 as c1 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6602 as c2, d6603 as c3, d6606 as c4, d6607 as c5, d6608 as c6, d6611 as c7, d6612 as c8, d6613 as c9, d6614 as c10, d6615 as c11 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d531 as d531 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec600"]:c2(),["SharedCodec601"]:c3(),["SharedCodec604"]:c4(),["SharedCodec605"]:c5(),["SharedCodec606"]:c6(),["SharedCodec611"]:c7(),["SharedCodec612"]:c8(),["SharedCodec613"]:c9(),["SharedCodec614"]:c10(),["SharedCodec615"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
