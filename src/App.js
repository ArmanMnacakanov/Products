// // Пример использования Route в компоненте App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop";
import ProductList from "./Shop/Product_List/Product_List";
function App() {

     const productsData = [
       {
           id: 1,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/shop-test.png',
           name: 'AFFOGATO',
           price: '22.00$',
           description:'This is a amazing product'
        },
        {
           id: 2,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-2.png',
           name: 'CASCARA COFFEE',
           price: '12.00$',
           description:'This is a amazing product'
        },
        {
           id: 3,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-3.png',
           name: 'VIETNAMESE',
           price: '15.00$',
           description:'This is a amazing product'
        },
        {
           id: 4,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-4-1.png',
           name: 'CAFFE BREVE',
           price: '18.00$',
           description:'This is a amazing product'
        },
        {
           id: 5,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-8.png',
           name: 'IMMERSION COFFEE',
           price: '30.00$',
           description:'This is a amazing product'
        },
        {
           id: 6,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-7.png',
           name: 'IRISH COFFEE',
           price: '21.00$',
           description:'This is a amazing product'
        },
        {
           id: 7,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-6.png',
           name: 'CAFFÈ AMERICANO',
           price: '58.00$',
           description:'This is a amazing product'
        },
        {
           id: 8,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-5.png',
           name: 'ETHIOPIA BLEND',
           price: '26.00$',
           description:'This is a amazing product'
        },
        {
           id: 9,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-4-1.png',
           name: 'BRAZIL BLEND',
           price: '26.00$',
           description:'This is a amazing product'
        },
        {
           id: 10,
           img: 'https://bridge312.qodeinteractive.com/wp-content/uploads/2020/01/product-image-3.png',
           name: 'COLUMBIA',
           price: '30.00$',
           description:'This is a amazing product'
        }
   ];

   return (
       <BrowserRouter>
         <Routes>
           <Route path="/products/:id" element={<ProductList products={productsData} />} />
           <Route index element={<Shop products={productsData} />} />
         </Routes>

       </BrowserRouter>
   );
}
export default App