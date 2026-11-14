import { d389 as c0 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8827 as c1 } from '../descriptors/data/437.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6658 as c2 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d389 as d389 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxCalculationCallbackRequest"]:c0(),["TaxCalculationCallbackConfigurationRequest"]:c1(),["WebhookSigningMethod"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
