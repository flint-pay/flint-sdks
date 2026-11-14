import { d6337 as c0 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6657 as c1, d6656 as c2, d6658 as c5 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8826 as c3 } from '../descriptors/data/437.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5713 as c4 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5713 as d5713 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1703"]:c0(),["SharedCodec1709"]:c1(),["SharedCodec1710"]:c2(),["TaxCalculationCallbackConfigurationPatchRequest"]:c3(),["UpdateTaxCalculationCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
