import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4455 as c1, d4456 as c2, d4457 as c3, d4458 as c4, d4459 as c5, d4460 as c6, d4461 as c7, d4462 as c8, d4463 as c9, d4464 as c10, d4465 as c11, d4466 as c12, d4467 as c13, d4468 as c14 } from '../descriptors/data/196.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4188 as c15 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4461 as d4461 } from '../descriptors/data/196.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6(),["OrderTaxRequest"]:c7(),["SharedCodec1020"]:c8(),["SharedCodec1021"]:c9(),["SharedCodec1022"]:c10(),["SharedCodec1023"]:c11(),["SharedCodec1024"]:c12(),["SharedCodec1025"]:c13(),["SharedCodec1026"]:c14(),["SharedCodec158"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
