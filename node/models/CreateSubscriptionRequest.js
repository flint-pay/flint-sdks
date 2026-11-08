import { d4541 as c0, d4539 as c4, d4540 as c5 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d331 as c1 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4676 as c2, d4677 as c6, d4678 as c7 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6984 as c8, d6985 as c9 } from '../descriptors/data/332.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5936 as c10, d5937 as c11 } from '../descriptors/data/272.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6986 as c12, d6987 as c13, d6988 as c14, d6996 as c16, d6997 as c17, d6998 as c18 } from '../descriptors/data/333.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1475 as c15 } from '../descriptors/data/68.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4082 as c19 } from '../descriptors/data/167.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4091 as c20, d4097 as c21 } from '../descriptors/data/168.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4143 as c22, d4145 as c23 } from '../descriptors/data/170.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d331 as d331 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec101"]:c6(),["SharedCodec102"]:c7(),["SharedCodec1277"]:c8(),["SharedCodec1278"]:c9(),["SharedCodec1289"]:c10(),["SharedCodec1290"]:c11(),["SharedCodec1337"]:c12(),["SharedCodec1338"]:c13(),["SharedCodec1339"]:c14(),["SharedCodec1340"]:c15(),["SharedCodec334"]:c16(),["SubscriptionBillingScheduleRequest"]:c17(),["SubscriptionBillingStartRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["SubscriptionOfferLineItemRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22(),["SubscriptionTermsRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
