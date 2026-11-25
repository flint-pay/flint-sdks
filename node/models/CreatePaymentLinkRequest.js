import { d8353 as c0, d8354 as c1, d8347 as c2, d8352 as c20, d8343 as c21 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8358 as c3, d8356 as c4, d8357 as c5, d8359 as c12 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d358 as c6 } from '../descriptors/data/21.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8141 as c7, d8142 as c8, d8148 as c9 } from '../descriptors/data/357.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8789 as c10, d8786 as c38, d8787 as c39, d8788 as c40 } from '../descriptors/data/392.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c11 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10282 as c13, d10283 as c14, d10287 as c15, d10288 as c16 } from '../descriptors/data/479.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10292 as c17, d10293 as c18, d10298 as c19 } from '../descriptors/data/480.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10308 as c22, d10313 as c23 } from '../descriptors/data/481.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10314 as c24, d10317 as c25, d10318 as c26, d10319 as c27, d10320 as c28, d10321 as c29 } from '../descriptors/data/482.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10326 as c30, d10327 as c31, d10328 as c32 } from '../descriptors/data/483.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10329 as c33 } from '../descriptors/data/484.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8224 as c34 } from '../descriptors/data/362.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10342 as c35, d10343 as c36, d10344 as c37 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d358 as d358 } from '../descriptors/data/21.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["PlatformFeeRuleRequest"]:c21(),["SharedCodec2173"]:c22(),["SharedCodec2178"]:c23(),["SharedCodec2179"]:c24(),["SharedCodec2197"]:c25(),["SharedCodec2198"]:c26(),["SharedCodec2199"]:c27(),["SharedCodec2200"]:c28(),["SharedCodec2201"]:c29(),["SharedCodec2208"]:c30(),["SharedCodec2209"]:c31(),["SharedCodec2210"]:c32(),["SharedCodec2211"]:c33(),["SharedCodec2393"]:c34(),["SharedCodec540"]:c35(),["SharedCodec541"]:c36(),["SharedCodec542"]:c37(),["SharedCodec599"]:c38(),["SharedCodec600"]:c39(),["SharedCodec601"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
