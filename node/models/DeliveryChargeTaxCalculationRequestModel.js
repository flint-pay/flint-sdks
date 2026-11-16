import { d7258 as c0 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7290 as c2, d7291 as c3 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7258 as d7258 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryChargeTaxCalculationRequestModel"]:c0(),["MoneyValue"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequestModel"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryChargeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
