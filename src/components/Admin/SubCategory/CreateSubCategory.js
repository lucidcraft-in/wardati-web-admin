import React from 'react'

export default function CreateSubCategory() {
  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create SubCategory</h4>
                <form class="forms-sample">
                    
                    
                      <div class="form-group">
                      <label for="exampleInputName1"> Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder=" Name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName">Title</label>
                      <input type="text" class="form-control" id="exampleInputTitle" placeholder="Title"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectCategory1">Parent Category</label>
                        <select class="form-control" id="exampleSelectCategory1">
                          <option>category 1</option>
                          <option>category 2</option>
                        </select>
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
