import { d8263 as c0, d8264 as c1, d8257 as c2, d8266 as c3, d8267 as c4, d8268 as c5, d8269 as c12, d8262 as c20 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d358 as c6 } from '../descriptors/data/20.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8058 as c7, d8059 as c8, d8065 as c9 } from '../descriptors/data/353.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8696 as c10, d8693 as c21, d8694 as c22, d8695 as c23 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c11 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10185 as c13, d10186 as c14, d10190 as c15, d10191 as c16 } from '../descriptors/data/475.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10195 as c17, d10196 as c18, d10204 as c19 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10221 as c24, d10226 as c25, d10227 as c26 } from '../descriptors/data/478.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10230 as c27, d10231 as c28, d10232 as c29, d10233 as c30, d10234 as c31 } from '../descriptors/data/479.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10239 as c32, d10240 as c33, d10241 as c34, d10242 as c35 } from '../descriptors/data/480.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10258 as c36, d10259 as c37, d10260 as c38 } from '../descriptors/data/481.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d358 as d358 } from '../descriptors/data/20.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1455"]:c21(),["SharedCodec1456"]:c22(),["SharedCodec1457"]:c23(),["SharedCodec2143"]:c24(),["SharedCodec2148"]:c25(),["SharedCodec2149"]:c26(),["SharedCodec2167"]:c27(),["SharedCodec2168"]:c28(),["SharedCodec2169"]:c29(),["SharedCodec2170"]:c30(),["SharedCodec2171"]:c31(),["SharedCodec2178"]:c32(),["SharedCodec2179"]:c33(),["SharedCodec2180"]:c34(),["SharedCodec2181"]:c35(),["SharedCodec529"]:c36(),["SharedCodec530"]:c37(),["SharedCodec531"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
