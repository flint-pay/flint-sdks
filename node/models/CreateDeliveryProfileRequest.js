import { d235 as c0 } from '../descriptors/data/11.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6588 as c1, d6591 as c2 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6602 as c4, d6603 as c5, d6604 as c6, d6605 as c7, d6606 as c8, d6607 as c9, d6608 as c10, d6609 as c11, d6610 as c12, d6611 as c13, d6612 as c14, d6613 as c15, d6614 as c16, d6615 as c17 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d235 as d235 } from '../descriptors/data/11.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec600"]:c4(),["SharedCodec601"]:c5(),["SharedCodec602"]:c6(),["SharedCodec603"]:c7(),["SharedCodec604"]:c8(),["SharedCodec605"]:c9(),["SharedCodec606"]:c10(),["SharedCodec607"]:c11(),["SharedCodec608"]:c12(),["SharedCodec611"]:c13(),["SharedCodec612"]:c14(),["SharedCodec613"]:c15(),["SharedCodec614"]:c16(),["SharedCodec615"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
