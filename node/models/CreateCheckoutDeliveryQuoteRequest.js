import { d6578 as c0, d6579 as c1 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d202 as c2 } from '../descriptors/data/9.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6498 as c3, d6499 as c4 } from '../descriptors/data/296.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6504 as c5, d6500 as c20, d6505 as c21, d6506 as c22, d6501 as c23, d6502 as c24 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d473 as c6 } from '../descriptors/data/28.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6583 as c7, d6584 as c9, d6585 as c10, d6586 as c11, d6587 as c12, d6588 as c13, d6589 as c14, d6590 as c15, d6591 as c16, d6592 as c17, d6593 as c18, d6594 as c19 } from '../descriptors/data/301.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c8 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d202 as d202 } from '../descriptors/data/9.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec127"]:c9(),["SharedCodec128"]:c10(),["SharedCodec129"]:c11(),["SharedCodec130"]:c12(),["SharedCodec131"]:c13(),["SharedCodec132"]:c14(),["SharedCodec133"]:c15(),["SharedCodec134"]:c16(),["SharedCodec135"]:c17(),["SharedCodec136"]:c18(),["SharedCodec137"]:c19(),["SharedCodec504"]:c20(),["SharedCodec505"]:c21(),["SharedCodec506"]:c22(),["SharedCodec507"]:c23(),["SharedCodec508"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
