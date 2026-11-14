import { d8606 as c0, d8607 as c1 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5612 as c2 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5612 as d5612 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1665"]:c0(),["SharedCodec1666"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
