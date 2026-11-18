import { d8725 as c0, d8726 as c1, d8730 as c7, d8731 as c9, d8732 as c10, d8733 as c11, d8734 as c12 } from '../descriptors/data/385.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d242 as c2 } from '../descriptors/data/11.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8645 as c3, d8646 as c4, d8651 as c5, d8647 as c20, d8652 as c21, d8653 as c22, d8648 as c23, d8649 as c24 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d563 as c6 } from '../descriptors/data/32.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c8 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8735 as c13, d8736 as c14, d8737 as c15, d8738 as c16, d8739 as c17, d8740 as c18, d8741 as c19 } from '../descriptors/data/386.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d242 as d242 } from '../descriptors/data/11.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec196"]:c9(),["SharedCodec197"]:c10(),["SharedCodec198"]:c11(),["SharedCodec199"]:c12(),["SharedCodec200"]:c13(),["SharedCodec201"]:c14(),["SharedCodec202"]:c15(),["SharedCodec203"]:c16(),["SharedCodec204"]:c17(),["SharedCodec205"]:c18(),["SharedCodec206"]:c19(),["SharedCodec729"]:c20(),["SharedCodec735"]:c21(),["SharedCodec736"]:c22(),["SharedCodec737"]:c23(),["SharedCodec738"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
