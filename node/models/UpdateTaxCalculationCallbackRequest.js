import { d6369 as c0 } from '../descriptors/data/292.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6689 as c1, d6688 as c2, d6690 as c5 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8847 as c3 } from '../descriptors/data/438.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5737 as c4 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5737 as d5737 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1698"]:c0(),["SharedCodec1704"]:c1(),["SharedCodec1705"]:c2(),["TaxCalculationCallbackConfigurationPatchRequest"]:c3(),["UpdateTaxCalculationCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
