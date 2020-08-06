import productData from './server/model/product';
import vm from 'v-response';

exports.createProduct = (req, res, next) =>{
  let productBody = req.body;
  const newProduct = new productData(productBody);
  newProduct.save()
    .then(saved =>{
      if (!saved) {
        return res.status(400)
          .json(vm.ApiResponse(false, 400, 'product could not be created'));
      }
      if (saved) {
        return res.status(201)
          .json(vm.ApiResponse(true, 201, 'product created successfully', saved ));
      }
    })
    .catch(error =>{
      return res.status(500)
        .json(vm.ApiResponse(false, 500, 'error', undefined, error));
    });
};