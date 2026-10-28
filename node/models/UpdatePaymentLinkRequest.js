import { d3499 as c0, d3500 as c1, d3501 as c2, d3502 as c3 } from '../descriptors/data/146.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3259 as c4, d3251 as c8, d3252 as c31, d3253 as c32 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3260 as c5, d3261 as c6 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4331 as c7, d4332 as c38, d4333 as c39, d4334 as c40 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c9 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c10 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4911 as c11, d4914 as c12, d4916 as c13, d4919 as c14, d4921 as c15 } from '../descriptors/data/224.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4924 as c16, d4927 as c17, d4931 as c18 } from '../descriptors/data/225.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4943 as c19 } from '../descriptors/data/226.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4951 as c20, d4952 as c21, d4954 as c22, d4955 as c23, d4956 as c24, d4957 as c25, d4958 as c26, d4959 as c27, d4960 as c28, d4961 as c29 } from '../descriptors/data/227.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4962 as c30, d4967 as c35, d4968 as c36 } from '../descriptors/data/228.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3600 as c33 } from '../descriptors/data/151.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4721 as c34 } from '../descriptors/data/213.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3392 as c37 } from '../descriptors/data/140.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2618 as c41 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2618 as d2618 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequestRequest"]:c0(),["CheckoutPromotionConfigRequestRequest"]:c1(),["CheckoutTaxConfigRequestRequest"]:c2(),["CheckoutTipConfigRequestRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MetadataPatchRequest"]:c8(),["MoneyValue"]:c9(),["OrderLineItemTax"]:c10(),["PaymentLinkCustomFieldPatchRequest"]:c11(),["PaymentLinkCustomTextPatchRequest"]:c12(),["PaymentLinkEventConfigPatchRequest"]:c13(),["PaymentLinkLegalPatchRequest"]:c14(),["PaymentLinkLineItemPatchRequest"]:c15(),["PaymentLinkPaymentPatchRequest"]:c16(),["PaymentLinkRedirectsPatchRequest"]:c17(),["PaymentLinkThemePatchRequest"]:c18(),["SharedCodec1055"]:c19(),["SharedCodec1063"]:c20(),["SharedCodec1064"]:c21(),["SharedCodec1066"]:c22(),["SharedCodec1067"]:c23(),["SharedCodec1068"]:c24(),["SharedCodec1069"]:c25(),["SharedCodec1070"]:c26(),["SharedCodec1071"]:c27(),["SharedCodec1072"]:c28(),["SharedCodec1073"]:c29(),["SharedCodec1074"]:c30(),["SharedCodec1252"]:c31(),["SharedCodec1253"]:c32(),["SharedCodec1257"]:c33(),["SharedCodec1288"]:c34(),["SharedCodec1298"]:c35(),["SharedCodec1299"]:c36(),["SharedCodec36"]:c37(),["SharedCodec897"]:c38(),["SharedCodec898"]:c39(),["SharedCodec899"]:c40(),["UpdatePaymentLinkRequest"]:c41()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
