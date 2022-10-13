import React from 'react'

export default function CreatePromotion() {
  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Promotion</h4>
                <form class="forms-sample">
      
                    {/* <div class="form-check">
                      <label for="exampleInputName1" className='form-check-label'> Promotion Active Status</label>
                      <input type="checkbox" class="form-check-input" id="exampleInputName1" placeholder=" Name"/>
                    </div> */}
                      <div class="form-group">
                      <label for="exampleInputName1"> Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder=" Name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputphone">Phone</label>
                      <input type="number" class="form-control" id="exampleInputphone" placeholder="Phone Number"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPromoCode"> Promo Code</label>
                      <input type="text" class="form-control" id="exampleInputPromoCode" placeholder=" PromoCode"/>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                             Promotion Active Status
                        </label>
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
