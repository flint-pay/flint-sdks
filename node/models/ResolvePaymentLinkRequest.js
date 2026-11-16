import { d6958 as c0, d6953 as c7, d6954 as c8, d6963 as c9 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8826 as c2 } from '../descriptors/data/422.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8839 as c3, d8840 as c4, d8841 as c6 } from '../descriptors/data/423.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1341 as c5 } from '../descriptors/data/64.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6964 as c10, d6965 as c11 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1341 as d1341 } from '../descriptors/data/64.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["MoneyValue"]:c1(),["PaymentLinkResolvePrefillRequest"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec188"]:c7(),["SharedCodec189"]:c8(),["SharedCodec259"]:c9(),["SharedCodec260"]:c10(),["SubscriptionPlanChangeLineItemRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
