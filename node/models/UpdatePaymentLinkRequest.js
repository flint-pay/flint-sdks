import { d6130 as c0, d6131 as c1, d6132 as c2, d6133 as c3, d6134 as c4, d6135 as c9 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5928 as c5, d5929 as c6, d5920 as c30, d5921 as c31, d5919 as c32 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6552 as c7, d6549 as c38, d6550 as c39, d6551 as c40 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c8 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7975 as c10, d7978 as c11, d7980 as c12, d7983 as c13, d7985 as c14 } from '../descriptors/data/383.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7988 as c15, d7991 as c16, d7996 as c17 } from '../descriptors/data/384.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8011 as c18 } from '../descriptors/data/385.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8016 as c19, d8017 as c20, d8019 as c21, d8020 as c22, d8021 as c23, d8022 as c24, d8023 as c25, d8024 as c26 } from '../descriptors/data/386.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8025 as c27, d8026 as c28, d8027 as c29 } from '../descriptors/data/387.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6255 as c33 } from '../descriptors/data/284.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7567 as c34, d7568 as c35 } from '../descriptors/data/360.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8032 as c36, d8033 as c37 } from '../descriptors/data/388.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6683 as c41 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5687 as c42 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5687 as d5687 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1195"]:c18(),["SharedCodec1200"]:c19(),["SharedCodec1201"]:c20(),["SharedCodec1203"]:c21(),["SharedCodec1204"]:c22(),["SharedCodec1205"]:c23(),["SharedCodec1206"]:c24(),["SharedCodec1207"]:c25(),["SharedCodec1208"]:c26(),["SharedCodec1209"]:c27(),["SharedCodec1210"]:c28(),["SharedCodec1211"]:c29(),["SharedCodec1695"]:c30(),["SharedCodec1696"]:c31(),["SharedCodec1697"]:c32(),["SharedCodec1701"]:c33(),["SharedCodec1747"]:c34(),["SharedCodec1748"]:c35(),["SharedCodec1776"]:c36(),["SharedCodec1777"]:c37(),["SharedCodec833"]:c38(),["SharedCodec834"]:c39(),["SharedCodec835"]:c40(),["SharedCodec85"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
