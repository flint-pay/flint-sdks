import { d530 as c0 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6591 as c1 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6606 as c2, d6611 as c3, d6612 as c4, d6613 as c5, d6614 as c6, d6615 as c7 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d530 as d530 } from '../descriptors/data/31.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec604"]:c2(),["SharedCodec611"]:c3(),["SharedCodec612"]:c4(),["SharedCodec613"]:c5(),["SharedCodec614"]:c6(),["SharedCodec615"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
