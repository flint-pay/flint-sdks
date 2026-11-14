import { d6326 as c0, d6327 as c8, d6328 as c9 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6019 as c1, d6020 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6315 as c3, d6316 as c4 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5921 as c5, d5922 as c6, d5920 as c7 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6290 as c10, d6291 as c11, d6292 as c12 } from '../descriptors/data/289.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5642 as c13 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5642 as d5642 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1002"]:c4(),["SharedCodec1690"]:c5(),["SharedCodec1691"]:c6(),["SharedCodec1692"]:c7(),["SharedCodec1697"]:c8(),["SharedCodec1698"]:c9(),["SharedCodec1699"]:c10(),["SharedCodec1700"]:c11(),["SharedCodec1701"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
