import { d388 as c0 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8848 as c1 } from '../descriptors/data/438.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6690 as c2 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d388 as d388 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxCalculationCallbackRequest"]:c0(),["TaxCalculationCallbackConfigurationRequest"]:c1(),["WebhookSigningMethod"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
