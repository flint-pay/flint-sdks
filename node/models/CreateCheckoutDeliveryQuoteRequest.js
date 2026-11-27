import { d8852 as c0, d8853 as c1 } from '../descriptors/data/397.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d245 as c2 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8772 as c3, d8773 as c4, d8778 as c5, d8774 as c20, d8779 as c21, d8780 as c22, d8775 as c23, d8776 as c24 } from '../descriptors/data/393.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d567 as c6 } from '../descriptors/data/33.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8857 as c7, d8858 as c9, d8859 as c10, d8860 as c11, d8861 as c12, d8862 as c13, d8863 as c14, d8864 as c15, d8865 as c16, d8866 as c17, d8867 as c18, d8868 as c19 } from '../descriptors/data/398.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c8 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d245 as d245 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec199"]:c9(),["SharedCodec200"]:c10(),["SharedCodec201"]:c11(),["SharedCodec202"]:c12(),["SharedCodec203"]:c13(),["SharedCodec204"]:c14(),["SharedCodec205"]:c15(),["SharedCodec206"]:c16(),["SharedCodec207"]:c17(),["SharedCodec208"]:c18(),["SharedCodec209"]:c19(),["SharedCodec766"]:c20(),["SharedCodec772"]:c21(),["SharedCodec773"]:c22(),["SharedCodec774"]:c23(),["SharedCodec775"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
