import { d6130 as c0, d6131 as c1, d6125 as c2, d6132 as c3, d6133 as c4, d6134 as c5, d6135 as c12 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d320 as c6 } from '../descriptors/data/19.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5928 as c7, d5929 as c8 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5935 as c9 } from '../descriptors/data/266.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6552 as c10, d6549 as c34, d6550 as c35, d6551 as c36 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c11 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7976 as c13, d7977 as c14, d7981 as c15, d7982 as c16 } from '../descriptors/data/383.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7986 as c17, d7987 as c18, d7995 as c19 } from '../descriptors/data/384.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8011 as c20 } from '../descriptors/data/385.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8016 as c21, d8017 as c22, d8019 as c23, d8020 as c24, d8021 as c25, d8022 as c26, d8023 as c27 } from '../descriptors/data/386.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8028 as c28, d8029 as c29 } from '../descriptors/data/387.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8030 as c30, d8031 as c31 } from '../descriptors/data/388.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8043 as c32, d8044 as c33 } from '../descriptors/data/389.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d320 as d320 } from '../descriptors/data/19.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1195"]:c20(),["SharedCodec1200"]:c21(),["SharedCodec1201"]:c22(),["SharedCodec1203"]:c23(),["SharedCodec1204"]:c24(),["SharedCodec1205"]:c25(),["SharedCodec1206"]:c26(),["SharedCodec1207"]:c27(),["SharedCodec1212"]:c28(),["SharedCodec1213"]:c29(),["SharedCodec1214"]:c30(),["SharedCodec1215"]:c31(),["SharedCodec376"]:c32(),["SharedCodec377"]:c33(),["SharedCodec833"]:c34(),["SharedCodec834"]:c35(),["SharedCodec835"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
