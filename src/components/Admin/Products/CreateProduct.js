import React from 'react'

export default function CreateProduct() {
  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Add Product</h4>
                <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputmrp3">MRP</label>
                      <input type="number" class="form-control" id="exampleInputmrp3" placeholder="MRP"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputSellingprice4">Selling Price</label>
                      <input type="number" class="form-control" id="exampleInputSellingprice4" placeholder="Selling Price"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPromotion4">Promotion Offer Percentage</label>
                      <input type="number" class="form-control" id="exampleInputPromotion4" placeholder="Promotion Offer"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectCategory">Category</label>
                        <select class="form-control" id="exampleSelectCategory">
                          <option>category 1</option>
                          <option>category 2</option>
                        </select>
                      </div>
                      <div class="form-group">
                      <label for="exampleSelectCategory">Sub Category</label>
                        <select class="form-control" id="exampleSelectCategory">
                          <option>sub category 1</option>
                          <option>sub category 2</option>
                        </select>
                      </div>
                    <div class="form-group">
                      <label>Upload Image</label>
                      <input type="file" name="img[]" class="file-upload-default"/>
                      <div class="input-group col-xs-12">
                        <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                        <span class="input-group-append">
                          <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCity1">Brand</label>
                      <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleTextarea1">Description</label>
                      <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
  )
}
