import React from 'react'

export default function PromotionList() {
  return (
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Promotions</h4>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>PROMO CODE</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td  class="py-1">
                           sam
                          </td>
                          <td>
                            4512785623
                          </td>
                          <td>
                           kl34
                          </td>
                          
                          
                      </tr>
                      <tr>
                          <td  class="py-1">
                           jon
                          </td>
                          <td>
                            8956231245
                          </td>
                          <td>
                           gk12
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
