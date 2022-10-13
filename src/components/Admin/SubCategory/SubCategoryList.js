import React from 'react'
import { Link } from 'react-router-dom';

export default function SubCategoryList() {
  return (
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">SubCategory</h4>
                   <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/subcategory/create" aria-expanded="false" aria-controls="charts">
              <i class="icon-plus menu-icon"></i>
              <span class="menu-title">Add SubCategory</span>
              
            </Link>
                   </div>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                        <th>NAME</th>
                    <th>TITTLE</th>
                    <th>CATEGORY</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           jk
                          </td>
                          <td>
                           sdf
                          </td>
                          <td>
                           jon
                          </td>
                          
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           sk
                          </td>
                          <td>
                            dfgh
                          </td>
                          <td>
                           sam
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
