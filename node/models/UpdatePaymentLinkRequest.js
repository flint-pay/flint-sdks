import { d8263 as c0, d8264 as c1, d8266 as c2, d8267 as c3, d8268 as c4, d8269 as c9, d8262 as c18 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8058 as c5, d8059 as c6 } from '../descriptors/data/353.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8696 as c7, d8693 as c20, d8694 as c21, d8695 as c22 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c8 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10184 as c10, d10187 as c11, d10189 as c12, d10192 as c13 } from '../descriptors/data/475.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10194 as c14, d10197 as c15, d10200 as c16, d10205 as c17 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9069 as c19 } from '../descriptors/data/411.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10221 as c23, d10226 as c24, d10227 as c25 } from '../descriptors/data/478.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10230 as c26, d10231 as c27, d10232 as c28, d10233 as c29, d10234 as c30, d10235 as c31, d10236 as c32, d10237 as c33, d10238 as c34 } from '../descriptors/data/479.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8050 as c35, d8051 as c36, d8049 as c37 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8393 as c38 } from '../descriptors/data/372.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9762 as c39, d9763 as c40 } from '../descriptors/data/452.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10246 as c41, d10247 as c42 } from '../descriptors/data/480.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10248 as c43, d10258 as c44 } from '../descriptors/data/481.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7779 as c45 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7779 as d7779 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1455"]:c20(),["SharedCodec1456"]:c21(),["SharedCodec1457"]:c22(),["SharedCodec2143"]:c23(),["SharedCodec2148"]:c24(),["SharedCodec2149"]:c25(),["SharedCodec2167"]:c26(),["SharedCodec2168"]:c27(),["SharedCodec2169"]:c28(),["SharedCodec2170"]:c29(),["SharedCodec2171"]:c30(),["SharedCodec2172"]:c31(),["SharedCodec2173"]:c32(),["SharedCodec2174"]:c33(),["SharedCodec2175"]:c34(),["SharedCodec3071"]:c35(),["SharedCodec3072"]:c36(),["SharedCodec3073"]:c37(),["SharedCodec3077"]:c38(),["SharedCodec3129"]:c39(),["SharedCodec3130"]:c40(),["SharedCodec3158"]:c41(),["SharedCodec3159"]:c42(),["SharedCodec3160"]:c43(),["SharedCodec529"]:c44(),["UpdatePaymentLinkRequest"]:c45()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
