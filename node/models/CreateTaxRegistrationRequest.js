import { d390 as c0 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8846 as c1 } from '../descriptors/data/437.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d390 as d390 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxRegistrationRequest"]:c0(),["SharedCodec449"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
