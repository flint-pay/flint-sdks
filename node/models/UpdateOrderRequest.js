import { d3345 as c0, d3346 as c17, d3347 as c18, d3348 as c27 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4451 as c1, d4452 as c6, d4453 as c7, d4454 as c8, d4455 as c10, d4456 as c11, d4457 as c12, d4458 as c13, d4459 as c14, d4460 as c15, d4462 as c19, d4463 as c20, d4464 as c21, d4465 as c22, d4469 as c31, d4470 as c32, d4471 as c33 } from '../descriptors/data/196.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c2, d3250 as c3 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c4 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4774 as c5, d4776 as c9, d4780 as c16 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4793 as c23, d4794 as c24, d4795 as c25, d4796 as c26 } from '../descriptors/data/217.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4813 as c28, d4814 as c29 } from '../descriptors/data/218.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4188 as c30 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4472 as c34 } from '../descriptors/data/197.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4844 as c35, d4845 as c36, d4846 as c37 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2612 as c38 } from '../descriptors/data/109.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2612 as d2612 } from '../descriptors/data/109.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateOrderTip"]:c1(),["MetadataPatchRequest"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderChargeTaxAssignment"]:c5(),["OrderDeliveryDestinationRecipientRequest"]:c6(),["OrderDeliveryDestinationRequest"]:c7(),["OrderInventoryRoutingSourceRequest"]:c8(),["OrderLineItemTaxAssignment"]:c9(),["OrderTaxCalculationRequest"]:c10(),["OrderTaxComponentRequest"]:c11(),["OrderTaxJurisdictionRequest"]:c12(),["OrderTaxLocationFullAddressRequest"]:c13(),["OrderTaxLocationPostalAddressRequest"]:c14(),["OrderTaxLocationRequest"]:c15(),["OrderTaxUpdateRequest"]:c16(),["SharedCodec0"]:c17(),["SharedCodec1"]:c18(),["SharedCodec1020"]:c19(),["SharedCodec1021"]:c20(),["SharedCodec1022"]:c21(),["SharedCodec1023"]:c22(),["SharedCodec1027"]:c23(),["SharedCodec1028"]:c24(),["SharedCodec1029"]:c25(),["SharedCodec1030"]:c26(),["SharedCodec1256"]:c27(),["SharedCodec1291"]:c28(),["SharedCodec1292"]:c29(),["SharedCodec158"]:c30(),["SharedCodec209"]:c31(),["SharedCodec210"]:c32(),["SharedCodec211"]:c33(),["SharedCodec212"]:c34(),["TaxCalculationRequestRequest"]:c35(),["TaxComponentRequestRequest"]:c36(),["TaxJurisdictionRequestRequest"]:c37(),["UpdateOrderRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
