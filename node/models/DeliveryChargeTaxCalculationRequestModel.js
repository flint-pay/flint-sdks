import { d7231 as c0 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7263 as c2, d7264 as c3 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7231 as d7231 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryChargeTaxCalculationRequestModel"]:c0(),["MoneyValue"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequestModel"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryChargeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
