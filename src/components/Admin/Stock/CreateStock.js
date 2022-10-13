import React from 'react'

export default function CreateStock() {
  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Stock</h4>
                <form class="forms-sample">
                    
                    <div class="form-group">
                      <label for="exampleSelectProduct">Product</label>
                        <select class="form-control" id="exampleSelectProduct">
                          <option>product 1</option>
                          <option>product 2</option>
                        </select>
                      </div>
                      <div class="form-group">
                      <label for="exampleSelectsize">Size</label>
                        <select class="form-control" id="exampleSelectsize">
                          <option>size 1</option>
                          <option>size 2</option>
                        </select>
                      </div>
                      <div class="form-group">
                      <label for="exampleInputColor">Color</label>
                      <input type="color" class="form-control" id="exampleInputColor" placeholder="Color"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCount4">Count</label>
                      <input type="number" class="form-control" id="exampleInputCount4" placeholder="Count"/>
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
