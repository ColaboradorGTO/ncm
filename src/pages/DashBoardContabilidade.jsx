import React, { Fragment, useEffect, useState, Suspense, lazy } from "react"


const ActionPesquisaNcmExcecao = lazy(() => import("../componets/Contabilidade/Components/ActionNcmExcecao/actionPesquisaNcmExcecao").then(module => ({ default: module.ActionPesquisaNcmExcecao })));

export const DashBoardContabilidade = () => {

  return (

  <Fragment>
      <div className="page-wrapper">
        <div className="page-inner">
          <div className="page-content-wrapper">
            <main id="js-page-content" role="main" className="page-content">
              <div className="row">
                <div className="col-xl-12">
                  <div id="panel-1" className="panel">
                    <div className="panel-container show">
                      <div className="panel-content">
                        <Suspense fallback={<div>Loading...</div>}>
                          <ActionPesquisaNcmExcecao />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  )
}