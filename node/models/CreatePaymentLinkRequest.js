import { d3499 as c0, d3500 as c1, d3501 as c3, d3502 as c4 } from '../descriptors/data/146.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3418 as c2 } from '../descriptors/data/141.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d224 as c5 } from '../descriptors/data/13.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3259 as c6, d3250 as c10 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3260 as c7, d3261 as c8 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4331 as c9, d4332 as c33, d4333 as c34, d4334 as c35 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c11 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c12 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4912 as c13, d4913 as c14, d4917 as c15, d4918 as c16, d4922 as c17 } from '../descriptors/data/224.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4923 as c18, d4930 as c19 } from '../descriptors/data/225.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4943 as c20 } from '../descriptors/data/226.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4951 as c21, d4952 as c22, d4954 as c23, d4955 as c24, d4956 as c25, d4957 as c26, d4958 as c27 } from '../descriptors/data/227.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4963 as c28, d4964 as c29, d4965 as c30, d4966 as c31 } from '../descriptors/data/228.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4975 as c32 } from '../descriptors/data/229.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d224 as d224 } from '../descriptors/data/13.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequestRequest"]:c0(),["CheckoutPromotionConfigRequestRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfigRequestRequest"]:c3(),["CheckoutTipConfigRequestRequest"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1055"]:c20(),["SharedCodec1063"]:c21(),["SharedCodec1064"]:c22(),["SharedCodec1066"]:c23(),["SharedCodec1067"]:c24(),["SharedCodec1068"]:c25(),["SharedCodec1069"]:c26(),["SharedCodec1070"]:c27(),["SharedCodec1075"]:c28(),["SharedCodec1076"]:c29(),["SharedCodec1077"]:c30(),["SharedCodec1078"]:c31(),["SharedCodec222"]:c32(),["SharedCodec897"]:c33(),["SharedCodec898"]:c34(),["SharedCodec899"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
