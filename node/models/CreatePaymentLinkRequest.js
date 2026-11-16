import { d6153 as c0, d6154 as c1, d6148 as c2, d6156 as c3, d6157 as c4, d6158 as c5 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d318 as c6 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c7, d5952 as c8 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c9 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6585 as c10, d6582 as c34, d6583 as c35, d6584 as c36 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c11 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c12 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8007 as c13 } from '../descriptors/data/385.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8008 as c14, d8012 as c15, d8013 as c16, d8017 as c17 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8018 as c18, d8026 as c19 } from '../descriptors/data/387.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8042 as c20 } from '../descriptors/data/388.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8047 as c21, d8048 as c22, d8050 as c23, d8051 as c24, d8052 as c25, d8053 as c26, d8054 as c27 } from '../descriptors/data/389.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8059 as c28, d8060 as c29, d8061 as c30, d8062 as c31 } from '../descriptors/data/390.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8074 as c32, d8075 as c33 } from '../descriptors/data/391.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d318 as d318 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1192"]:c20(),["SharedCodec1197"]:c21(),["SharedCodec1198"]:c22(),["SharedCodec1200"]:c23(),["SharedCodec1201"]:c24(),["SharedCodec1202"]:c25(),["SharedCodec1203"]:c26(),["SharedCodec1204"]:c27(),["SharedCodec1209"]:c28(),["SharedCodec1210"]:c29(),["SharedCodec1211"]:c30(),["SharedCodec1212"]:c31(),["SharedCodec374"]:c32(),["SharedCodec375"]:c33(),["SharedCodec834"]:c34(),["SharedCodec835"]:c35(),["SharedCodec836"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
