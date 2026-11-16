import { d8627 as c0, d8628 as c1 } from '../descriptors/data/424.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5636 as c2 } from '../descriptors/data/245.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5636 as d5636 } from '../descriptors/data/245.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5636;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1660"]:c0(),["SharedCodec1661"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
