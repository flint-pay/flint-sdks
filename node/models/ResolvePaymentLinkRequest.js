import { d6155 as c0, d6150 as c7, d6151 as c8 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8023 as c2 } from '../descriptors/data/387.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8036 as c3, d8037 as c4, d8038 as c6 } from '../descriptors/data/388.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1341 as c5 } from '../descriptors/data/64.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6160 as c9, d6161 as c10, d6162 as c11 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1341 as d1341 } from '../descriptors/data/64.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["MoneyValue"]:c1(),["PaymentLinkResolvePrefillRequest"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec145"]:c7(),["SharedCodec146"]:c8(),["SharedCodec169"]:c9(),["SharedCodec170"]:c10(),["SubscriptionPlanChangeLineItemRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
