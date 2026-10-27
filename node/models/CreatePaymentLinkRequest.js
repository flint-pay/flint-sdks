import { d3220 as c0 } from '../descriptors/data/128.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3230 as c1, d3232 as c2, d3238 as c4 } from '../descriptors/data/129.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3312 as c3 } from '../descriptors/data/133.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d190 as c5 } from '../descriptors/data/10.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3082 as c6 } from '../descriptors/data/120.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4085 as c7, d4086 as c24, d4087 as c25, d4088 as c26 } from '../descriptors/data/174.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c8 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3251 as c9, d3254 as c22, d3250 as c23 } from '../descriptors/data/130.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4652 as c10 } from '../descriptors/data/206.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4653 as c11, d4657 as c12, d4658 as c13, d4662 as c14, d4663 as c15 } from '../descriptors/data/207.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4668 as c16, d4681 as c17, d4682 as c18 } from '../descriptors/data/208.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4683 as c19, d4684 as c20, d4685 as c21 } from '../descriptors/data/209.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d190 as d190 } from '../descriptors/data/10.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d190;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFields"]:c0(),["CheckoutPromotionConfig"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfig"]:c3(),["CheckoutTipConfig"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageRequest"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTax"]:c9(),["PaymentLinkCustomFieldRequest"]:c10(),["PaymentLinkCustomTextConfig"]:c11(),["PaymentLinkEventConfigRequest"]:c12(),["PaymentLinkLegalConfig"]:c13(),["PaymentLinkLineItemRequest"]:c14(),["PaymentLinkPaymentConfig"]:c15(),["PaymentLinkThemeConfig"]:c16(),["SharedCodec1003"]:c17(),["SharedCodec1004"]:c18(),["SharedCodec1005"]:c19(),["SharedCodec1006"]:c20(),["SharedCodec1007"]:c21(),["SharedCodec37"]:c22(),["SharedCodec38"]:c23(),["SharedCodec859"]:c24(),["SharedCodec860"]:c25(),["SharedCodec861"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
