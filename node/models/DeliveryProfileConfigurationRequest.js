import { d6588 as c0, d6591 as c1 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6602 as c2, d6603 as c3, d6604 as c4, d6605 as c5, d6606 as c6, d6607 as c7, d6608 as c8, d6609 as c9, d6610 as c10, d6611 as c11, d6612 as c12, d6613 as c13, d6614 as c14, d6615 as c15 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6588 as d6588 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec600"]:c2(),["SharedCodec601"]:c3(),["SharedCodec602"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec605"]:c7(),["SharedCodec606"]:c8(),["SharedCodec607"]:c9(),["SharedCodec608"]:c10(),["SharedCodec611"]:c11(),["SharedCodec612"]:c12(),["SharedCodec613"]:c13(),["SharedCodec614"]:c14(),["SharedCodec615"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
