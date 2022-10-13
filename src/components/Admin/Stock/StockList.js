import React from 'react'

export default function StockList() {
  return (
    <div className='main-panel'>
        <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Stock</h4>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                          <th>
                           Product Name
                          </th>
                          <th>
                             Size
                          </th>
                          <th>
                            Color
                          </th>
                          <th>
                            Count
                          </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           jk
                          </td>
                          <td>
                            jk
                          </td>
                          <td>
                           red
                          </td>
                          <td>
                           10
                          </td>
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           jk
                          </td>
                          <td>
                            jk
                          </td>
                          <td>
                           green
                          </td>
                          <td>
                           10
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
