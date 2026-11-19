import { d8758 as c0, d8759 as c1, d8763 as c7, d8764 as c9, d8765 as c10, d8766 as c11, d8767 as c12, d8768 as c13, d8769 as c14 } from '../descriptors/data/391.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d244 as c2 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8677 as c3, d8678 as c4 } from '../descriptors/data/386.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8683 as c5, d8679 as c20, d8684 as c21, d8685 as c22, d8680 as c23, d8681 as c24 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d565 as c6 } from '../descriptors/data/32.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c8 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8770 as c15, d8771 as c16, d8772 as c17, d8773 as c18, d8774 as c19 } from '../descriptors/data/392.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d244 as d244 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec196"]:c9(),["SharedCodec197"]:c10(),["SharedCodec198"]:c11(),["SharedCodec199"]:c12(),["SharedCodec200"]:c13(),["SharedCodec201"]:c14(),["SharedCodec202"]:c15(),["SharedCodec203"]:c16(),["SharedCodec204"]:c17(),["SharedCodec205"]:c18(),["SharedCodec206"]:c19(),["SharedCodec732"]:c20(),["SharedCodec738"]:c21(),["SharedCodec739"]:c22(),["SharedCodec740"]:c23(),["SharedCodec741"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
