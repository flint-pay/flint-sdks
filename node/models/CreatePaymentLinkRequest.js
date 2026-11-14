import { d6131 as c0, d6132 as c1, d6126 as c2, d6133 as c3, d6134 as c4, d6135 as c5, d6136 as c12 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d319 as c6 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c7, d5930 as c8 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c9 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6553 as c10, d6550 as c34, d6551 as c35, d6552 as c36 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c11 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7982 as c13, d7983 as c14, d7987 as c15, d7988 as c16 } from '../descriptors/data/386.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7992 as c17, d7993 as c18, d8001 as c19 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8017 as c20 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8022 as c21, d8023 as c22, d8025 as c23, d8026 as c24, d8027 as c25, d8028 as c26, d8029 as c27 } from '../descriptors/data/389.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8034 as c28, d8035 as c29 } from '../descriptors/data/390.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8036 as c30, d8037 as c31 } from '../descriptors/data/391.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8049 as c32, d8050 as c33 } from '../descriptors/data/392.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1194"]:c20(),["SharedCodec1199"]:c21(),["SharedCodec1200"]:c22(),["SharedCodec1202"]:c23(),["SharedCodec1203"]:c24(),["SharedCodec1204"]:c25(),["SharedCodec1205"]:c26(),["SharedCodec1206"]:c27(),["SharedCodec1211"]:c28(),["SharedCodec1212"]:c29(),["SharedCodec1213"]:c30(),["SharedCodec1214"]:c31(),["SharedCodec380"]:c32(),["SharedCodec381"]:c33(),["SharedCodec836"]:c34(),["SharedCodec837"]:c35(),["SharedCodec838"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
