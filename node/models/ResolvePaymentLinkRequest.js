import { d8355 as c0, d8360 as c12, d8361 as c13, d8362 as c17 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10352 as c1, d10353 as c3, d10356 as c4, d10350 as c9 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c2, d8349 as c7, d8350 as c8 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10303 as c5 } from '../descriptors/data/482.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1778 as c6 } from '../descriptors/data/88.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10363 as c10, d10364 as c11 } from '../descriptors/data/487.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8808 as c14, d8809 as c15, d8810 as c16 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1778 as d1778 } from '../descriptors/data/88.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["PaymentLinkResolvePrefillRequest"]:c1(),["PlatformFeeMoney"]:c2(),["PublicCatalogModifierRequest"]:c3(),["PublicCatalogTextModifierRequest"]:c4(),["ResolvePaymentLinkLineItemModifiers"]:c5(),["ResolvePaymentLinkRequest"]:c6(),["SharedCodec235"]:c7(),["SharedCodec236"]:c8(),["SharedCodec2451"]:c9(),["SharedCodec2540"]:c10(),["SharedCodec2541"]:c11(),["SharedCodec319"]:c12(),["SharedCodec320"]:c13(),["SharedCodec493"]:c14(),["SharedCodec495"]:c15(),["SharedCodec496"]:c16(),["SubscriptionPlanChangeLineItemRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
