import { d3345 as c0, d3346 as c16, d3347 as c17 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3499 as c1, d3500 as c6, d3501 as c10, d3502 as c11 } from '../descriptors/data/146.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3281 as c2, d3282 as c3, d3283 as c4, d3284 as c5, d3285 as c7, d3287 as c9 } from '../descriptors/data/133.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3418 as c8, d3424 as c20, d3425 as c21, d3426 as c22 } from '../descriptors/data/141.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d137 as c12 } from '../descriptors/data/6.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c13 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c14 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c15 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3478 as c18, d3479 as c19 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3314 as c23, d3315 as c24, d3316 as c25 } from '../descriptors/data/135.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3324 as c26, d3325 as c27, d3326 as c28 } from '../descriptors/data/136.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d137 as d137 } from '../descriptors/data/6.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequestRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequestRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfigRequestRequest"]:c10(),["CheckoutTipConfigRequestRequest"]:c11(),["CreateCheckoutSessionSubscriptionPlan"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderLineItemTax"]:c15(),["SharedCodec0"]:c16(),["SharedCodec1"]:c17(),["SharedCodec61"]:c18(),["SharedCodec62"]:c19(),["SharedCodec79"]:c20(),["SharedCodec80"]:c21(),["SharedCodec81"]:c22(),["SharedCodec82"]:c23(),["SharedCodec83"]:c24(),["SharedCodec84"]:c25(),["SharedCodec92"]:c26(),["SharedCodec93"]:c27(),["ThemeConfigRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
