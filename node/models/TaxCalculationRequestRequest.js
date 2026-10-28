import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4844 as c1, d4845 as c2, d4846 as c3 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4844 as d4844 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4844;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxCalculationRequestRequest"]:c1(),["TaxComponentRequestRequest"]:c2(),["TaxJurisdictionRequestRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxCalculationRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
