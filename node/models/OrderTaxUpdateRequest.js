import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4774 as c1, d4776 as c2, d4780 as c9 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4455 as c3, d4456 as c4, d4457 as c5, d4458 as c6, d4459 as c7, d4460 as c8, d4462 as c10, d4463 as c11, d4464 as c12, d4465 as c13 } from '../descriptors/data/196.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4793 as c14, d4794 as c15, d4795 as c16, d4796 as c17 } from '../descriptors/data/217.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4188 as c18 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4844 as c19, d4845 as c20, d4846 as c21 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4780 as d4780 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4780;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationPostalAddressRequest"]:c7(),["OrderTaxLocationRequest"]:c8(),["OrderTaxUpdateRequest"]:c9(),["SharedCodec1020"]:c10(),["SharedCodec1021"]:c11(),["SharedCodec1022"]:c12(),["SharedCodec1023"]:c13(),["SharedCodec1027"]:c14(),["SharedCodec1028"]:c15(),["SharedCodec1029"]:c16(),["SharedCodec1030"]:c17(),["SharedCodec158"]:c18(),["TaxCalculationRequestRequest"]:c19(),["TaxComponentRequestRequest"]:c20(),["TaxJurisdictionRequestRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
