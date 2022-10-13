import React from 'react'
import { Link } from 'react-router-dom';
export default function ProductList() {
  return (
    <div class="main-panel">
    <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Products</h4>
                <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/products/create" aria-expanded="false" aria-controls="charts">
              <i class="icon-plus menu-icon"></i>
              <span class="menu-title">Add Product</span>
              
            </Link>
                   </div>
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                          <th>
                            User
                          </th>
                          <th>
                            First name
                          </th>
                          <th>
                            Progress
                          </th>
                          <th>
                            Amount
                          </th>
                          <th>
                            Deadline
                          </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           ddf
                          </td>
                          <td>
                            Herman Beck
                          </td>
                          <td>
                           jjhhj
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                      </tr>
                      <tr>
                          <td class="py-1">
                           rerer
                          </td>
                          <td>
                            Messsy Adam
                          </td>
                          <td>
                           rere
                          </td>
                          <td>
                            $245.30
                          </td>
                          <td>
                            July 1, 2015
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
