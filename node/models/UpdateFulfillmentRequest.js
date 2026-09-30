import { d758 as c0, d65 as c1, d319 as c2, d318 as c3, d66 as c4, d2216 as c5, d2217 as c6, d2219 as c7, d2220 as c8, d2222 as c9, d2201 as c10, d2215 as c11, d2223 as c12, d2218 as c13, d2221 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2223 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec109"]:c2(),["SharedCodec110"]:c3(),["SharedCodec18"]:c4(),["SharedCodec572"]:c5(),["SharedCodec573"]:c6(),["SharedCodec574"]:c7(),["SharedCodec575"]:c8(),["SharedCodec576"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
