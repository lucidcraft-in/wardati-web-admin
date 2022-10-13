import React from 'react'
 

export default function UserList() {
  return (
    <div className="main-panel">
        <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Users</h4>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                          <th>
                            Name
                          </th>
                          <th>
                             Email
                          </th>
                          <th>
                            Admin
                          </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           Athul
                          </td>
                          <td>
                            athulsample@gmail.com
                          </td>
                          <td>
                           Sam
                          </td>
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           jon
                          </td>
                          <td>
                            jontest@gmail.com
                          </td>
                          <td>
                           Stalin
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
