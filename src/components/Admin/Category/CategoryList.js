import React from 'react'

export default function CategoryList() {
  return (
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Category</h4>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                        <th>CATEGORY NAME</th>
                      <th>TITLE</th>
                      <th>PRIORITY</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           sam
                          </td>
                          <td>
                           sdf
                          </td>
                          <td>
                           low
                          </td>
                          
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           jon
                          </td>
                          <td>
                            dfgh
                          </td>
                          <td>
                           high
                          </td>
                         
                          
                      </tr>
                     
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
