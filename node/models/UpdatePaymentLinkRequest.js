import { d6153 as c0, d6154 as c1, d6156 as c2, d6157 as c3, d6158 as c4 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c5, d5952 as c6, d5943 as c30, d5944 as c31, d5942 as c32 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6585 as c7, d6582 as c39, d6583 as c40, d6584 as c41 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c8 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c9 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8006 as c10 } from '../descriptors/data/385.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8009 as c11, d8011 as c12, d8014 as c13, d8016 as c14 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8019 as c15, d8022 as c16, d8027 as c17 } from '../descriptors/data/387.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8042 as c18 } from '../descriptors/data/388.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8047 as c19, d8048 as c20, d8050 as c21, d8051 as c22, d8052 as c23, d8053 as c24, d8054 as c25, d8055 as c26, d8056 as c27 } from '../descriptors/data/389.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8057 as c28, d8058 as c29 } from '../descriptors/data/390.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6282 as c33 } from '../descriptors/data/287.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7594 as c34, d7595 as c35 } from '../descriptors/data/363.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8063 as c36, d8064 as c37 } from '../descriptors/data/391.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6967 as c38 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5699 as c42 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5699 as d5699 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5699;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1192"]:c18(),["SharedCodec1197"]:c19(),["SharedCodec1198"]:c20(),["SharedCodec1200"]:c21(),["SharedCodec1201"]:c22(),["SharedCodec1202"]:c23(),["SharedCodec1203"]:c24(),["SharedCodec1204"]:c25(),["SharedCodec1205"]:c26(),["SharedCodec1206"]:c27(),["SharedCodec1207"]:c28(),["SharedCodec1208"]:c29(),["SharedCodec1685"]:c30(),["SharedCodec1686"]:c31(),["SharedCodec1687"]:c32(),["SharedCodec1691"]:c33(),["SharedCodec1737"]:c34(),["SharedCodec1738"]:c35(),["SharedCodec1766"]:c36(),["SharedCodec1767"]:c37(),["SharedCodec79"]:c38(),["SharedCodec834"]:c39(),["SharedCodec835"]:c40(),["SharedCodec836"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
