import { d6021 as c0, d6019 as c5, d6020 as c6 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6282 as c1 } from '../descriptors/data/288.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d223 as c2 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6326 as c3 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c4 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6315 as c7, d6316 as c8, d6312 as c10 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6300 as c9 } from '../descriptors/data/289.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d223 as d223 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["CreateCustomerRequest"]:c2(),["DocumentTaxIDRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6(),["SharedCodec1001"]:c7(),["SharedCodec1002"]:c8(),["SharedCodec222"]:c9(),["TaxIdentityPatch"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
