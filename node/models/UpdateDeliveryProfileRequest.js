import { d6588 as c0, d6591 as c1 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c2 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c3 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6337 as c4 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6602 as c5, d6603 as c6, d6604 as c7, d6605 as c8, d6606 as c9, d6607 as c10, d6608 as c11, d6609 as c12, d6610 as c13, d6611 as c14, d6612 as c15, d6613 as c16, d6614 as c17, d6615 as c18 } from '../descriptors/data/306.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5646 as c19 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5646 as d5646 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5646;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1692"]:c2(),["SharedCodec1695"]:c3(),["SharedCodec1703"]:c4(),["SharedCodec600"]:c5(),["SharedCodec601"]:c6(),["SharedCodec602"]:c7(),["SharedCodec603"]:c8(),["SharedCodec604"]:c9(),["SharedCodec605"]:c10(),["SharedCodec606"]:c11(),["SharedCodec607"]:c12(),["SharedCodec608"]:c13(),["SharedCodec611"]:c14(),["SharedCodec612"]:c15(),["SharedCodec613"]:c16(),["SharedCodec614"]:c17(),["SharedCodec615"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
