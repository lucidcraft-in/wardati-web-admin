import React from 'react'

export default function CreateCategory() {
  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Category</h4>
                <form class="forms-sample">
                    
                    
                      <div class="form-group">
                      <label for="exampleInputName">Category Name</label>
                      <input type="text" class="form-control" id="exampleInputName" placeholder="Category Name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName">Title</label>
                      <input type="text" class="form-control" id="exampleInputTitle" placeholder="Title"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPriority4">Priority</label>
                      <input type="number" class="form-control" id="exampleInputPriority4" placeholder="Priority"/>
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
