import React from 'react'

export default function OrderList() {
  return (
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Order</h4>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                          <th>
                          ORDER NUMBER
                          </th>
                          <th>
                          USER
                          </th>
                          <th>
                          DATE
                          </th>
                          <th>
                          TOTAL
                          </th>
                          <th>
                            PAID
                           </th>
                          <th>
                            STATUS
                          </th>
                  
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           jk005
                          </td>
                          <td>
                            jk
                          </td>
                          <td>
                           kl
                          </td>
                          <td>
                           1000
                          </td>
                          <td>
                           we
                          </td>
                          <td>
                           done
                          </td>
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           sd551
                          </td>
                          <td>
                            jk
                          </td>
                          <td>
                           gk
                          </td>
                          <td>
                           5000
                          </td>
                          <td>
                           jk
                          </td>
                          <td>
                           pending
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
