import { d528 as c0 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6591 as c1 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6602 as c2, d6603 as c3, d6611 as c4, d6612 as c5, d6613 as c6, d6614 as c7, d6615 as c8 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d528 as d528 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d528;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec600"]:c2(),["SharedCodec601"]:c3(),["SharedCodec611"]:c4(),["SharedCodec612"]:c5(),["SharedCodec613"]:c6(),["SharedCodec614"]:c7(),["SharedCodec615"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
