import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryList() {
  return (
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Category</h4>
                   <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/category/create" aria-expanded="false" aria-controls="charts">
              <i class="icon-plus menu-icon"></i>
              <span class="menu-title">Add Category</span>
              
            </Link>
                   </div>
                
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
