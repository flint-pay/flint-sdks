import { d6326 as c0 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6019 as c1, d6020 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6315 as c3, d6316 as c4 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5608 as c5 } from '../descriptors/data/245.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5608 as d5608 } from '../descriptors/data/245.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5608;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1002"]:c4(),["TaxIdentityRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
