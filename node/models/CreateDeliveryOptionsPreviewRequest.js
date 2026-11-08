import { d197 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5596 as c1 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4545 as c2, d4546 as c3, d4547 as c38, d4548 as c41, d4549 as c42 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4573 as c4, d4574 as c39, d4575 as c40, d4578 as c43 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d445 as c5 } from '../descriptors/data/24.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c6 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5064 as c7, d5065 as c8, d5066 as c9, d5067 as c10, d5068 as c11, d5069 as c15, d5070 as c16, d5071 as c17, d5072 as c18, d5082 as c23, d5083 as c25, d5084 as c26, d5073 as c27, d5074 as c28, d5075 as c29, d5076 as c30, d5077 as c31, d5078 as c32, d5079 as c33, d5080 as c34, d5081 as c44 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c12 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c13 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5058 as c14, d5059 as c19, d5060 as c20, d5061 as c21, d5062 as c22, d5063 as c24 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5638 as c35, d5639 as c36, d5640 as c37 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c45, d4362 as c46 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d197 as d197 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryOptionsPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPreviewRoutingSource"]:c5(),["Dimensions"]:c6(),["GiftCardPurchaseDetailsRequest"]:c7(),["GiftCardPurchaseRecipientRequest"]:c8(),["ImageReferenceRequest"]:c9(),["LineItemFulfillmentOriginRequest"]:c10(),["LineItemFulfillmentRequest"]:c11(),["MetadataRequest"]:c12(),["MoneyValue"]:c13(),["OrderDraftLineItemInventoryDemandRequest"]:c14(),["OrderDraftLineItemTaxCalculationRequest"]:c15(),["OrderDraftLineItemTaxRequest"]:c16(),["OrderDraftTaxComponentRequest"]:c17(),["OrderDraftTaxJurisdictionRequest"]:c18(),["SharedCodec252"]:c19(),["SharedCodec253"]:c20(),["SharedCodec254"]:c21(),["SharedCodec255"]:c22(),["SharedCodec256"]:c23(),["SharedCodec257"]:c24(),["SharedCodec258"]:c25(),["SharedCodec259"]:c26(),["SharedCodec261"]:c27(),["SharedCodec262"]:c28(),["SharedCodec263"]:c29(),["SharedCodec264"]:c30(),["SharedCodec266"]:c31(),["SharedCodec267"]:c32(),["SharedCodec269"]:c33(),["SharedCodec270"]:c34(),["SharedCodec271"]:c35(),["SharedCodec272"]:c36(),["SharedCodec273"]:c37(),["SharedCodec375"]:c38(),["SharedCodec376"]:c39(),["SharedCodec377"]:c40(),["SharedCodec378"]:c41(),["SharedCodec379"]:c42(),["SharedCodec604"]:c43(),["SubscribedLineRequest"]:c44(),["TextModifierRequest"]:c45(),["Weight"]:c46()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryOptionsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
