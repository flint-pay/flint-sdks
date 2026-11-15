import { d6123 as c0, d6124 as c1, d6126 as c2, d6127 as c3, d6128 as c4 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5921 as c5, d5922 as c6, d5913 as c30, d5914 as c31, d5912 as c32 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6555 as c7, d6552 as c39, d6553 as c40, d6554 as c41 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c8 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6129 as c9 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7972 as c10, d7975 as c11, d7977 as c12, d7980 as c13, d7982 as c14 } from '../descriptors/data/384.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7985 as c15, d7988 as c16, d7993 as c17 } from '../descriptors/data/385.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8008 as c18 } from '../descriptors/data/386.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8013 as c19, d8014 as c20, d8016 as c21, d8017 as c22, d8018 as c23, d8019 as c24, d8020 as c25, d8021 as c26 } from '../descriptors/data/387.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8022 as c27, d8023 as c28, d8024 as c29 } from '../descriptors/data/388.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6252 as c33 } from '../descriptors/data/286.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7563 as c34, d7564 as c35 } from '../descriptors/data/362.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8029 as c36, d8030 as c37 } from '../descriptors/data/389.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6937 as c38 } from '../descriptors/data/326.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5669 as c42 } from '../descriptors/data/249.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5669 as d5669 } from '../descriptors/data/249.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1185"]:c18(),["SharedCodec1190"]:c19(),["SharedCodec1191"]:c20(),["SharedCodec1193"]:c21(),["SharedCodec1194"]:c22(),["SharedCodec1195"]:c23(),["SharedCodec1196"]:c24(),["SharedCodec1197"]:c25(),["SharedCodec1198"]:c26(),["SharedCodec1199"]:c27(),["SharedCodec1200"]:c28(),["SharedCodec1201"]:c29(),["SharedCodec1678"]:c30(),["SharedCodec1679"]:c31(),["SharedCodec1680"]:c32(),["SharedCodec1684"]:c33(),["SharedCodec1730"]:c34(),["SharedCodec1731"]:c35(),["SharedCodec1759"]:c36(),["SharedCodec1760"]:c37(),["SharedCodec79"]:c38(),["SharedCodec834"]:c39(),["SharedCodec835"]:c40(),["SharedCodec836"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
